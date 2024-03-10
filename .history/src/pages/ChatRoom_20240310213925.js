// import React from "react";
// import "./chatRoom.scss";

// export default function ChatRoom() {
//   return (
//     <div class="chat">
//       <div class="contact bar">
//         <div class="name">Tony Stark</div>
//         <div class="seen">Today at 12:56</div>
//       </div>
//       <div class="messages" id="chat">
//         {/* <div class="time">Today at 11:41</div> */}
//         <div class="message parker">Hey, man! What's up, Mr Stark? 👋</div>
//         <div class="message stark">Kid, where'd you come from?</div>
//         <div class="message parker">Field trip! 🤣</div>
//         <div class="message parker">
//           Uh, what is this guy's problem, Mr. Stark? 🤔
//         </div>
//         <div class="message stark">
//           Uh, he's from space, he came here to steal a necklace from a wizard.
//         </div>
//       </div>
//       <div class="input">
//         <input placeholder="Type your message here!" type="text" />
//         <button className="btn send-button">Send</button>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./chatRoom.scss";

const ChatRoom = () => {
  const navigate = useNavigate("");
  const [joined, setJoined] = React.useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:7171/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/myaccount");
      }
    });
  }, []);

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
                  <div class="name">Tony Stark</div>
                  <div class="seen">Today at 12:56</div>
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
            ) : (
              <div className="mainbg d-flex bg-primary">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <script src="script.js"></script>
    </main>
  );
};

export default ChatRoom;
