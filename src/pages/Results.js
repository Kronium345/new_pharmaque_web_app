import React from "react"
class Results extends React.Component {
  render() {
    return (
      <main>
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-sm-3 leftnavigation p-4">
              <a class="navbar-brand" href="index.html">
                <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
                <span class="fs-4 fw-bold mx-3">PharmaQue</span>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="pt-5 pb-3 m-0">
                  <img src="images/DashboardGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Dashboard</span>
                </p>
              </a>
              <a href="#" class="removeunderline activelink">
                <p class="py-3 m-0">
                  <img src="images/ChaptersColour.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Chapters</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img src="images/FlashcardsGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Flashcards</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/FlaggedQuestionsGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Flagged Questions
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/PastChaptersGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">Past Chapters</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/UpcomingEventsGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Upcoming Events
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/QueryResponsesGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Query Responses
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img src="images/AccountGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Account</span>
                </p>
              </a>
            </div>
            <div class="col-sm-9 p-4 maincontent">
              <div class="row">
                <div class="col-sm-7">
                  <p class="fs-4 mt-4 fw-bold navybluetext">
                    Chapter: Musculoskeletal and Joint Disease
                  </p>
                </div>
                <div class="col-sm-5">
                  <button
                    type="submit"
                    class="btn btn-primary back fw-bold fs-5 mt-4 floatright mb-4"
                  >
                    <img src="images/Back.png" class="tinyicon mx-3" />
                    Back To Chapter Selection
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card p-4">
                    <div class="col-sm-12 center">
                      <img
                        src="images/ResultsIcon.png"
                        class="logo center mb-3"
                      />
                      <p class="navybluetext fs-4 fw-bold mb-1">
                        Chapter Results
                      </p>
                      <p class="navybluetext fs-5">
                        Congratulations! You completed this chapter!
                      </p>
                    </div>
                    <div class="row center">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-10">
                        <div class="card p-4 navybluebg">
                          <div class="row borderbottom">
                            <p class="leftalign mt-3">
                              <img
                                src="images/ScoreIcon.png"
                                class="littlemidsizeicon"
                              />
                              <span class="fs-5 whitetext mx-3">
                                SCORE GAINED
                              </span>{" "}
                              <span class="fs-4 fw-bold whitetext floatright pt-2">
                                80 / 100
                              </span>
                            </p>
                          </div>
                          <div class="row borderbottom">
                            <p class="leftalign mt-3">
                              <img
                                src="images/FlaggedIcon.png"
                                class="littlemidsizeicon"
                              />
                              <span class="fs-5 whitetext mx-3">
                                QUESTIONS FLAGGED
                              </span>{" "}
                              <span class="fs-4 fw-bold whitetext floatright pt-2">
                                40
                              </span>
                            </p>
                          </div>
                          <div class="row borderbottom">
                            <p class="leftalign mt-3">
                              <img
                                src="images/CorrectIcon.png"
                                class="littlemidsizeicon"
                              />
                              <span class="fs-5 whitetext mx-3">
                                CORRECT ANSWERS
                              </span>{" "}
                              <span class="fs-4 fw-bold whitetext floatright pt-2">
                                80
                              </span>
                            </p>
                          </div>
                          <div class="row borderbottom">
                            <p class="leftalign mt-3">
                              <img
                                src="images/WrongIcon.png"
                                class="littlemidsizeicon"
                              />
                              <span class="fs-5 whitetext mx-3">
                                WRONG ANSWERS
                              </span>{" "}
                              <span class="fs-4 fw-bold whitetext floatright pt-2">
                                20
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-1"></div>
                    </div>

                    <div class="col-sm-12 center">
                      <button
                        type="submit"
                        class="btn btn-primary fw-bold fs-5 mt-4 mb-2 px-3 pt-3 pb-3"
                      >
                        <img src="images/Back.png" class="tinyicon" />
                        <span class="mx-3">Back To Chapter Selection</span>
                      </button>
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
}

export default Results
