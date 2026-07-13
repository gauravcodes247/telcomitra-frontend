import React from "react";
import { SIDEBAR_ITEMS } from "../../constants/sidebarItems";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="flex flex-col  w-64 bg-gray-950 text-gray-300 font-smeibold gap-3 p-4 border-1 border-gray-800">
      <p className="mb-4">TelcoMitra</p>
      {SIDEBAR_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `flex gap-7 p-4 items-center rounded cursor-pointer ${
                isActive
                  ? "bg-gray-800 text-green-400 border-l-4 border-green-400"
                  : "hover:bg-gray-900"
              }`
            }
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
