const express = require('express');
const phoneRutas = require ('./phone');
const router = express.Router();

router.use("/api/phones", phoneRutas);

module.exports = router;