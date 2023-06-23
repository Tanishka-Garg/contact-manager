const express = require("express");
const router = express.Router();
const {
  getContact,
  getAllContact,
  postContact,
  deleteContact,
  putContact,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validationTokenHandler");

router.use(validateToken);
//getting all contacts  //posting a new contact
router.route("/").get(getAllContact).post(postContact);

//get a  contact  //put a new contact  //delete a new contact
router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router;
