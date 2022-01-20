const mongoose = require("./core");
const UserSchema = mongoose.Schema({
  username: String,
  passworld: String,
  email: String,
  mobild: String,
  status: {
    type: Number,
    default: 1,
  },
  login_time: String,
  add_time: Number,
});

const UserModel = mongoose.model("User", UserSchema, "user");

module.exports = UserModel;
