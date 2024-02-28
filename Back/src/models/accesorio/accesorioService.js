const accesorioModel = require ("./accesorioModel");
const fs = require('fs');
const path = require('path');

module.exports = {
    create: async(req, res) => {
        const {nombre, precio, descripcion} = req.body;
        const imagenPrincipal = req.files.imagenPrincipal ? '/uploads/' + req.files.imagenPrincipal[0].filename : null;
        const imagePaths = req.files.imagePaths ? req.files.imagePaths.map(file => '/uploads/' + file.filename) : [];
    
        const nuevoAccesorio = new accesorioModel({
            nombre,
            descripcion,
            precio,
            imagePaths,
            imagenPrincipal,
        });
    
        nuevoAccesorio.save()
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
        const { id } = req.params;
        const { nombre, precio, descripcion } = req.body;
    
        let updateData = {
            nombre,
            descripcion,
            precio,
        };
        console.log(req.files);
        // Asumiendo que quieres mantener las imágenes existentes si no se proporcionan nuevas
        if (req.files.imagenPrincipal && req.files.imagenPrincipal.length > 0) {
            const imagenPrincipalPath = '/uploads/' + req.files.imagenPrincipal[0].filename;
            updateData.imagenPrincipal = imagenPrincipalPath;
            // Considera eliminar la imagen principal antigua aquí si es necesario
        }
    
        if (req.files.imagePaths && req.files.imagePaths.length > 0) {
            const imagePaths = req.files.imagePaths.map(file => '/uploads/' + file.filename);
            updateData.imagePaths = imagePaths;
            // Considera eliminar las imágenes secundarias antiguas aquí si es necesario
        }
    
        accesorioModel.updateOne({ _id: id }, { $set: updateData })
            .then(data => res.json(data))
            .catch(error => res.json({ message: error }));
    },
    
    delete: async(req, res) => {
        const {id} = req.params;
        await eliminarImagen(id);
        accesorioModel
            .deleteOne({ _id: id})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    buscar: async(req, res) => {
        const {texto_busqueda} = req.params;
        accesorioModel
            .find({"nombre": new RegExp(texto_busqueda, 'i')})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }
}

const eliminarImagen = async (id) => {
    try {
        const accesorio = await accesorioModel.findById(id);
        if (accesorio) {
            // Elimina la imagen principal si existe
            if (accesorio.imagenPrincipal) {
                const imagenPrincipalPath = path.join(__dirname, 'public', accesorio.imagenPrincipal);
                if (fs.existsSync(imagenPrincipalPath)) {
                    fs.unlinkSync(imagenPrincipalPath);
                }
            }
            
            // Elimina las imágenes secundarias si existen
            if (accesorio.imagePaths && accesorio.imagePaths.length) {
                accesorio.imagePaths.forEach(imgPath => {
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

