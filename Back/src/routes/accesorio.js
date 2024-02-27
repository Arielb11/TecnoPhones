const express = require("express");
const router = express.Router();
const {subirImagen} = require('../middleware/storage');
const accesorioService = require ("../models/accesorio/accesorioService");

router.post('/', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), accesorioService.create)
router.get('/', accesorioService.get)
router.get('/:id', accesorioService.getByID)
router.put('/:id', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), accesorioService.update)
router.delete('/:id', accesorioService.delete)
router.get('/accSearch/:texto_busqueda', accesorioService.buscar)

module.exports = router;