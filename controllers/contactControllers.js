const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@route GET api/contacts
const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@route POST api/contacts
const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("fill all fields");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//@route GET api/contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

//@route DELETE api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error("not authorized");
  }
  await contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted successfully" });
});

//@route PUT api/contacts/"id"
const putContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error("not authorized");
  }
  const updatedcontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedcontact);
});

module.exports = {
  getContact,
  getAllContact,
  postContact,
  deleteContact,
  putContact,
};
