import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Chapters = () => {
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
            <Link class="navbar-brand" href="index.html">
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
            <Link to="/chapters" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersColour.png"
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
          </div>
          <div class="col-sm-9 p-4 maincontent">
            <p class="fs-4 mt-4 fw-bold navybluetext">Chapters</p>
            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <form class="d-flex mb-3" role="search">
                    <div class="input-group">
                      <span class="input-group-text">
                        <img
                          src="images/SearchIcon.png"
                          class="smallericon mx-1"
                          alt="navigation"
                        />
                      </span>
                      <input
                        class="form-control px-2 py-2"
                        type="search"
                        placeholder="Search Chapter Name"
                        aria-label="Search"
                      />
                    </div>
                  </form>

                  {CHAPTERS.map((chapter, index) => (
                    <div class="row" key={index}>
                      {chapter.map((chapter, index) => (
                        <div class="col-sm-6 mb-3" key={index}>
                          <div class="card p-4 mediumbluebg">
                            <div class="row">
                              <div class="col-sm-3">
                                <img
                                  src={chapter.image}
                                  class="icon"
                                  alt="icon"
                                />
                              </div>
                              <div class="col-sm-9">
                                <p class="fs-5 fw-bold whitetext mb-1">
                                  {chapter.name}
                                </p>
                                <p class="fs-6 whitetext mb-3">
                                  {chapter.questionsAttempted}
                                </p>

                                <Link
                                  to=""
                                  class="removeunderline boldtext navybluetext fw-bold"
                                >
                                  <div class="px-3 py-2 whitebg pseudobutton">
                                    Resume Chapter
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/RespiratoryIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Respiratory System
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/respiratoryquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/CNSIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Central Nervous System
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/cnsquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/InfectionsIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Infections
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/infectionquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/EndocrineIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">Endocrine</p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/endocrinequestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/GynaecologyIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Obstetrics, Gynaecology and Genitourinary tract
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/oguquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/MalignantIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Malignant Disease and Immunosuppression
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/mdiquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/BloodIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Nutrition and Blood
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/nbquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/EyeIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Ophthalmology
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/ophthalmologyquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/SkinIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">Skin</p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/skinquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/AnaesthesiaIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Anaesthesia
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/anaesthesiaquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/ImmunoIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Immunological products and vaccines
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/ipvquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/MusculoIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Musculoskeletal & Joint diseases
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to="/mskquestion"
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/ENTIcon.png"
                              class="icon"
                              alt="icon"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Ear, Nose and Throat
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              0/100 Questions Attempted
                            </p>

                            <Link
                              to=""
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Start Chapter
                              </div>
                            </Link>
                          </div>
                        </div>
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

export default Chapters;

const CHAPTERS = [
  [
    {
      name: "Gastrointestinal System",
      image: "images/GastroIcon.png",
      questionsAttempted: "5/100 Questions Attempted",
      link: "",
    },
    {
      name: "Cardiovascular System",
      image: "images/CardioIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/cardioquestion",
    },
  ],
  [
    {
      name: "Respiratory System",
      image: "images/RespiratoryIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/respiratoryquestion",
    },
    {
      name: "Central Nervous System",
      image: "images/CNSIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/cnsquestion",
    },
  ],
  [
    {
      name: "Infections",
      image: "images/InfectionsIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/infectionquestion",
    },
    {
      name: "Endocrine",
      image: "images/EndocrineIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/endocrinequestion",
    },
  ],
  [
    {
      name: "Obstetrics, Gynaecology and Genitourinary tract",
      image: "images/GynaecologyIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/oguquestion",
    },
    {
      name: "Malignant Disease and Immunosuppression",
      image: "images/MalignantIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/mdiquestion",
    },
  ],
  [
    {
      name: "Nutrition and Blood",
      image: "images/BloodIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/nbquestion",
    },
    {
      name: "Ophthalmology",
      image: "images/EyeIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/ophthalmologyquestion",
    },
  ],
  [
    {
      name: "Skin",
      image: "images/SkinIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/skinquestion",
    },
    {
      name: "Anaesthesia",
      image: "images/AnaesthesiaIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/anaesthesiaquestion",
    },
  ],
  [
    {
      name: "Immunological products and vaccines",
      image: "images/ImmunoIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/ipvquestion",
    },

    {
      name: "Musculoskeletal & Joint diseases",
      image: "images/MusculoIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/mskquestion",
    },
  ],
  [
    {
      name: "Ear, Nose and Throat",
      image: "images/ENTIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "",
    },
  ],
];
