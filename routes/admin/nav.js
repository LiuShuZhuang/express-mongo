const express = require("express");
const router = express.Router();
const NavModel = require("../../model/navModel");

router.get("/", (request, response) => {
  response.send("导航管理");
});
router.get("/list", (request, response) => {
  NavModel.find({}, (err, doc) => {
    if (err) {
      response.send("查找nav列表失败");
    } else {
      response.send(doc);
    }
  });
});
router.post("/add", (request, response) => {
  let { title, url, status, add_time } = request.body;
  NavModel.create({
    title,
    url,
    status,
    add_time,
  });
  response.send("添加成功");
});

module.exports = router;
