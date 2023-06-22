const asyncHandler = require("express-async-handler");

const signpUser = asyncHandler(async (req, res) => {
  res.json({ message: "user registered" });
});

//@route POST autorized user api/user
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "user login" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "currrent user info" });
});

module.exports = {
  loginUser,
  signpUser,
  currentUser,
};
