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
    enum: ["hot", "warm", "cold"],
  },
  imageUrl: {
    type: String,
    required: [true, "A Link is required"],
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "Invalid data",
    },
  },
});

module.exports = mongoose.model("item", clothingItemSchema);
