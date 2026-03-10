import { Request } from "express";
import { IUser } from "./QueueTypes";

export interface RequestWithUser extends Request {
  user?: IUser;
}
