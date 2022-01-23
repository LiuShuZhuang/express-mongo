const mongoose = require("./core");
const NavSchema = mongoose.Schema({
  title: String,
  url: String,
  status: {
    type: Number,
    default: 1,
  },
  add_time: Number,
});

const navModel = mongoose.model("Nav", NavSchema, "nav");

module.exports = navModel;
