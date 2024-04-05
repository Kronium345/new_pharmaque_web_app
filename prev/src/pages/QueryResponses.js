import axios from "axios"
import React, { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
const QueryResponses = () => {
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
            <Link class="navbar-brand" alt="/queryresponses">
              <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
              <span class="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" class="removeunderline inactivelink">
              <p class="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Chapters</span>
              </p>
            </Link>
            <Link to="/flashcards" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlashcardsGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Flashcards</span>
              </p>
            </Link>
            <Link to="/flaggedquestions" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlaggedQuestionsGrey.png"
                  class="navigationicon"
                  alt="icon"
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
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Past Chapters</span>
              </p>
            </Link>
            <Link to="/upcomingevents" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/UpcomingEventsGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
              </p>
            </Link>
            <Link to="/queryresponses" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/QueryResponsesColour.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Query Responses</span>
              </p>
            </Link>
            <Link to="/myaccount" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/AccountGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Account</span>
              </p>
            </Link>
          </div>
          <div class="col-sm-9 p-4 maincontent">
            <p class="fs-4 mt-4 fw-bold navybluetext">Query Responses</p>

            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <div class="row p-0 mx-0 mt-0 mb-3">
                    <div class="col-sm-1">
                      <p class="floatleft">
                        <input
                          class="form-check-input fs-5"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </p>
                    </div>
                    <div class="col-sm-2">
                      <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                        Delete
                      </button>
                    </div>
                    <div class="col-sm-2">
                      <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                        Mark as Read
                      </button>
                    </div>
                    <div class="col-sm-2">
                      <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                        Mark as Unread
                      </button>
                    </div>
                    <div class="col-sm-3">
                      <p class="fs-5 fw-bold navybluetext">01 - 02 of 02</p>
                    </div>
                    <div class="col-sm-1">
                      <button class="addeventbutton">
                        <img
                          src="images/Previous.png"
                          class="tinyicon halfopacity"
                          alt="button"
                        />
                      </button>
                    </div>
                    <div class="col-sm-1">
                      <button class="addeventbutton">
                        <img
                          src="images/Next.png"
                          class="tinyicon halfopacity"
                          alt="button"
                        />
                      </button>
                    </div>
                  </div>

                  <Link to="" class="removeunderline">
                    <div class="row px-0 pt-3 pb-2 m-0 fullborder">
                      <div class="col-sm-1">
                        <p class="floatleft">
                          <input
                            class="form-check-input fs-5"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p class="fs-5 fw-bold mediumbluetext mb-1">
                          Serhan Ihsan
                        </p>
                      </div>
                      <div class="col-sm-5">
                        <p class="fs-5 fw-bold mediumbluetext mb-1">
                          Re: Comment Report
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p class="fs-5 fw-bold mediumbluetext mb-1">
                          10th Nov 2023
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="" class="removeunderline">
                    <div class="row px-0 pt-3 pb-2 m-0 fullborder lightgrey">
                      <div class="col-sm-1">
                        <p class="floatleft">
                          <input
                            class="form-check-input fs-5"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p class="fs-5 mediumbluetext mb-1">Ashish Mashru</p>
                      </div>
                      <div class="col-sm-5">
                        <p class="fs-5 mediumbluetext mb-1">
                          Re: Question Report
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p class="fs-5 mediumbluetext mb-1">09th Nov 2023</p>
                      </div>
                    </div>
                  </Link>
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

export default QueryResponses
