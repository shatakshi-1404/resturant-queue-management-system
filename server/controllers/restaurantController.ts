import { Request, Response } from "express";
import Restaurant from "../models/Restaurant";

// Get all restaurants
export const getRestaurants = async (req: Request, res: Response) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};

// Add restaurant
export const addRestaurant = async (req: Request, res: Response) => {
  const { name, location, ownerId } = req.body;

  const restaurant = await Restaurant.create({ name, location, ownerId });
  res.status(201).json(restaurant);
};
