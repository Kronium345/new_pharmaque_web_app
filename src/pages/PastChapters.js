import axios from "axios"
import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const PastChapters = () => {
  const navigate = useNavigate("")

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:7171/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/myaccount")
      }
      console.log(res)
    })
  }, [])

  return (
    <main>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-3 leftnavigation p-4">
            <Link class="navbar-brand" to="/pastchapters">
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
                  src="images/FlaggedQuestionsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">
                  Flagged Questions
                </span>
              </p>
            </Link>
            <Link to="/pastchapters" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/PastChaptersColour.png"
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
            <p class="fs-4 mt-4 fw-bold navybluetext">Past Chapters</p>
            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <form class="d-flex mb-3" role="search">
                    <div class="input-group">
                      <span class="input-group-text">
                        <img
                          src="images/SearchIcon.png"
                          class="smallericon mx-1"
                          alt="search"
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
                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="card p-4 mediumbluebg">
                        <div class="row">
                          <div class="col-sm-3">
                            <img
                              src="images/GastroIcon.png"
                              class="icon"
                              alt="gastro"
                            />
                          </div>
                          <div class="col-sm-9">
                            <p class="fs-5 fw-bold whitetext mb-1">
                              Gastrointestinal System
                            </p>
                            <p class="fs-6 whitetext mb-3">
                              100/100 Questions Attempted
                            </p>

                            <p>
                              <img
                                src="images/ScoreIcon.png"
                                class="moderateicon"
                                alt="score"
                              />
                              <span class="whitetext fw-bold mx-3">
                                80 / 100 Scored
                              </span>
                            </p>

                            <Link
                              to=""
                              class="removeunderline boldtext navybluetext fw-bold"
                            >
                              <div class="px-3 py-2 whitebg pseudobutton">
                                Retake Chapter
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
  )
}

export default PastChapters
