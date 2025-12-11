import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addNote
} from "../controllers/noteController.js";

const router = express.Router();

router.use(auth);

router.post("/", addNote);

export default router;
