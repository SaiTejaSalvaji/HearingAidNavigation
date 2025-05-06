import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";
import MiniMap from "../components/MiniMap";
import NotificationData from "../NotificationData";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("NotificationData:", NotificationData); // Debug log

    if (!NotificationData || NotificationData.length === 0) {
      console.error("No notification data found");
      setLoading(false);
      return;
    }

    const timeouts = NotificationData.map((item) => {
      return setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString();
        setNotifications((prev) => [
          {
            ...item,
            time: currentTime,
            id: Math.random().toString(36).substring(2, 11),
          },
          ...prev,
        ]);
      }, (item.delay || 1) * 1000); // Default to 1 second if delay not specified
    });

    setLoading(false);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col relative">
        <main className="p-6 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          {notifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500"
            >
              No notifications available
            </motion.div>
          ) : (
            <AnimatePresence>
              {notifications.map((note, index) => (
                <motion.div
                  key={note.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3 }}
                >
                  <NotificationCard
                    title={note.title}
                    message={note.message}
                    time={note.time}
                    isNew={index === 0}
                    onClick={() => removeNotification(note.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </main>
        <MiniMap />
      </div>
    </div>
  );
}
