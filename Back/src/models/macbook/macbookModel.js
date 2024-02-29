const mongoose = require("mongoose");

const macbookSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String,
        required: true
    },
    memoria: {
        type: String
    },
    almacenamiento: {
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
    },
    visible: {
        type: Boolean,
        required: true
    } 
}, {versionKey:false})

module.exports = mongoose.model('Macbook', macbookSchema);