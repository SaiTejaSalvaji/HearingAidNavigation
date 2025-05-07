import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 flex flex-col">
      {/* Logo/App Name */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-bold">Hearing Aid Nav</h1>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {[
            { to: "/dashboard", text: "Dashboard", icon: "📊" },
            { to: "/communication", text: "Communication", icon: "💬" },
            { to: "/profile", text: "Profile", icon: "👤" },
            { to: "/settings", text: "Settings", icon: "⚙️" },
            
          ].map((item) => (
            <motion.li
              key={item.to}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gray-700 text-white font-medium"
                      : "text-gray-300 hover:bg-gray-700/50"
                  }`
                }
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.text}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom Area */}
      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="text-gray-400 text-sm">
          v1.0.0
        </div>
      </div>
    </div>
  );
}