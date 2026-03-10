import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const useSocket = (restaurantId: string, callback: Function) => {
  useEffect(() => {
    const socket: Socket = io(SOCKET_URL);

    socket.emit("joinRoom", restaurantId);

    socket.on("queueUpdate", (data) => callback(data));

    return () => {
      socket.disconnect();
    };
  }, [restaurantId, callback]);
};
