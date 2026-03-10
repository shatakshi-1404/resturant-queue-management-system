import express from "express";
import { protect } from "../middleware/authMiddleware";
import { joinQueue, getUserQueueStatus, serveNextToken, cancelQueue } from "../controllers/queueController";

const router = express.Router();

router.post("/join", protect, joinQueue);
router.get("/status/:userId", getUserQueueStatus);
router.put("/next", protect, serveNextToken);
router.delete("/cancel/:queueId", protect, cancelQueue);

export default router;
