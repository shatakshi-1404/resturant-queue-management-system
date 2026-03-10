import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurantDocument extends Document {
  name: string;
  location: string;
  ownerId: string;
  currentServingToken: number;
  isOpen: boolean;
}

const RestaurantSchema: Schema = new Schema<IRestaurantDocument>(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    currentServingToken: { type: Number, default: 0 },
    isOpen: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<IRestaurantDocument>("Restaurant", RestaurantSchema);
