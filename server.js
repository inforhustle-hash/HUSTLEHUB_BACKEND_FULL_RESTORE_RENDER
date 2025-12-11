import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Load ENV
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" })); // Dev mode open CORS

// Test route
app.get("/", (req, res) => {
  res.send("HustleHub Backend Running");
});

// Placeholder API routes (real ones added in Pack 2-4)
app.use("/api/auth", (req, res) => res.send("Auth API Ready"));
app.use("/api/contacts", (req, res) => res.send("Contacts API Ready"));
app.use("/api/pipelines", (req, res) => res.send("Pipelines API Ready"));
app.use("/api/deals", (req, res) => res.send("Deals API Ready"));
app.use("/api/notes", (req, res) => res.send("Notes API Ready"));
app.use("/api/activity", (req, res) => res.send("Activity API Ready"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
