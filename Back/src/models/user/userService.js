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
            httpOnly: true,
            maxAge:24*60*60*1000 //Por un dia
         })

         res.send({
            message: "Success"
         })
    }
}
/*module.exports.loginuserDBService = (userDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      userModel.findOne({ username: userDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               if(result.password== userDetails.password)
               {
                  resolve({status: true,msg: "Student Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "Student Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Student Error Detailssss"});
            }
         }
      
      });
      
   });
}*/

// npm  i simple-encryptor

