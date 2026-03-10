import mongoose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "restaurantOwner";
}

const UserSchema: Schema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "restaurantOwner"], default: "customer" }
  },
  { timestamps: true }
);

export default mongoose.model<IUserDocument>("User", UserSchema);
