const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "enter the name"],
    },
    email: {
      type: String,
      required: [true, "enter the email"],
      unique: [true, " email already taken"],
    },
    password: {
      type: String,
      required: [true, "enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
