import mongoose from "mongoose";

const pipelineSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, default: "Sales Pipeline" },
    stages: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Pipeline", pipelineSchema);
