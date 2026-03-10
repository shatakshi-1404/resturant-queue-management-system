import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Smart Queue for Restaurants</h1>
        <p className="mb-6">Skip the line. Join the queue online.</p>
        <Link
          to="/restaurants"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          View Restaurants
        </Link>

        <section className="mt-12 text-left max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Real-time queue updates</li>
            <li>Join queue from phone</li>
            <li>Reduce restaurant crowd</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
