const mongoose = require("./core");
const ManagerSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  mobile: String,
  status: {
    type: Number,
    default: 1,
  },
  login_time: String,
  add_time: Number,
});

const ManagerModel = mongoose.model("Manager", ManagerSchema, "manager");

module.exports = ManagerModel;
