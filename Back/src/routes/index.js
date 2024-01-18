const express = require('express');
const phoneRutas = require ('./phone');
const userRutas = require ('./user');
const router = express.Router();

router.use("/api/phones", phoneRutas);
router.use("/api/users", userRutas);

module.exports = router;