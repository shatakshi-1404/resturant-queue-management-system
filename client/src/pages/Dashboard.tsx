import { useEffect, useState } from "react";
import { serveNextToken, getQueueStatus } from "../api/queueAPI";
import { IQueue } from "../types/Queue";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QueueCard from "../components/QueueCard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [queueList, setQueueList] = useState<IQueue[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQueue = async () => {
    try {
      const res = await getQueueStatus(localStorage.getItem("userId") || "");
      setQueueList(res.data?.queue || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const handleNext = async () => {
    if (queueList.length === 0) return;
    try {
      await serveNextToken(localStorage.getItem("userId") || "");
      fetchQueue();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="mb-4">Current Token: {queueList[0]?.tokenNumber || "No token serving"}</p>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700"
        >
          Call Next Customer
        </button>
        <div>
          {queueList.map((queue) => (
            <QueueCard key={queue._id} queue={queue} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
