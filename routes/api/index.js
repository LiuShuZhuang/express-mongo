const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("api.js");
});

module.exports = router;
