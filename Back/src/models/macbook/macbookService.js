const macbookModel = require ('./macbookModel');
const fs = require('fs');
const path = require('path');

module.exports = {
    create: async(req, res) => {
        const { modelo, caracteristicas, memoria, almacenamiento, precio, visible } = req.body;
        const imagenPrincipal = req.files.imagenPrincipal ? '/uploads/' + req.files.imagenPrincipal[0].filename : null;
        const imagePaths = req.files.imagePaths ? req.files.imagePaths.map(file => '/uploads/' + file.filename) : [];
        const nuevoMacbook = new macbookModel({
            modelo, caracteristicas, memoria, almacenamiento, precio, visible, imagenPrincipal, imagePaths
        })
        nuevoMacbook
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    get: async(req, res) => {
        macbookModel
            .find()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    getByID: async(req, res) => {
        const {id} = req.params;
        macbookModel
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    update: async(req, res) => {
        const { id } = req.params;
        const { modelo, caracteristicas, memoria, almacenamiento, precio, visible } = req.body;

        let updateData = {
            modelo, 
            caracteristicas, 
            memoria, 
            almacenamiento, 
            precio, 
            visible
        }
        if (req.files.imagenPrincipal && req.files.imagenPrincipal.length > 0) {
            const imagenPrincipalPath = '/uploads/' + req.files.imagenPrincipal[0].filename;
            updateData.imagenPrincipal = imagenPrincipalPath;
        }
    
        if (req.files.imagePaths && req.files.imagePaths.length > 0) {
            const imagePaths = req.files.imagePaths.map(file => '/uploads/' + file.filename);
            updateData.imagePaths = imagePaths;
        }

        macbookModel.updateOne({ _id: id }, { $set: updateData })
            .then(data => res.json(data))
            .catch(error => res.json({ message: error }));
    },

    delete: async(req, res) => {
        const {id} = req.params;
        //await eliminarImagen(id);
        macbookModel
            .deleteOne({ _id: id})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    buscar: async(req, res) => {
        const {texto_busqueda} = req.params;
        macbookModel
            .find({"modelo": new RegExp(texto_busqueda, 'i')})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }

}

const eliminarImagen = async (id) => {
    try {
        const pmackbook = await mackbookModel.findById(id);
        if (mackbook) {
            // Elimina la imagen principal si existe
            if (mackbook.imagenPrincipal) {
                const imagenPrincipalPath = path.join(__dirname, 'public', mackbook.imagenPrincipal);
                if (fs.existsSync(imagenPrincipalPath)) {
                    fs.unlinkSync(imagenPrincipalPath);
                }
            }
            
            // Elimina las imágenes secundarias si existen
            if (mackbook.imagePaths && mackbook.imagePaths.length) {
                mackbook.imagePaths.forEach(imgPath => {
                    const fullPath = path.join(__dirname, 'public', imgPath);
                    if (fs.existsSync(fullPath)) {
                        fs.unlinkSync(fullPath);
                    }
                });
            }
        }
    } catch (error) {
        console.error("Error al eliminar las imágenes: ", error);
        // Considera manejar el error de manera más específica o lanzarlo para que el llamador pueda manejarlo.
        throw error;
    }
}