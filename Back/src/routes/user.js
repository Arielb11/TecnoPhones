const express = require("express");
const userController = require("../models/user/userController");
const userService = require("../models/user/userService");
const router = express.Router();

router.post('/register', userService.create)
router.post('/login', userService.buscar)

module.exports = router;