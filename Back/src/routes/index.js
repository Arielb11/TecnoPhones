const express = require('express');
const phoneRutas = require ('./phone');
const userRutas = require ('./user');
const accesorioRutas = require ('./accesorio');
const router = express.Router();

router.use("/api/phones", phoneRutas);
router.use("/api/users", userRutas);
router.use("/api/accesorios", accesorioRutas);

module.exports = router;