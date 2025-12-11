import Activity from "../models/Activity.js";

export const logActivity = async (req, res) => {
  try {
    const activity = await Activity.create({ ...req.body, user: req.user });
    res.json(activity);
  } catch {
    res.status(500).json({ msg: "Error" });
  }
};
