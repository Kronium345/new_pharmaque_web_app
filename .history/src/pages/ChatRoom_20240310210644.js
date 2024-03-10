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
const ChatRoom = () => {
  const navigate = useNavigate("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:7171/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/myaccount");
      }
      console.log(res);
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
            <Link to="/flaggedquestions" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlaggedQuestionsColour.png"
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
          <div class="col-sm-9 p-4 maincontent">
            <p class="fs-4 mt-4 fw-bold navybluetext">Flagged Questions</p>
            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <div class="row mt-2">
                    <div class="col-sm-4">
                      <p>
                        <img
                          src="images/FlagIcon.png"
                          class="mediumicon"
                          alt="icon"
                        />
                        <span class="fw-bold fs-5 mb-1 mx-3 redtext">
                          Flagged
                        </span>
                      </p>
                    </div>
                    <div class="col-sm-4 center">
                      <p class="fs-4 fw-bold navybluetext mb-2">
                        Question 5 of 100
                      </p>
                      <p class="fs-5 navybluetext">
                        <span class="fw-bold mediumbluetext">Topic:</span> Drug
                        Interactions
                      </p>
                    </div>
                    <div class="col-sm-4">
                      <button
                        onclick="toggleQuestion()"
                        class="navybluetext floatright flipbutton"
                      >
                        <span class="fs-5 mx-3 questionshowingtext">
                          Show Question
                        </span>
                        <img
                          src="images/Dropdown.png"
                          class="mediumicon showquestionicon"
                        />
                      </button>
                    </div>
                  </div>

                  <div class="row bordertop mt-1 pt-3 questionholder hide">
                    <div class="col-sm-12">
                      <p class="fs-5">
                        A 73 year old man is experiencing an acute attack of
                        gout. His past medical history includes stage one
                        hypertension as well as mild osteoarthritis in his hip.
                        He is otherwise doing well. His current regimen includes
                        the following medication:
                      </p>

                      <ul class="fs-5">
                        <li>Atorvastatin 80mg once at night</li>
                        <li>Amlodipine 10mg once in the morning </li>
                        <li>
                          Paracetamol 500mg two tablets up to four times a day
                          when required
                        </li>
                      </ul>

                      <p class="fs-5 mb-1">He has no known drug allergies.</p>
                      <br />

                      <p class="fs-5 fw-bold mediumbluetext">
                        Which of the following is the most suitable drug
                        treatment for his attack of Gout?
                      </p>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Allopurinol</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Colchicine</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Febuxostat</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Prednisolone</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Risedronate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      <script src="script.js"></script>
    </main>
  );
};

export default ChatRoom;
