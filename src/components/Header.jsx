import { motion } from "framer-motion";
import { FiMenu, FiBell, FiUser, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function Header({ onMenuToggle }) {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-10"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Logo and menu button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <motion.div
              className="text-xl font-bold text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/")} // Redirect to home on logo click
            >
              NavAid
            </motion.div>
          </div>

          {/* Right section - Navigation icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications Page */}
            <button 
              onClick={() => navigate("/Dashboard/")}
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none relative"
            >
              <FiBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Settings Page */}
            <button 
              onClick={() => navigate("/settings")}
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <FiSettings className="h-6 w-6" />
            </button>

            {/* User Profile Page */}
            <button 
              onClick={() => navigate("/profile")}
              className="flex items-center space-x-2 p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <FiUser className="h-6 w-6" />
              <span className="hidden md:inline text-sm">User Profile</span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}