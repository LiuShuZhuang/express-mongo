const express = require("express");
const router = express.Router();
const UserModel = require("../../model/managerModel");

router.get("/list", (request, response) => {
  response.send("list");
});
router.post("/add", (request, response) => {
  let { name, age } = request.body;
  UserModel.create({
    name,
    age,
  });
  response.send("添加成功");
});

module.exports = router;
