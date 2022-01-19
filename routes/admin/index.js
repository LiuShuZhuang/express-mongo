const express = require("express");
const manager = require("./manager");
const user = require("./user");

const router = express.Router();

router.use("/manager", manager);
router.use("/user", user);

module.exports = router;
