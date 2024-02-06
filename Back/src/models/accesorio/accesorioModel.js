const mongoose = require("mongoose");

const accesorioSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
}, {versionKey:false})

module.exports = mongoose.model('Accesorio', accesorioSchema);