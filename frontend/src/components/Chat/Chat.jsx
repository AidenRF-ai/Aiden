import "./Chat.css";
import "./Message.css";

import { useState } from "react";
import Message from "./Message";

export default function Chat() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Привет! Я Aiden. Чем могу помочь?"
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (input.trim() === "") return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: input
      }
    ]);

    setInput("");

  };

  return (
    <section className="chat-window">

      <div className="welcome">

        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            text={message.text}
          />
        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
        />

        <button onClick={sendMessage}>
          Отправить
        </button>

      </div>

    </section>
  );
}
