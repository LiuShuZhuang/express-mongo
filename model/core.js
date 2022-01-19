const config = require("../config/config");
const mongoose = require("mongoose");

mongoose.connect(config.dbUrl, (err) => {
  if (err) {
    console.log("数据库链接出错");
  } else {
    console.log("数据库链接成功");
  }
});

module.exports = mongoose;
