import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";
import MiniMap from "../components/MiniMap";
import NotificationData from "../NotificationData"
const dummyNotifications = [
  {
    title: "Turn Left Ahead",
    message: "Prepare to turn left at the next intersection.",
    time: "10:15 AM",
  },
  {
    title: "Speed Limit Warning",
    message: "You are exceeding the speed limit.",
    time: "10:12 AM",
  },
  {
    title: "Navigation Paused",
    message: "Navigation paused due to low signal.",
    time: "10:10 AM",
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Recent Notifications</h2>
          {dummyNotifications.map((note, index) => (
            <NotificationCard
              key={index}
              title={note.title}
              message={note.message}
              time={note.time}
            />
          ))}
        </main>
        <MiniMap />
      </div>
    </div>
  );
}
