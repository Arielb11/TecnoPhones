const phoneModel = require ("./phoneModel");
const fs = require('fs');


module.exports = {
    create: async(req, res) => {
            const {modelo, estado, bateria, capacidad, observaciones, valor} = req.body;
            const nuevoPhone = new phoneModel({
                modelo: modelo, estado: estado, bateria: bateria, capacidad: capacidad, observaciones: observaciones, valor: valor, imagePath:'/uploads/'+req.file.filename
            })
            nuevoPhone
                .save()
                .then((data) => res.json(data))
                .catch((error) => res.json({message: error}));
    },

    get: async(req, res) => {
        phoneModel
            .find()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    getByID: async(req, res) => {
        const {id} = req.params;
        phoneModel
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    update: async(req, res) => {
        const {id} = req.params;
        const {modelo, estado, bateria, capacidad, observaciones, valor} = req.body;
        let imagen = '';
        let valores = {modelo: modelo, estado: estado, bateria: bateria, capacidad: capacidad, observaciones: observaciones, valor: valor};
        if (req.file != null){
            imagen = '/uploads/'+req.file.filename;
            valores = {modelo: modelo, estado: estado, bateria: bateria, capacidad: capacidad, observaciones: observaciones, valor: valor, imagePath: imagen}
            await eliminarImagen(id);
        }
        phoneModel
            .updateOne({ _id: id}, {$set: valores})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }, 

    delete: async(req, res) => {
        const {id} = req.params;
        await eliminarImagen(id);
        phoneModel
            .deleteOne({ _id: id})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }
}

const eliminarImagen = async(id) => {
    const phone = await phoneModel.findById(id);
    const img = phone.imagePath;
    fs.unlinkSync('./public/'+img);
}