const express = require ('express');
const mongoose = require ('mongoose');
require("dotenv").config();
let cors = require("cors");
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); //pone en publico para que se puedan visualizar las imagenes
app.use(routes);
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión a MongoDB Atlas establecida'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor corriendo en el puerto', port));

