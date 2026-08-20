import "./Chat.css";
import "./Message.css";

import { useState } from "react";
import Message from "./Message";

export default function Chat() {
  const [messages] = useState([
    {
      sender: "ai",
      text: "Привет! Я Aiden. Чем могу помочь?"
    }
  ]);

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
          placeholder="Введите сообщение..."
        />

        <button>
          Отправить
        </button>

      </div>

    </section>
  );
}
