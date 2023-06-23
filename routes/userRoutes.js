const express = require("express");
const router = express.Router();
const {
  loginUser,
  signupUser,
  currentUser,
} = require("../controllers/userControllers");
const validateToken = require("../middleware/validationTokenHandler");

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
