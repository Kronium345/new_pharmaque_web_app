import React, { useEffect, useState } from "react";
import ScoreView from "./ScoreView/ScoreView";
import QuizView from "./QuizView/QuizView";
import { useNavigate, Link } from "react-router-dom";
import classnames from "classnames"; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"; // Import icons if not already imported
import { respiratory } from "../data/respiratory";

const RespiratoryQuestion = () => {
  const navigate = useNavigate();

  const questions = respiratory;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);
  const [flagged, setFlagged] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [delayNextQuestion, setDelayNextQuestion] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true); // Assuming you have a state for showing/hiding explanations

  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleAnswerClick = async (isCorrect) => {
    console.log(isCorrect);
    if (!delayNextQuestion) {
      setSelectedAnswer(isCorrect);
      setDelayNextQuestion(true);

      // check score
      if (isCorrect?.isCorrect) setScore(score + 1);
      // save into local storage chapter score

      localStorage.setItem(
        "chapterScore",
        currentQuestion + 1 + "/" + questions.length
      );

      // setTimeout(() => {
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
        setSelectedAnswer(null); // Reset selected answer
        setDelayNextQuestion(false); // Reset delay
        shuffleQuestions(questions); // Shuffle questions for the next round
      } else {
        setIsQuizOver(true);
      }
      // }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setSelectedAnswer(null);
    setDelayNextQuestion(false);
    shuffleQuestions(questions);
  };

  const handleFlagQuestion = () => {
    // Your logic for flagging a question
    setFlagged(flagged + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null); // Reset selected answer
      setDelayNextQuestion(false); // Reset delay
      shuffleQuestions(questions); // Shuffle questions for the next round
    } else {
      setIsQuizOver(true);
    }
  };

  return (
    <main>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-3 leftnavigation p-4">
            <Link className="navbar-brand" to="index.html">
              <img
                src="images/Logo.png"
                alt="PharmaQue Logo"
                className="logo1"
              />
              <span className="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" className="removeunderline inactivelink">
              <p className="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  className="navigationicon"
                  alt="icon"
                />
                <span className="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersColour.png"
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

            {/* Additional navigation links */}
          </div>
          <div className="col-sm-9 p-4 maincontent">
            <div className="row">
              <div className="col-sm-7">
                <p className="fs-4 mt-4 fw-bold navybluetext">
                  Chapter: Musculoskeletal and Joint Disease
                </p>
              </div>
              <div className="col-sm-5">
                <button
                  type="submit"
                  className="btn btn-primary back fw-bold fs-5 mt-4 floatright mb-4"
                >
                  <img
                    src="images/Back.png"
                    className="tinyicon mx-3"
                    alt="icon"
                  />
                  Back To Chapter Selection
                </button>
              </div>
            </div>
            <div className="App">
              {isQuizOver ? (
                <ScoreView
                  handleResetClick={handleResetClick}
                  score={score}
                  questions={questions}
                  flagged={flagged}
                />
              ) : (
                <QuizView
                  questions={questions}
                  currentQuestion={currentQuestion}
                  handleAnswerClick={handleAnswerClick}
                  selectedAnswer={selectedAnswer}
                  handleFlagQuestion={handleFlagQuestion}
                />
              )}
            </div>
            {/* Additional content */}
            <div className="row mt-3">
              <span className="fw-bold fs-5 navybluetext inline fitcontent">
                Discussion (1 Post)
              </span>
              <a
                href="#"
                className="removeunderline navybluetext inline fitcontent"
              >
                <span className="fs-5">
                  <img
                    src="images/SortIcon.png"
                    className="moderateicon mx-3"
                    alt="icon"
                  />{" "}
                  Sort By None
                </span>
              </a>
            </div>
            <div className="row mt-3">
              <div className="col-sm-1 ">
                <img
                  src="images/DummyAvatar.png"
                  className="midsizeicon mb-3"
                  alt="icon"
                />
              </div>
              <div className="col-sm-11">
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
                  className="btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                >
                  Post Comment
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-1 ">
                <img
                  src="images/DummyAvatar.png"
                  className="littlemidsizeicon mb-3"
                  alt="icon"
                />
              </div>
              <div className="col-sm-11">
                <span className="fs-5 fw-bold mediumbluetext">
                  Michael Andrew
                </span>
                <br />
                <span className="fs-5 navybluetext">
                  I don’t think this question will be very useful for Masters
                  level Pharmacy students like myself because we already learned
                  the answer to it in our Bachelors.
                </span>
                <p>
                  <button className="buttonstyle">
                    <img
                      src="images/ThumbsUp.png"
                      className="moderateicon mx-3 my-3"
                      alt="icon"
                    />
                  </button>
                  <button className="buttonstyle">
                    <img
                      src="images/ThumbsDown.png"
                      className="moderateicon mx-3 my-3"
                      alt="icon"
                    />
                  </button>
                  <a
                    href="#"
                    className="fw-bold fs-5 removeunderline navybluetext"
                  >
                    Reply
                  </a>
                  <a
                    href="#"
                    className="fw-bold fs-5 removeunderline navybluetext floatright mx-4 my-2"
                  >
                    Report
                  </a>
                </p>
              </div>
            </div>
            {/* End of additional content */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RespiratoryQuestion;
