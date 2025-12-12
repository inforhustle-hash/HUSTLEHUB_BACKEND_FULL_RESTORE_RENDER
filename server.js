import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔴 THIS LINE IS WHAT YOU ARE MISSING
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("HustleHub Backend v3");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
