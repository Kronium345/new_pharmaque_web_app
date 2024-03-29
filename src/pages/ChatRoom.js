import axios from "axios"
import io from "socket.io-client"

import React, { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

import "./chatRoom.scss"

const ChatRoom = () => {
  const navigate = useNavigate("")
  const [joined, setJoined] = React.useState(false)
  const [users, setUsers] = React.useState([])

  const divRef = React.useRef(null)

  const [socket, setSocket] = React.useState(null)
  const [messages, setMessages] = React.useState([])
  const [message, setMessage] = React.useState("")

  const [data, setData] = React.useState({
    username: "",
    room: "",
  })

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:7171/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/myaccount")
      }
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    // setJoined(true);

    let socket = io("http://localhost:8080", { transports: ["websocket"] })

    socket.on("connect", () => {
      console.log("Connected to the server via WebSocket.")
      setSocket(socket)
      setJoined(true)
    })

    socket.emit(
      "join",
      {
        name: data.username,
        room: data.room,
      },
      () => {}
    )

    //   return () => {
    //     socket.emit("disconnect");
    //     socket.off();
    //   };
  }

  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      if (socket) {
        socket.emit("sendMessage", message, () => setMessage(""))
        // setMessages([...messages, { user: data.username, text: message }]);
      }
    }
  }

  useEffect(() => {
    if (!socket) return

    socket.on("message", (message) => {
      console.log("message", message)
      setMessages((messages) => [...messages, message])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users)
    })

    return () => {
      if (socket) {
        // socket?.emit("disconnect");
        socket?.off()
      }
    }
  }, [socket])

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
            {joined ? (
              <div class="chat">
                <div class="contact bar">
                  <div class="name">
                    {data.username} in {data.room}
                  </div>
                </div>
                <div class="messages" id="chat">
                  {/* <div class="time">Today at 11:41</div> */}
                  {messages.map((msg, index) => (
                    <div
                      class={
                        "message " +
                        (msg.user === data.username ? "parker" : "stark")
                      }
                      key={index}
                    >
                      {msg.text}
                    </div>
                  ))}
                  {/* <div class="message stark">Kid, where'd you come from?</div> */}
                  <div ref={divRef}></div>
                </div>
                <form class="input" onSubmit={sendMessage}>
                  <input
                    placeholder="Type your message here!"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="btn send-button">Send</button>
                </form>
              </div>
            ) : (
              <div className="mainbg d-flex justify-content-center align-items-center  ">
                <form className="bg-white p-5">
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <input
                      type="username"
                      class="form-control"
                      id="username"
                      value={data.username}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Room
                    </label>
                    <input
                      type="test"
                      class="form-control"
                      id="room"
                      value={data.room}
                      onChange={(e) =>
                        setData({ ...data, room: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary text-center align-self-center"
                    onClick={handleSubmit}
                  >
                    Signin
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ChatRoom
