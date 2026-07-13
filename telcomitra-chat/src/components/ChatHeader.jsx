import React from "react";
import { IoClose } from "react-icons/io5";

const ChatHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-blue-600 px-4 py-3 text-white">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-600">
          T
        </div>

        <div>
          <h2 className="text-sm font-semibold">TelcoMitra</h2>

          <p className="text-xs text-blue-100">Online</p>
        </div>
      </div>

      {/* Right Section */}
      <button
        onClick={onClose}
        className="rounded-full p-2 transition hover:bg-blue-700"
      >
        <IoClose size={22} />
      </button>
    </div>
  );
};

export default ChatHeader;
