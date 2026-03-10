import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import JoinQueue from "./pages/JoinQueue";
import MyToken from "./pages/MyToken";
import Dashboard from "./pages/Dashboard";
import TVDisplay from "./pages/TVDisplay";
import { AuthProvider } from "./context/AuthContext";
import { QueueProvider } from "./context/QueueContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <QueueProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/join-queue/:restaurantId" element={<JoinQueue />} />
            <Route path="/my-token" element={<MyToken />} />
            <Route path="/tv-display" element={<TVDisplay />} />

            {/* Protected Route for Restaurant Owner */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute role="restaurantOwner">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </QueueProvider>
    </AuthProvider>
  );
};

export default App;
