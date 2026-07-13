import { IoChatbubbleEllipses } from "react-icons/io5";

function ChatButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
    >
      {isOpen ? "✕" : <IoChatbubbleEllipses size={30} />}
    </button>
  );
}

export default ChatButton;
