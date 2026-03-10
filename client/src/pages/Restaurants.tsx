import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurantAPI";
import { IRestaurant } from "../types/Restaurant";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await getRestaurants();
        setRestaurants(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Available Restaurants</h2>
        {restaurants.map((rest) => (
          <div
            key={rest._id}
            className="border p-4 rounded shadow mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-xl">{rest.name}</h3>
              <p>Location: {rest.location}</p>
              <p>Currently Serving: {rest.currentServingToken}</p>
              <p>Status: {rest.isOpen ? "Open" : "Closed"}</p>
            </div>
            <Link
              to={`/join-queue/${rest._id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Join Queue
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;

