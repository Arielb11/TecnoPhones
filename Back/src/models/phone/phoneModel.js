const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    bateria: {
        type: Number,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String
    },
    valor: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Phone', phoneSchema);