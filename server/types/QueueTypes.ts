export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "restaurantOwner";
}

export interface IRestaurant {
  _id: string;
  name: string;
  location: string;
  ownerId: string;
  currentServingToken: number;
  isOpen: boolean;
}

export interface IQueue {
  _id: string;
  restaurantId: string;
  userId: string;
  tokenNumber: number;
  status: "waiting" | "served" | "cancelled";
  createdAt: Date;
}

