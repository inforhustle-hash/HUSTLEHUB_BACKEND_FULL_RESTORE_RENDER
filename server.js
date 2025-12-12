
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 THIS IS THE MISSING LINK
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.send("HustleHub Backend v3");
});

export default app;
