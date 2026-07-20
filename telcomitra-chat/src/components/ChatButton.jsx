import { IoChatbubbleEllipses } from "react-icons/io5";
import { theme } from "../constants/theme";
function ChatButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      {isOpen ? "✕" : <IoChatbubbleEllipses size={30} />}
    </button>
  );
}

export default ChatButton;
