import Deal from "../models/Deal.js";

export const createDeal = async (req, res) => {
  try {
    const deal = await Deal.create({ ...req.body, user: req.user });
    res.json(deal);
  } catch {
    res.status(500).json({ msg: "Error" });
  }
};
