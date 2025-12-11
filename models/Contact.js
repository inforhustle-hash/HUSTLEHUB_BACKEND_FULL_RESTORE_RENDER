import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    tags: [String],
    stage: { type: String, default: "Lead In" }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
