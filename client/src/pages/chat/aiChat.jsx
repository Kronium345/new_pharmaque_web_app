import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./chatRoom.scss";

const AIChat = () => {
  const navigate = useNavigate("");

  const API_KEY = "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";

  const divRef = React.useRef(null);

  const [typing, setTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Fitbot!",
      sender: "Fitbot",
    },
  ]);

  const handleSend = async () => {
    if (inputMessage === "") return;

    const newMessage = {
      message: inputMessage,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setInputMessage("");
    setTyping(true);

    await processMessageToFitbot(newMessages);
  };

  const processMessageToFitbot = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Fitbot") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts as a personal trainer would.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
          mode: "cors", // no-cors, *cors, same-origin
        }
      );

      const data = await response.json();

      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "Fitbot",
        },
      ]);
      setTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setTyping(false);
    }
  };

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div class="chat">
        <div class="contact bar">
          <div class="name">AI Chat Bot</div>
        </div>
        <div class="messages" id="chat">
          {messages.map((msg, index) => (
            <div
              class={
                "message " + (msg.sender !== "Fitbot" ? "parker" : "stark")
              }
              key={index}
            >
              {msg.message}
            </div>
          ))}
          <div ref={divRef} />
        </div>
        <form
          class="input"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            placeholder="Type your message here!"
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="btn send-button">Send</button>
        </form>
      </div>
    </>
  );
};

export default AIChat;
