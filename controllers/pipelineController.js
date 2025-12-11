import Pipeline from "../models/Pipeline.js";

export const getPipeline = async (req, res) => {
  try {
    const pipeline = await Pipeline.findOne({ user: req.user });
    res.json(pipeline);
  } catch {
    res.status(500).json({ msg: "Error" });
  }
};

export const createDefaultPipeline = async (userId) => {
  return Pipeline.create({
    user: userId,
    stages: ["Lead In", "Contacted", "Qualified", "Proposal Sent", "Closed Won / Lost"]
  });
};
