import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./QuizView.css";

const QuizView = ({
  questions = [],
  currentQuestion,
  handleAnswerClick,
  handleFlagged,
  handleReport,
  handleSkip,
  handleBack
}) => {
  const flipRef = React.useRef(null);
  const flipFrontRef = React.useRef(null);
  const flipBackRef = React.useRef(null);

  const { question, answers, explanation } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = React.useState({});

  if (questions.length === 0) {
    return <div>No questions found.</div>;
  }

  useEffect(() => {
    flipRef.current.style.transform = "rotateY(0deg)";
    flipRef.current.style.height = flipFrontRef.current.offsetHeight + "px";
  }, [currentQuestion]);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <div className="row borderbottom mb-3">
              <div className="col-sm-1">
                <button onClick={handleBack} className="inline mb-3">
                  <img
                    src="/images/PreviousGrey.png"
                    className="mediumicon"
                    alt="icon"
                  />
                </button>
              </div>
              <div className="col-sm-3">
                <button
                  to=""
                  className="inline removeunderline navybluetext btn"
                  onClick={handleReport}
                >
                  <img
                    src="/images/FlagQuestionIcon.png"
                    className="moderateicon"
                    alt="icon"
                  />{" "}
                  <span className="fs-5 mx-2">Report Flashcard</span>
                </button>
              </div>

              <div className="col-sm-4 center">
                <p className="fs-4 fw-bold navybluetext mb-2">
                  Flashcard {currentQuestion} of {questions.length}
                </p>
                <p className="fs-5 fw-bold mediumbluetext mb-4">
                  Chapter Weighting: <span className="redtext">High</span>
                </p>
              </div>

              <div className="col-sm-3">
                <button
                  onClick={handleFlagged}
                  className="inline removeunderline navybluetext floatright btn"
                >
                  <img
                    src="/images/FlagIcon.png"
                    className="moderateicon"
                    alt="icon"
                  />{" "}
                  <span className="fs-5 mx-2">Flag Flashcard</span>
                </button>
              </div>

              <div className="col-sm-1">
                <button onClick={handleSkip} className="inline floatright mb-3">
                  <img
                    src="/images/NextBlue.png"
                    className="mediumicon"
                    alt="icon"
                  />
                </button>
              </div>
            </div>

            <div className="row borderbottom">
              <div className="col-sm-12">
                <div className="card p-0 mb-4 mt-3">
                  <div className="flip-card maincard">
                    <div ref={flipRef} className="flip-card-inner">
                      <div
                        className="px-5 pt-5 pb-4 bothcards flip-card-front"
                        ref={flipFrontRef}
                      >
                        <p className="fs-3 center navybluetext mb-5">{question}</p>
                        <button
                          className="floatright flipbutton"
                          onClick={() => {
                            flipRef.current.style.transform = "rotateY(180deg)";

                            flipRef.current.style.height =
                              flipBackRef.current.offsetHeight + "px";
                          }}
                        >
                          <span className="fs-4 fw-bold navybluetext mx-3 mt-2">
                            Show answer
                          </span>
                          <img
                            src="/images/FlipIcon.png"
                            className="moderateicon mb-2"
                            alt="icon"
                          />
                        </button>
                      </div>

                      <div
                        ref={flipBackRef}
                        className="backcardbg px-5 pt-5 pb-4 bothcards flip-card-back"
                      >
                        <p className="fs-3 center whitetext mb-5">{explanation}</p>
                        <button
                          className="floatright flipbutton"
                          onClick={() => {
                            flipRef.current.style.transform = "rotateY(0deg)";
                            flipRef.current.style.height =
                              flipFrontRef.current.offsetHeight + "px";
                          }}
                        >
                          <span className="fs-4 fw-bold whitetext mx-3 mt-2">
                            Show question
                          </span>
                          <img
                            src="/images/FlipWhite.png"
                            className="moderateicon mb-2"
                            alt="icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answer buttons are commented out
                {answers?.map((answer, index) => (
                  <button
                    className={
                      "btn fs-5 p-0 mb-3 " +
                      (selectedAnswer?._id === answer?._id
                        ? "bg-blue"
                        : "btn-secondary")
                    }
                    key={index}
                    onClick={() => setSelectedAnswer(answer)}
                  >
                    <p className="fs-5 py-2 px-4 m-0">{answer?.text}</p>
                  </button>
                ))}

                <div
                  className="d-flex align-items-center "
                  onClick={() => handleAnswerClick(selectedAnswer)}
                >
                  <button
                    type="submit"
                    className="btn btn-deactivated fw-bold fs-5 mt-4 mb-4 px-3 py-2"
                  >
                    Next Question
                  </button>{" "}
                  <button
                    onClick={handleSkip}
                    className="mediumbluetext fs-5 fw-bold mx-4 removeunderline btn"
                  >
                    Skip Flashcard
                  </button>
                </div>
                */}

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-1 ">
                <img
                  src="/images/DummyAvatar.png"
                  className="midsizeicon mb-3"
                  alt="icon"
                />
              </div>

              <div className="col-sm-11">
                <div className="form">
                  <textarea
                    className="form-control fs-5"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizView;
