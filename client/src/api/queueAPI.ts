import axios from "./axios";

export const joinQueue = (restaurantId: string) => axios.post("/queue/join", { restaurantId });
export const getQueueStatus = (userId: string) => axios.get(`/queue/status/${userId}`);
export const serveNextToken = (restaurantId: string) => axios.put("/queue/next", { restaurantId });
export const cancelQueue = (queueId: string) => axios.delete(`/queue/cancel/${queueId}`);

