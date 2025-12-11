import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
    title: { type: String, required: true },
    amount: { type: Number, default: 0 },
    stage: { type: String, default: "Lead In" }
  },
  { timestamps: true }
);

export default mongoose.model("Deal", dealSchema);
