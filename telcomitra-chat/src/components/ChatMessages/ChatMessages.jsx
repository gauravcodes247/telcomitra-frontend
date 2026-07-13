import ChatMessage from "./ChatMessage";

function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
export default ChatMessages;
