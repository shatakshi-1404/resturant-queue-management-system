import mongoose, { Schema, Document } from "mongoose";

export interface IQueueDocument extends Document {
  restaurantId: string;
  userId: string;
  tokenNumber: number;
  status: "waiting" | "served" | "cancelled";
  createdAt: Date;
}

const QueueSchema: Schema = new Schema<IQueueDocument>(
  {
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tokenNumber: { type: Number, required: true },
    status: { type: String, enum: ["waiting", "served", "cancelled"], default: "waiting" },
  },
  { timestamps: true }
);

export default mongoose.model<IQueueDocument>("Queue", QueueSchema);
