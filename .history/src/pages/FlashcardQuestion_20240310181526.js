import React from "react";
import { useNavigate, Link } from "react-router-dom";

const FlashcardQuestion = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-3 leftnavigation p-4">
            <Link class="navbar-brand" to="/flashcardquestion">
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
            <Link to="/flashcards" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlashcardsColour.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Flashcards</span>
              </p>
            </Link>
            <Link to="/flaggedquestion" class="removeunderline inactivelink">
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
                  <img src="images/Back.png" class="tinyicon mx-3" alt="icon" />
                  Back To Flashcards Selection
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <div class="row borderbottom mb-3">
                    <div class="col-sm-1">
                      <Link to="" class="inline mb-3">
                        <img
                          src="images/PreviousGrey.png"
                          class="mediumicon"
                          alt="icon"
                        />
                      </Link>
                    </div>
                    <div class="col-sm-3">
                      <Link to="" class="inline removeunderline navybluetext">
                        <img
                          src="images/FlagQuestionIcon.png"
                          class="moderateicon"
                          alt="icon"
                        />{" "}
                        <span class="fs-5 mx-2">Report Flashcard</span>
                      </Link>
                    </div>

                    <div class="col-sm-4 center">
                      <p class="fs-4 fw-bold navybluetext mb-2">
                        Flashcard 1 of 100
                      </p>
                      <p class="fs-5 fw-bold mediumbluetext mb-4">
                        Chapter Weighting: <span class="redtext">High</span>
                      </p>
                    </div>

                    <div class="col-sm-3">
                      <Link
                        to=""
                        class="inline removeunderline navybluetext floatright"
                      >
                        <img
                          src="images/FlagIcon.png"
                          class="moderateicon"
                          alt="icon"
                        />{" "}
                        <span class="fs-5 mx-2">Flag Flashcard</span>
                      </Link>
                    </div>

                    <div class="col-sm-1">
                      <Link to="" class="inline floatright mb-3">
                        <img
                          src="images/NextBlue.png"
                          class="mediumicon"
                          alt="icon"
                        />
                      </Link>
                    </div>
                  </div>

                  <div class="row borderbottom">
                    <div class="col-sm-12">
                      <div class="card p-0 mb-4 mt-3">
                        <div class="flip-card maincard">
                          <div class="flip-card-inner">
                            <div class="px-5 pt-5 pb-4 bothcards flip-card-front">
                              <p class="fs-3 center navybluetext mb-5">
                                What is the primary role of Adenosine in the
                                treatment of Supraventricular Tachycardia?
                              </p>
                              <button class="floatright flipbutton">
                                <span class="fs-4 fw-bold navybluetext mx-3 mt-2">
                                  Flip card for hint
                                </span>
                                <img
                                  src="images/FlipIcon.png"
                                  class="moderateicon mb-2"
                                  alt="icon"
                                />
                              </button>
                            </div>

                            <div class="backcardbg px-5 pt-5 pb-4 bothcards flip-card-back">
                              <p class="fs-3 center whitetext mb-5">
                                Adenosine restores sinus rhythm.
                              </p>
                              <button class="floatright flipbutton">
                                <span class="fs-4 fw-bold whitetext mx-3 mt-2">
                                  Flip card for question
                                </span>
                                <img
                                  src="images/FlipWhite.png"
                                  class="moderateicon mb-2"
                                  alt="icon"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Prolonging QT Interval</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Restoring sinus rhythm</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Slowing atrial contraction
                        </p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Inhibiting atrial repolarisation
                        </p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Increasing ventricular automaticity
                        </p>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="btn btn-deactivated fw-bold fs-5 mt-4 mb-4 px-3 py-2"
                        >
                          Submit Answer
                        </button>{" "}
                        <Link
                          to=""
                          class="mediumbluetext fs-5 fw-bold mx-4 removeunderline"
                        >
                          Skip Flashcard
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <span class="fw-bold fs-5 navybluetext inline fitcontent">
                      Discussion (0 Posts)
                    </span>

                    <Link
                      to=""
                      class="removeunderline navybluetext inline fitcontent"
                    >
                      <span class="fs-5">
                        <img
                          src="images/SortIcon.png"
                          class="moderateicon mx-3"
                          alt="icon"
                        />{" "}
                        Sort By None
                      </span>
                    </Link>
                  </div>

                  <div class="row mt-3">
                    <div class="col-sm-1 ">
                      <img
                        src="images/DummyAvatar.png"
                        class="midsizeicon mb-3"
                        alt="icon"
                      />
                    </div>

                    <div class="col-sm-11">
                      <div class="form">
                        <textarea
                          class="form-control fs-5"
                          rows="2"
                          id="comment"
                          placeholder="Write a comment"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                      >
                        Post Comment
                      </button>
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

export default FlashcardQuestion;
