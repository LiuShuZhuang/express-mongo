const mongoose = require("./core");
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("User", UserSchema, "user");

module.exports = UserModel;
