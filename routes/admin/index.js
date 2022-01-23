const express = require("express");
const manager = require("./manager");
const user = require("./user");
const nav = require("./nav");

const router = express.Router();

router.use("/manager", manager);
router.use("/user", user);
router.use("/nav", nav);

module.exports = router;
