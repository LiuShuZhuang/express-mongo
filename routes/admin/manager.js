const express = require("express");
const router = express.Router();
const ManagerModel = require("../../model/managerModel");

router.get("/", (request, response) => {
  response.send("管理员管理");
});
router.get("/list", (request, response) => {
  ManagerModel.find({}, (err, doc) => {
    if (err) {
      response.send("查找manager列表失败");
    } else {
      response.send(doc);
    }
  });
});
router.post("/add", (request, response) => {
  let { username, password, age, email, mobile } = request.body;
  ManagerModel.create({
    username,
    password,
    age,
    email,
    mobile,
  });
  response.send("添加成功");
});

module.exports = router;
