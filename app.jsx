import { useState, useEffect } from "react";
import socket from "./socket";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import SendBox from "./components/SendBox";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const message = {
      sender: "Me",
      text,
      time: new Date().toLocaleTimeString()
    };
    setMessages((prev) => [...prev, message]);
    socket.emit("sendMessage", message);
  };

  return (
    <div className="app">
      <ChatList />
      <ChatWindow messages={messages} />
      <SendBox onSend={sendMessage} />
    </div>
  );
}

export default App;
