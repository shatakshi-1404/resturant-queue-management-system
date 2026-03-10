import { createContext, useContext, useState, ReactNode } from "react";
import { IQueue } from "../types/Queue";

interface QueueContextType {
  currentQueue: IQueue | null;
  setCurrentQueue: (queue: IQueue | null) => void;
}

const QueueContext = createContext<QueueContextType | undefined>(undefined);

export const QueueProvider = ({ children }: { children: ReactNode }) => {
  const [currentQueue, setCurrentQueue] = useState<IQueue | null>(null);

  return (
    <QueueContext.Provider value={{ currentQueue, setCurrentQueue }}>
      {children}
    </QueueContext.Provider>
  );
};

export const useQueue = () => {
  const context = useContext(QueueContext);
  if (!context) throw new Error("useQueue must be used within QueueProvider");
  return context;
};
