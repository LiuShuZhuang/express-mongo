const express = require("express");
const router = express.Router();
const UserModel = require("../../model/userModel");

router.get("/", (request, response) => {
  response.send("用户管理");
});
router.get("/list", (request, response) => {
  UserModel.find({}, (err, doc) => {
    if (err) {
      response.send("查找用户列表失败");
    } else {
      response.send(doc);
    }
  });
});
router.get("/add", (request, response) => {
  // let { username, passworld, email, mobild, status, login_time, add_time } =
  //   request.body;
  // UserModel.create({
  //   username,
  //   passworld,
  //   email,
  //   mobild,
  //   status,
  //   login_time,
  //   add_time,
  // });
});

module.exports = router;
