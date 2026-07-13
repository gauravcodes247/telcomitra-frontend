import { useState } from "react";
import api from "../services/api";

function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi 👋 Welcome to TelcoMitra.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    // User message UI mein turant dikhao
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await api.post("/chat/message", {
        message: text,
      });

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: response.data.message,
        results: response.data.results,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}

export default useChat;
