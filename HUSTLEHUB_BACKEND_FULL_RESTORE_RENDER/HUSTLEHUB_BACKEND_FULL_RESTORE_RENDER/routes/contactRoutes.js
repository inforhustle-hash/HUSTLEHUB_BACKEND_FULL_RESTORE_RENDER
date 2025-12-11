import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createContact,
  getContacts
} from "../controllers/contactController.js";

const router = express.Router();

router.use(auth);

router.get("/", getContacts);
router.post("/", createContact);

export default router;
