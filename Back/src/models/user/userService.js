const userModel = require("./userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


module.exports = {
    create: async (req, res) => {
        let username = req.body.username
        let password = req.body.password

        const salt = await bcrypt.genSalt(10); //Encriptacion
        const hashedPassword = await bcrypt.hash(password, salt); //Encriptacion
        const record = await userModel.findOne({username: username});
        if (record){
            return res.status(400).send({
                message: "El username ya existe",
            })
        } else {
            const user = new userModel ({
                username: username,
                password: hashedPassword
            })
    
            const result = await user.save();

            const {_id} = await result.toJSON();
            const token = jwt.sign({_id:_id}, "secret");

            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24*60*60*1000
            })
            res.send({
                message:"Success"
            })
        }      
    },
    

    buscar: async (req, res) => {
         const user = await userModel.findOne({username:req.body.username})
         if(!user){
            return res.status(404).send({
               message:"Usuario no encontrado"
            })
         }

         if (!(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(400).send({
               message: "Password incorrecta"
            })
         }

         const token = jwt.sign({_id:user._id}, "secret key")
         res.cookie("jwt", token, {
            httpOnly: true, // Para prevenir acceso mediante JS
            secure: true, // Solo se envía en HTTPS
            sameSite: 'strict', // Restricción de envío con solicitudes entre sitios
            maxAge: 30 * 60 * 1000, // Ejemplo de tiempo de vida de 30 minutos
         })
         res.json({
            message: "Success",
            token: createToken(user)
         })
    }
}
function createToken(user){
        const payload={
            _id:user._id
        }
        return jwt.sign(payload, 'adrian');
}

