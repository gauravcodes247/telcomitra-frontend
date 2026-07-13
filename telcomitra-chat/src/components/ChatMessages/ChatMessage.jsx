function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div className={`mb-3 flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
          isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
        }`}
      >
        <p>{message.text}</p>

        {message.results?.length > 0 && (
          <div className="mt-3">
            <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
              Matching Job Roles
            </p>

            <ul className="list-disc space-y-1 pl-5 text-sm">
              {message.results.map((job) => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
