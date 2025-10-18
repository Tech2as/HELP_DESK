import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white border-b px-6 py-3 shadow-sm">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-64">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={20} className="text-gray-600 hover:text-gray-800" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://ui-avatars.com/api/?name=Joao+Borges"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">João Borges</span>
        </div>
      </div>
    </header>
  );
}