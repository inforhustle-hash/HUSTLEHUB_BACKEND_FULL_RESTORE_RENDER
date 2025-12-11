import Note from "../models/Note.js";

export const addNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user });
    res.json(note);
  } catch {
    res.status(500).json({ msg: "Error" });
  }
};
