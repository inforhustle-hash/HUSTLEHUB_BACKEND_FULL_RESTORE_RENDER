import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
    deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
