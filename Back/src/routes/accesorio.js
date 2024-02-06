const express = require("express");
const router = express.Router();
const {subirImagen} = require('../middleware/storage');
const accesorioService = require ("../models/accesorio/accesorioService");

router.post('/', subirImagen.single('imagePath'), accesorioService.create)
router.get('/', accesorioService.get)
router.get('/:id', accesorioService.getByID)
router.put('/:id', subirImagen.single('imagePath'), accesorioService.update)
router.delete('/:id', accesorioService.delete)

module.exports = router;