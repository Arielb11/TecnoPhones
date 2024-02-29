const express = require("express");
const router = express.Router();
const macBookService = require("../models/macbook/macbookService");
const {subirImagen} = require('../middleware/storage');

router.post('/', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), macBookService.create)
router.get('/', macBookService.get)
router.get('/:id', macBookService.getByID)
router.put('/:id', subirImagen.fields([
    { name: 'imagenPrincipal', maxCount: 1 },
    { name: 'imagePaths', maxCount: 6 }
  ]), macBookService.update)
router.delete('/:id', macBookService.delete)
router.get('/macbookSearch/:texto_busqueda', macBookService.buscar)

module.exports = router;