import { Router } from "express";
import { getTags, addTag } from "../controllers/noteController.js";

const router = Router();

router.get("/tags", getTags);
router.post("/tag", addTag);

export default router;