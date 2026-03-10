import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { joinQueue, getQueueStatus } from "../api/queueAPI";
import { IQueue } from "../types/Queue";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useQueue } from "../context/QueueContext";

const JoinQueue = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const { currentQueue, setCurrentQueue } = useQueue();
  const [loading, setLoading] = useState(false);
  const [queue, setQueue] = useState<IQueue | null>(null);

  useEffect(() => {
    if (!restaurantId) return;
    const fetchQueue = async () => {
      try {
        const res = await getQueueStatus(localStorage.getItem("userId") || "");
        setQueue(res.data);
      } catch {}
    };
    fetchQueue();
  }, [restaurantId]);

  const handleJoin = async () => {
    if (!restaurantId) return;
    setLoading(true);
    try {
      const res = await joinQueue(restaurantId);
      setQueue(res.data);
      setCurrentQueue(res.data);
      navigate(`/my-token`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join Queue</h2>
        <p className="mb-4">
          {queue ? `You are already in the queue. Token: ${queue.tokenNumber}` : "Click below to join queue"}
        </p>
        <button
          onClick={handleJoin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={!!queue}
        >
          {queue ? "In Queue" : "Join Queue"}
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default JoinQueue;
