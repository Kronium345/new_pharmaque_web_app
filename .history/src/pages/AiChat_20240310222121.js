import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./chatRoom.scss";

const AIChat = () => {
  const navigate = useNavigate("");

  const API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
  //

  const [typing, setTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Fitbot!",
      sender: "Fitbot",
    },
  ]);

  const handleSend = async () => {
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
        }
      );

      const data = await response.json();
      console.log(data);
      console.log(data.choices[0].message.content);
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

  return (
    <main>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-3 leftnavigation p-4">
            <Link class="navbar-brand" to="/flaggedquestions">
              <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
              <span class="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" class="removeunderline inactivelink">
              <p class="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Chapters</span>
              </p>
            </Link>
            <Link to="/flashcards" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlashcardsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Flashcards</span>
              </p>
            </Link>
            <Link to="/flaggedquestions" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="/images/FlaggedQuestionsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">
                  Flagged Questions
                </span>
              </p>
            </Link>
            <Link to="/pastchapters" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/PastChaptersGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Past Chapters</span>
              </p>
            </Link>
            <Link to="/upcomingevents" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/UpcomingEventsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
              </p>
            </Link>
            <Link to="/queryresponses" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/QueryResponsesGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Query Responses</span>
              </p>
            </Link>
            <Link to="/myaccount" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/AccountGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Account</span>
              </p>
            </Link>
          </div>
          <div className="col-sm-12 col-md-9">
            <div class="chat">
              <div class="contact bar">
                <div class="name">AI Chat Bot</div>
              </div>
              <div class="messages" id="chat">
                {/* <div class="time">Today at 11:41</div> */}
                <div class="message parker">
                  Hey, man! What's up, Mr Stark? 👋
                </div>
                <div class="message stark">Kid, where'd you come from?</div>
                <div class="message parker">Field trip! 🤣</div>
                <div class="message parker">
                  Uh, what is this guy's problem, Mr. Stark? 🤔
                </div>
                <div class="message stark">
                  Uh, he's from space, he came here to steal a necklace from a
                  wizard.
                </div>
              </div>
              <div class="input">
                <input placeholder="Type your message here!" type="text" />
                <button className="btn send-button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="script.js"></script>
    </main>
  );
};

export default AIChat;