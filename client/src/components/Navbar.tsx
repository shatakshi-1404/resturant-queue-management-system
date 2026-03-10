import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="font-bold text-xl">Smart Queue</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        {user ? (
          <>
            {user.role === "restaurantOwner" && <Link to="/dashboard">Dashboard</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

