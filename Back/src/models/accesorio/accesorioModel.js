const mongoose = require("mongoose");

const accesorioSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagenPrincipal: {
        type: String,
        required: true
    },
    imagePaths: {
        type: [String],
        required: true
    }
}, {versionKey:false})

module.exports = mongoose.model('Accesorio', accesorioSchema);