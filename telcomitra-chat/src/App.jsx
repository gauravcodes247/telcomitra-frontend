import React, { use } from "react";
import { useState } from "react";
import ChatButton from "./components/ChatButton";
import ChatWindow from "./components/ChatWindow";
import { Toaster } from "sonner";
import "sonner/dist/styles.css";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Toaster
        richColors
        position="top-right"
        container={window.__TELCOMITRA_SHADOW_ROOT__}
      />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ChatButton isOpen={isOpen} onToggle={handleToggle} />
    </>
  );
};

export default App;
