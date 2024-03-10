import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const Dashboard = () => {
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

  const [flash, setFlash] = useState({});
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    // get data from the local storage
    const flashData = localStorage.getItem("flash");
    const chapterData = localStorage.getItem("chapter");

    if (flashData) {
      const flash = JSON.parse(flashData);
    }

    if (chapterData) {
      const chapter = JSON.parse(chapterData);
    }
  }, []);

  return (
    <main>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-3 leftnavigation p-4">
            <Link class="navbar-brand" to="/dashboard">
              <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
              <span class="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" class="removeunderline activelink">
              <p class="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardColor.png"
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
                  src="images/FlaggedQuestionsGrey.png"
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
            <Link to="/chat-room" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8735/8735217.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Chat Room</span>
              </p>
            </Link>
            <Link to="/ai-chat" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8735/8735217.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">AI Chat</span>
              </p>
            </Link>
          </div>
          <div class="col-sm-9 p-4 maincontent">
            <p class="fs-4 mt-4 fw-bold navybluetext">Dashboard</p>
            <div class="row">
              <div class="col-sm-6">
                <div class="col-sm-12 mb-3">
                  <div class="card p-4">
                    <div class="row">
                      <div class="col-sm-3">
                        <svg viewBox="0 0 250 250" class="circular-progress">
                          <circle class="bg"></circle>
                          <circle class="fg"></circle>
                        </svg>
                      </div>
                      <div class="col-sm-9">
                        <p class="h5 navybluetext fw-bold">
                          Welcome back Aditya!
                        </p>
                        <p class="greytext fs-5 mb-1">
                          There are <span class="fw-bold">3 tasks</span> for you
                          to complete today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 mb-3">
                  <div class="card p-4">
                    <div class="row">
                      <p class="h5 navybluetext fw-bold mb-3">Today's Tasks</p>
                    </div>
                    <div class="row borderbottom">
                      <div class="col-sm-1">
                        <img
                          src="images/IncompleteTaskIcon.png"
                          class="smallicon"
                          alt="icon"
                        />
                      </div>
                      <div class="col-sm-11">
                        <p class="fs-5 navybluetext mb-2">
                          Gastrointestinal System
                        </p>
                        <a href="#" class="removeunderline navybluetext">
                          <p>
                            <img
                              src="images/ChaptersColour.png"
                              class="smallicon"
                            />
                            <span class="fs-6 fw-bold mx-2">
                              4/40 Questions Attempted
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="row borderbottom mt-2">
                      <div class="col-sm-1">
                        <img
                          src="images/CompleteTaskIcon.png"
                          class="smallicon"
                          alt="icon"
                        />
                      </div>
                      <div class="col-sm-11">
                        <p class="fs-5 navybluetext mb-2 halveopacity">
                          Cardiovascular System
                        </p>
                        <p>
                          <img
                            src="images/FlashcardsColour.png"
                            class="smallicon halveopacity"
                            alt="flashcard"
                          />
                          <span class="fs-6 fw-bold mx-2 halveopacity">
                            40/40 Flashcards Attempted
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="row borderbottom mt-2">
                      <div class="col-sm-1">
                        <img
                          src="images/IncompleteTaskIcon.png"
                          class="smallicon"
                        />
                      </div>
                      <div class="col-sm-11">
                        <p class="fs-5 navybluetext mb-2">
                          Central Nervous System
                        </p>
                        <a href="#" class="removeunderline navybluetext">
                          <p>
                            <img
                              src="images/FlashcardsColour.png"
                              class="smallicon"
                              alt="icon"
                            />
                            <span class="fs-6 fw-bold mx-2">
                              10/40 Flashcards Attempted
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="row borderbottom mt-2">
                      <div class="col-sm-1">
                        <img
                          src="images/CompleteTaskIcon.png"
                          class="smallicon"
                        />
                      </div>
                      <div class="col-sm-11">
                        <p class="fs-5 navybluetext mb-2 halveopacity">
                          Respiratory System
                        </p>
                        <p>
                          <img
                            src="images/ChaptersColour.png"
                            class="smallicon halveopacity"
                          />
                          <span class="fs-6 fw-bold mx-2 halveopacity">
                            40/40 Questions Attempted
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="row borderbottom mt-2">
                      <div class="col-sm-1">
                        <img
                          src="images/IncompleteTaskIcon.png"
                          class="smallicon"
                        />
                      </div>
                      <div class="col-sm-11">
                        <p class="fs-5 navybluetext mb-2">Infections</p>
                        <a href="#" class="navybluetext removeunderline">
                          <p>
                            <img
                              src="images/FlashcardsColour.png"
                              class="smallicon"
                            />
                            <span class="fs-6 fw-bold mx-2">
                              15/40 Flashcards Attempted
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 mb-3">
                  <div class="card p-4">
                    <div class="row">
                      <div class="col-sm-9">
                        <p class="h5 navybluetext fw-bold mb-3">
                          Flagged Questions
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <a href="#" class="removeunderline">
                          <p class="h5 navybluetext fw-bold">View All</p>
                        </a>
                      </div>
                    </div>
                    <div class="row borderbottom mb-3">
                      <div class="col-sm-12">
                        <p class="fs-5 navybluetext mb-2">
                          Musculoskeletal and Joint Disease
                        </p>
                        <a href="#" class="removeunderline navybluetext">
                          <p>
                            <img
                              src="images/FlaggedQuestionsColour.png"
                              class="smallicon"
                            />
                            <span class="fs-6 mx-2">
                              A 73 year old man is experiencing an acute attack
                              of gout...
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="row borderbottom">
                      <div class="col-sm-12">
                        <p class="fs-5 navybluetext mb-2">
                          Central Nervous System
                        </p>
                        <a href="#" class="removeunderline navybluetext">
                          <p>
                            <img
                              src="images/FlaggedQuestionsColour.png"
                              class="smallicon"
                            />
                            <span class="fs-6 mx-2">
                              Mr Parker, a 46 year old male has recently been
                              prescribed...
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="col-sm-12 mb-3">
                  <div class="card p-4">
                    <div class="row">
                      <div class="col-sm-3">
                        <img src="images/InsightIcon.png" class="icon" />
                      </div>
                      <div class="col-sm-9">
                        <p class="h5 navybluetext fw-bold">User Insights</p>
                        <p class="greytext fs-5 mb-1">
                          Your screen time has increased by a whopping{" "}
                          <span class="fw-bold">12%</span> much like a
                          pharmacy's stock of candy during flu season!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card p-4 mb-3">
                  <div class="row">
                    <div class="col-sm-9">
                      <p class="h5 navybluetext fw-bold">Upcoming Events</p>
                      <p class="greytext fs-5 mb-1">
                        Registration Exam, Paper 2
                      </p>
                      <p class="greytext fs-6 mb-1">Cardiovascular System</p>
                      <p class="fs-6 navybluetext fw-bold mb-1">
                        Saturday, 28th October 2023, 10:00 AM
                      </p>
                    </div>
                    <div class="col-sm-3 center">
                      <a href="#" class="removeunderline">
                        <p class="h5 navybluetext fw-bold">View All</p>
                      </a>
                      <div class="mt-3 navybluebg px-3 py-2 borderradius">
                        <p class="fw-bold fs-4 mb-1 whitetext">3</p>
                        <p class="fs-6 mb-1 whitetext">Days To Go</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card p-4 navybluebg mb-3">
                  <div class="row">
                    <div class="col-sm-9">
                      <p class="h5 navybluetext fw-bold whitetext">Chapters</p>
                      <p class="greytext fs-5 mb-1 whitetext">
                        Gastrointestinal System
                      </p>
                      <br />
                      <a href="#" class="removeunderline">
                        <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                          <img
                            src="images/ChaptersWhite.png"
                            class="smallicon"
                          />
                          <span class="mx-3">4/40 Questions Attempted</span>
                        </p>
                      </a>
                    </div>
                    <div class="col-sm-3 center">
                      <a href="#" class="removeunderline">
                        <p class="h5 navybluetext fw-bold whitetext">
                          View All
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card p-4 navybluebg mb-3">
                  <div class="row">
                    <div class="col-sm-9">
                      <p class="h5 navybluetext fw-bold whitetext">
                        Flashcards
                      </p>
                      <p class="greytext fs-5 mb-1 whitetext">
                        Central Nervous System
                      </p>
                      <br />
                      <a href="#" class="removeunderline">
                        <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                          <img
                            src="images/FlashcardsWhite.png"
                            class="smallicon"
                          />
                          <span class="mx-3">10/40 Questions Attempted</span>
                        </p>
                      </a>
                    </div>
                    <div class="col-sm-3 center">
                      <a href="#" class="removeunderline">
                        <p class="h5 navybluetext fw-bold whitetext">
                          View All
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card p-4 navybluebg mb-3">
                  <div class="row mb-3">
                    <div class="col-sm-9">
                      <p class="h5 navybluetext fw-bold whitetext">
                        Past Chapters
                      </p>
                      <p class="greytext fs-5 mb-1 whitetext">Respiratory</p>
                    </div>
                    <div class="col-sm-3 center">
                      <a href="#" class="removeunderline">
                        <p class="h5 navybluetext fw-bold whitetext">
                          View All
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                      <img src="images/Correct.png" class="smallicon" />
                      <span class="mx-3">30/40 Correct</span>

                      <img src="images/Wrong.png" class="smallicon" />
                      <span class="mx-3">10/40 Correct</span>
                    </p>
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

export default Dashboard;
