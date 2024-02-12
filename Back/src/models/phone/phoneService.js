const phoneModel = require ("./phoneModel");
const fs = require('fs');


module.exports = {
    create: async(req, res) => {
            const {modelo, estado, bateria, capacidad, observaciones, valor, visible} = req.body;
            const imagenPrincipal = req.files.imagenPrincipal ? '/uploads/' + req.files.imagenPrincipal[0].filename : null;
            const imagePaths = req.files.imagePaths ? req.files.imagePaths.map(file => '/uploads/' + file.filename) : [];
            const nuevoPhone = new phoneModel({
                modelo,
                estado,
                bateria,
                capacidad,
                observaciones,
                valor,
                visible,
                imagenPrincipal,
                imagePaths
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
        const { id } = req.params;
        const {modelo, estado, bateria, capacidad, observaciones, valor, visible} = req.body; // Asume que esto incluye todos los campos excepto las imágenes
    
        let updateData = {
            modelo, 
            estado, 
            bateria, 
            capacidad, 
            observaciones, 
            valor, 
            visible,
        }
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

        phoneModel.updateOne({ _id: id }, { $set: updateData })
            .then(data => res.json(data))
            .catch(error => res.json({ message: error }));
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