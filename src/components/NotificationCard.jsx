import { motion } from "framer-motion";

export default function NotificationCard({ title, message, time, isNew }) {
  return (
    <motion.div
      className={`bg-white p-4 rounded-2xl shadow mb-4 relative ${
        isNew ? "ring-2 ring-blue-500" : ""
      }`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.02 }}
      layout // This enables layout animations when items reorder
    >
      {isNew && (
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        />
      )}

      <motion.h3
        className="font-semibold text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-600"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {message}
      </motion.p>
      <motion.p
        className="text-sm text-gray-400 mt-1"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {time}
      </motion.p>
    </motion.div>
  );
}
