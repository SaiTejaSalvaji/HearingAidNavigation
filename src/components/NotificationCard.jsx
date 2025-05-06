export default function NotificationCard({ title, message, time }) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{message}</p>
        <p className="text-sm text-gray-400 mt-1">{time}</p>
      </div>
    )
  }
  