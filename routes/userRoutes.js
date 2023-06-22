const express = require("express");
const router = express.Router();
const {
  loginUser,
  signpUser,
  currentUser,
} = require("../controllers/userControllers");

router.post("/signup", signpUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
