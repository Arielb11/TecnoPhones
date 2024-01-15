const phoneModel = require ("./phoneModel");

module.exports = {
    create: async(req, res) => {
        const phone = phoneModel(req.body);
        phone
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    get: async(req,res) => {
        phoneModel
            .find()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    getByID: async(req,res) => {
        const {id} = req.params;
        phoneModel
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    },

    update: async(req,res) => {
        const {id} = req.params;
        const {modelo, estado, bateria, capacidad, observaciones, valor} = req.body;
        phoneModel
            .updateOne({ _id: id}, {$set: {modelo, estado, bateria, capacidad, observaciones, valor}})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }, 

    delete: async(req,res) => {
        const {id} = req.params;
        phoneModel
            .deleteOne({ _id: id})
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}));
    }
}