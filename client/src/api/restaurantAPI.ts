import axios from "./axios";

export const getRestaurants = () => axios.get("/restaurants");
export const addRestaurant = (data: any) => axios.post("/restaurants", data);
