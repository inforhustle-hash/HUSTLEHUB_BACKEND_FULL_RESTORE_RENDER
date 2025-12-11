import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getPipeline
} from "../controllers/pipelineController.js";

const router = express.Router();

router.use(auth);

router.get("/", getPipeline);

export default router;
