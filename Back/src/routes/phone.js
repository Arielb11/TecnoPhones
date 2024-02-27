const express = require("express");
const phoneService = require("../models/phone/phoneService");
const router = express.Router();
const {subirImagen} = require('../middleware/storage');

router.post('/', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), phoneService.create)
router.get('/', phoneService.get)
router.get('/:id', phoneService.getByID)
router.put('/:id', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), phoneService.update)
router.delete('/:id', phoneService.delete)
router.get('/iphoneSearch/:texto_busqueda', phoneService.buscar)

module.exports = router;