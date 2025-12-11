import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  logActivity
} from "../controllers/activityController.js";

const router = express.Router();

router.use(auth);

router.post("/", logActivity);

export default router;
