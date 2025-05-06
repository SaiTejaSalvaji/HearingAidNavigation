export default function Sidebar() {
    return (
      <aside className="w-64 bg-white shadow h-full p-4">
        <nav className="space-y-4">
          <div className="text-lg font-semibold">Menu</div>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Notifications</li>
            <li className="hover:text-blue-500 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>
    )
  }
  