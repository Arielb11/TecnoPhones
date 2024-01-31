const express = require("express");
const phoneService = require("../models/phone/phoneService");
const router = express.Router();
const {subirImagen} = require('../middleware/storage');
//import { subirImagen } from "../middleware/storage";

router.post('/', subirImagen.single('imagePath'), phoneService.create)
router.get('/', phoneService.get)
router.get('/:id', phoneService.getByID)
router.put('/:id', subirImagen.single('imagePath'), phoneService.update)
router.delete('/:id', phoneService.delete)

module.exports = router;