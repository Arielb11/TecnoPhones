const express = require ('express');
const mongoose = require ('mongoose');

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("Bienvenido");
})

app.listen(port, () => console.log('Servidor corriendo en el puerto', port));

