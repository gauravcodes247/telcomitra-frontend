import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages/ChatMessages";
import MessageInput from "./MessageInput";
import useChat from "../hooks/useChat";
import RaiseTicketBanner from "./ChatMessages/RaiseTicketBanner";
const ChatWindow = ({ isOpen }) => {
  const { messages, loading, sendMessage } = useChat();
  if (!isOpen) return null;
  return (
    <div
      className={`fixed
        bottom-24
        right-6
        z-40

        h-150
        w-75

        rounded-2xl
        border border-gray-200
        bg-white
        shadow-2xl

        overflow-hidden

        origin-bottom-right
        transition-all
        duration-300
        ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0 pointer-events-none"
        }`}
    >
      <div className="flex h-full flex-col">
        <ChatHeader onClose={() => {}} />
        <RaiseTicketBanner onClick={() => setIsTicketModalOpen(true)} />
        <ChatMessages messages={messages} />
        <MessageInput onSend={sendMessage} loading={loading} />
      </div>
    </div>
  );
};

export default ChatWindow;
