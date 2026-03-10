export interface IRestaurant {
  _id: string;
  name: string;
  location: string;
  ownerId: string;
  currentServingToken: number;
  isOpen: boolean;
}
