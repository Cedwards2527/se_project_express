const mongoose = require("mongoose");

const validator = require("validator");

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
    validator(value) {
      return validator.isURL(value);
    },
    message: "Link is not Valid",
  },
});

module.exports = mongoose.model("item", clothingItemSchema);
