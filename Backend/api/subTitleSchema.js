const mongoose = require("mongoose");

const dbScheme = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subTitle", dbScheme);
