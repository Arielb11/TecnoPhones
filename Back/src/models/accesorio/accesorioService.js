const accesorioModel = require ("./accesorioModel");
const fs = require('fs');

module.exports = {
    create: async(req, res) => {
        const {nombre, precio} = req.body;
        const nuevoAccesorio = new accesorioModel({
            nombre: nombre, precio: precio, imagePath:'/uploads/'+req.file.filename 
        })
        nuevoAccesorio.
            save()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    get: async(req, res) => {
        accesorioModel
            .find()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    getByID: async(req, res) => {
        const {id} = req.params;
        accesorioModel
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    update: async(req, res) => {
        const {id} = req.params;
        const {nombre, precio} = req.body;
        let imagen = '';
        let valores = {nombre: nombre, precio: precio}
        if (req.file != null) {
            imagen = '/uploads/'+req.file.filename;
            valores = {nombre: nombre, precio: precio, imagePath: imagen};
            await eliminarImagen(id);
        }
        accesorioModel
            .updateOne({ _id: id}, {$set: valores})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    delete: async(req, res) => {
        const {id} = req.params;
        await eliminarImagen(id);
        accesorioModel
            .deleteOne({ _id: id})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }
}

const eliminarImagen = async(id) => {
    const accesorio = await accesorioModel.findById(id);
    const img = accesorio.imagePath;
    fs.unlinkSync('./public/'+img);
}