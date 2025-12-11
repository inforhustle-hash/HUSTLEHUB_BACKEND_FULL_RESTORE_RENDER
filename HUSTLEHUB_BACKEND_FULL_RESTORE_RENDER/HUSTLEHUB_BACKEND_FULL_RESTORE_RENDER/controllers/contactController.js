import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({ ...req.body, user: req.user });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ msg: "Error creating contact" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user });
    res.json(contacts);
  } catch {
    res.status(500).json({ msg: "Error" });
  }
};
