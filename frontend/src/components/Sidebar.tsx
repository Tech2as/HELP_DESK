import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Ticket, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
  { name: "Tickets", path: "/tickets", icon: <Ticket size={20} /> },
  { name: "Configurações", path: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: open ? 240 : 80 }}
      className="h-screen bg-gray-900 text-gray-100 flex flex-col shadow-lg transition-all"
    >
      {/* Top */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <span className="font-bold text-lg">{open ? "HelpDesk" : "HD"}</span>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white"
        >
          {open ? "⟨" : "⟩"}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 hover:bg-gray-800 transition-colors ${
                isActive ? "bg-gray-800 text-blue-400" : ""
              }`}
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          {open && <span>Sair</span>}
        </button>
      </div>
    </motion.aside>
  );
}