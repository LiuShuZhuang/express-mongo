const express = require("express");
const admin = require("./admin");
const router = express.Router();

router.use("/admin", admin);

router.get("/", (request, response) => {
  response.send("hahahaha");
});

module.exports = router;
