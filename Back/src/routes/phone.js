const express = require("express");
const phoneService = require("../models/phone/phoneService");
const { checkToken } = require("../utils/middlewares");
const router = express.Router();

router.post('/', phoneService.create)
router.get('/', phoneService.get)
router.get('/:id', phoneService.getByID)
router.put('/:id', phoneService.update)
router.delete('/:id', phoneService.delete)

module.exports = router;