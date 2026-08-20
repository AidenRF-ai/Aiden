import "./Chat.css";
import "./Message.css";

import { useState } from "react";

import Message from "./Message";
import { useModel } from "../../context/ModelContext";
import { sendMessage } from "../../services/chatService";

export default function Chat() {

  const { model } = useModel();

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Привет! Я Aiden. Чем могу помочь?"
    }
  ]);

  const [input, setInput] = useState("");

  async function handleSend() {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);

    const text = input;

    setInput("");

    const response = await sendMessage(model, text);

    setMessages(prev => [
      ...prev,
      {
        sender: "ai",
        text: response.reply
      }
    ]);
  }

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
        />

        <button onClick={handleSend}>
          Отправить
        </button>

      </div>

    </section>
  );
}
