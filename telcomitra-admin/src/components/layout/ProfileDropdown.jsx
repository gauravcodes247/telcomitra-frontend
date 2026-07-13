import React from "react";
import { useState } from "react";
import { ChevronDown, CircleUserRound, LogOut, User } from "lucide-react";
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors"
      >
        <CircleUserRound size={24} />
        <span className="font-medium">Admin</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-200 bg-gray-800 shadow-lg">
          <button className="flex w-full items-center rounded-t-xl gap-3 px-4 py-3 hover:bg-gray-600 transition-colors">
            <User size={18} />
            <span>Profile</span>
          </button>

          <hr />

          <button className="flex w-full items-center gap-3  rounded-b-xl px-4 py-3 text-red-600 hover:bg-red-900/20 transition-colors">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
