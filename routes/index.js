const express = require("express");
const admin = require("./admin");
const api = require("./api");
const router = express.Router();

router.use("/admin", admin);
router.use("/api", api);

router.get("/", (request, response) => {
  response.send("hahahaha");
});

module.exports = router;
