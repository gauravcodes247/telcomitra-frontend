import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { theme } from "../constants/theme";
function MessageInput({ onSend, loading = false }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const message = text.trim();

    if (!message) return;

    onSend(message);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-gray-200 p-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 outline-none"
          style={{
            borderColor: theme.colors.primary,
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-full p-3 text-white transition disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            backgroundColor: theme.colors.primary,
          }}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
