import { Request, Response } from "express";
import Queue from "../models/Queue";
import Restaurant from "../models/Restaurant";
import { generateToken } from "../utils/tokenGenerator";
import { RequestWithUser } from "../types/RequestWithUser";

// Join Queue
export const joinQueue = async (req: RequestWithUser, res: Response) => {
  const { restaurantId } = req.body;
  if (!req.user) return res.status(401).json({ message: "Not authorized" });

  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });

  const tokenNumber = generateToken(restaurant.currentServingToken);

  const queueEntry = await Queue.create({
    restaurantId,
    userId: req.user._id,
    tokenNumber,
    status: "waiting",
  });

  restaurant.currentServingToken = tokenNumber;
  await restaurant.save();

  res.status(201).json(queueEntry);
};

// Get user queue status
export const getUserQueueStatus = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const queue = await Queue.find({ userId }).sort({ createdAt: -1 });
  res.json(queue);
};

// Serve next token (restaurant only)
export const serveNextToken = async (req: Request, res: Response) => {
  const { restaurantId } = req.body;
  const nextQueue = await Queue.findOne({ restaurantId, status: "waiting" }).sort({ createdAt: 1 });
  if (!nextQueue) return res.status(404).json({ message: "No waiting customers" });

  nextQueue.status = "served";
  await nextQueue.save();

  res.json(nextQueue);
};

// Cancel queue
export const cancelQueue = async (req: RequestWithUser, res: Response) => {
  const { queueId } = req.params;
  if (!req.user) return res.status(401).json({ message: "Not authorized" });

  const queue = await Queue.findById(queueId);
  if (!queue) return res.status(404).json({ message: "Queue not found" });

  queue.status = "cancelled";
  await queue.save();

  res.json({ message: "Queue cancelled" });
};
