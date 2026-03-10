import { useEffect, useState } from "react";
import { getQueueStatus, cancelQueue } from "../api/queueAPI";
import { IQueue } from "../types/Queue";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useQueue } from "../context/QueueContext";

const MyToken = () => {
  const { currentQueue, setCurrentQueue } = useQueue();
  const [queue, setQueue] = useState<IQueue | null>(currentQueue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await getQueueStatus(localStorage.getItem("userId") || "");
        setQueue(res.data);
      } catch {}
    };
    if (!queue) fetchQueue();
  }, [queue]);

  const handleCancel = async () => {
    if (!queue) return;
    setLoading(true);
    try {
      await cancelQueue(queue._id);
      setQueue(null);
      setCurrentQueue(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  if (!queue) return <p className="text-center mt-16">You have no active token.</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-md mx-auto text-center">
        <div className="border p-6 rounded shadow bg-white">
          <h2 className="text-2xl font-bold mb-2">Your Token Number</h2>
          <p className="text-4xl font-extrabold mb-2">{queue.tokenNumber}</p>
          <p>Status: {queue.status}</p>
          <p>Joined At: {new Date(queue.createdAt).toLocaleTimeString()}</p>
          <button
            onClick={handleCancel}
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Cancel Queue
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyToken;
