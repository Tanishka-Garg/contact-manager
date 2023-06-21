const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "enter the name"],
    },
    email: {
      type: String,
      required: [true, "enter the email"],
    },
    phone: {
      type: Number,
      required: [true, "enter the phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
