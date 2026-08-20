import { useState } from "react";

export default function useChat() {

  const [messages, setMessages] = useState([]);

  function addMessage(sender, text) {

    setMessages(prev => [
      ...prev,
      {
        sender,
        text
      }
    ]);

  }

  return {
    messages,
    addMessage
  };

}
