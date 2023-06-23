const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signpUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("fill all fields");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("email already taken");
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedpassword,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user not valid");
  }
});

//@route POST authorized user api/user
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "user login" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user info" });
});

module.exports = {
  loginUser,
  signpUser,
  currentUser,
};
