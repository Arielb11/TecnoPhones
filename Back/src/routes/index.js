const express = require('express');
const phoneRutas = require ('./phone');
const userRutas = require ('./user');
const accesorioRutas = require ('./accesorio');
const macbookRutas = require ('./macbook');
const router = express.Router();

router.use("/api/phones", phoneRutas);
router.use("/api/users", userRutas);
router.use("/api/accesorios", accesorioRutas);
router.use("/api/macbooks", macbookRutas);

module.exports = router;