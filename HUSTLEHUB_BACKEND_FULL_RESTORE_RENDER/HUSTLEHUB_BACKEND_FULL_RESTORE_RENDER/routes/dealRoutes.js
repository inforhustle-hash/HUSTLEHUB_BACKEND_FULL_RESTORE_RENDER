import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createDeal
} from "../controllers/dealController.js";

const router = express.Router();

router.use(auth);

router.post("/", createDeal);

export default router;
