export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((m, i) => (
        <div key={i} className="message">
          <b>{m.sender}:</b> {m.text} <small>{m.time}</small>
        </div>
      ))}
    </div>
  );
}
