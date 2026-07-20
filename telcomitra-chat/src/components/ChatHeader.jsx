import React from "react";
import { IoClose } from "react-icons/io5";
import { theme } from "../constants/theme";

const ChatHeader = ({ onClose }) => {
  return (
    <div
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-white"
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.primary,
          }}
        >
          T
        </div>

        <div>
          <h2 className="text-sm font-semibold">TelcoMitra</h2>

          <p
            className="text-xs"
            style={{
              color: "#DBEAFE", // abhi isko hardcode rehne do
            }}
          >
            Online
          </p>
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
