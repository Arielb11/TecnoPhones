const express = require("express");
const userService = require("../models/user/userService");
const router = express.Router();

router.post('/register', userService.create)
router.post('/login', userService.buscar)

module.exports = router;