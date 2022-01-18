const express = require("express");
const manager = require("./manager");
const router = express.Router();

router.use("/manager", manager);

module.exports = router;
