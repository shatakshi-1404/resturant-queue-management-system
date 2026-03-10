export interface IQueue {
  _id: string;
  restaurantId: string;
  userId: string;
  tokenNumber: number;
  status: "waiting" | "served" | "cancelled";
  createdAt: string;
}
