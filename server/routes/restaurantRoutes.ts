import express from "express";
import { getRestaurants, addRestaurant } from "../controllers/restaurantController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", protect, addRestaurant);

export default router;
