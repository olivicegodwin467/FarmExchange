import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/signup"); // Redirect to Signup after logout
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between items-center text-white">
          <div className="flex gap-4">
            <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/market" className="hover:text-gray-300">Agri Market</Link></li>
            <li><Link to="/chat" className="hover:text-gray-300">Chat</Link></li>
            <li><Link to="/users" className="hover:text-gray-300">Users</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/contacts" className="hover:text-gray-300">Contacts</Link></li>
            <li><Link to="/ussd" className="hover:text-gray-300">USSD</Link></li>
            <li><Link to="/ussd_api" className="hover:text-gray-300">API</Link></li>
          </div>

          <div>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-700">
                Logout
              </button>
            ) : (
              <Link to="/signup" className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                Signup
              </Link>
            )}
          </div>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Your page content here */}
      </div>

      {/* Footer */}
      <footer style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#2d3748", color: "#fff", textAlign: "center", padding: "1rem" }}>
        <p>&copy; CUNGA SOFTWARE 2025 All rights reserved | Email:cungasoftware@gmail.com, Phone: +250 789 818 053.</p>
      </footer>
    </div>
  );
}

export default NavBar;
