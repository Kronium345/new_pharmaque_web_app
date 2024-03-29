// import axios from "axios";
import React from "react"
import { useNavigate, Link } from "react-router-dom"

const UpcomingEvents = () => {
  const navigate = useNavigate("")

  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //     axios.get('http://localhost:7171/auth/verify')
  //     .then(res => {
  //         if(res.data.status) {

  //         } else {
  //             navigate('/myaccount')
  //         }
  //         console.log(res)
  //     })
  // }, []);

  return (
    <main>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-3 leftnavigation p-4">
            <Link class="navbar-brand" to="/upcomingevents">
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

            <Link to="/upcomingevents" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/UpcomingEventsColour.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
              </p>
            </Link>
            <Link to="/queryresponses" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/QueryResponsesGrey.png"
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

          {/* </form> */}

          <div class="row py-2 m-0 px-0 lightgrey center mb-3">
            <button class="addeventbutton">
              <img src="images/AddIcon.png" class="mediumicon" alt="icon" />
            </button>
          </div>

          <div class="row">
            <div class="col-sm-12 mb-3">
              <div class="card p-4 mediumbluebg">
                <div class="row">
                  <div class="col-sm-9">
                    <p class="fs-4 whitetext">Insert Name Of Test</p>
                    <p class="fs-5 whitetext">Insert Name Of Exam Topic</p>
                    <p class="fs-5 whitetext fw-bold">
                      Saturday, 28th October 2023, 10:00 AM
                    </p>
                  </div>
                  <div class="col-sm-3 navybluebg borderradius center">
                    <div class="mt-4">
                      <p class="fs-3 fw-bold whitetext mb-1">3</p>
                      <p class="fs-4 whitetext mt-1">days to go</p>
                    </div>

                    <div class="row">
                      <div class="col-sm-12 mb-3">
                        <div class="card p-4 mediumbluebg">
                          <div class="row">
                            <div class="col-sm-9">
                              <p class="fs-4 whitetext">Insert Name Of Test</p>
                              <p class="fs-5 whitetext">
                                Insert Name Of Exam Topic
                              </p>
                              <p class="fs-5 whitetext fw-bold">
                                Saturday, 28th October 2023, 10:00 AM
                              </p>
                            </div>
                            <div class="col-sm-3 navybluebg borderradius center">
                              <div class="mt-4">
                                <p class="fs-3 fw-bold whitetext mb-1">3</p>
                                <p class="fs-4 whitetext mt-1">days to go</p>
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

export default UpcomingEvents
