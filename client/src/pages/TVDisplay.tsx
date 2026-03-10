import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface IDisplayQueue {
  current: number;
  next: number[];
}

const TVDisplay = () => {
  const [queue, setQueue] = useState<IDisplayQueue>({ current: 0, next: [] });

  useSocket("restaurantTV", (data: any) => {
    setQueue({ current: data.current, next: data.next });
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="bg-white p-8 rounded shadow mb-6 w-80">
          <h2 className="text-2xl font-bold mb-2">NOW SERVING</h2>
          <p className="text-6xl font-extrabold">{queue.current}</p>
        </div>
        <div className="bg-white p-6 rounded shadow w-80">
          <h3 className="text-xl font-bold mb-2">NEXT</h3>
          <div className="flex justify-center gap-4 text-3xl font-bold">
            {queue.next.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TVDisplay;
