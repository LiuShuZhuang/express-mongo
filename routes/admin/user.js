const express = require("express");
const router = express.Router();
const UserModel = require("../../model/userModel");

router.get("/", (request, response) => {
  response.send("用户管理");
});
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
