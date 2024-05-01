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
      <div class="row">
        <div class="col-sm-12">
          <div class="card p-4">
            <div class="row borderbottom mb-3">
              <div class="col-sm-1">
                <button onClick={handleBack} class="inline mb-3">
                  <img
                    src="/images/PreviousGrey.png"
                    class="mediumicon"
                    alt="icon"
                  />
                </button>
              </div>
              <div class="col-sm-3">
                <button
                  to=""
                  class="inline removeunderline navybluetext btn"
                  onClick={handleReport}
                >
                  <img
                    src="/images/FlagQuestionIcon.png"
                    class="moderateicon"
                    alt="icon"
                  />{" "}
                  <span class="fs-5 mx-2">Report Flashcard</span>
                </button>
              </div>

              <div class="col-sm-4 center">
                <p class="fs-4 fw-bold navybluetext mb-2">
                  Flashcard {currentQuestion} of {questions.length}
                </p>
                <p class="fs-5 fw-bold mediumbluetext mb-4">
                  Chapter Weighting: <span class="redtext">High</span>
                </p>
              </div>

              <div class="col-sm-3">
                <button
                  onClick={handleFlagged}
                  class="inline removeunderline navybluetext floatright btn"
                >
                  <img
                    src="/images/FlagIcon.png"
                    class="moderateicon"
                    alt="icon"
                  />{" "}
                  <span class="fs-5 mx-2">Flag Flashcard</span>
                </button>
              </div>

              <div class="col-sm-1">
                <button onClick={handleSkip} class="inline floatright mb-3">
                  <img
                    src="/images/NextBlue.png"
                    class="mediumicon"
                    alt="icon"
                  />
                </button>
              </div>
            </div>

            <div class="row borderbottom">
              <div class="col-sm-12">
                <div class="card p-0 mb-4 mt-3">
                  <div class="flip-card maincard">
                    <div ref={flipRef} class="flip-card-inner">
                      <div
                        class="px-5 pt-5 pb-4 bothcards flip-card-front"
                        ref={flipFrontRef}
                      >
                        <p class="fs-3 center navybluetext mb-5">{question}</p>
                        <button
                          class="floatright flipbutton"
                          onClick={() => {
                            flipRef.current.style.transform = "rotateY(180deg)";

                            flipRef.current.style.height =
                              flipBackRef.current.offsetHeight + "px";
                          }}
                        >
                          <span class="fs-4 fw-bold navybluetext mx-3 mt-2">
                            Flip card for hint
                          </span>
                          <img
                            src="/images/FlipIcon.png"
                            class="moderateicon mb-2"
                            alt="icon"
                          />
                        </button>
                      </div>

                      <div
                        ref={flipBackRef}
                        class="backcardbg px-5 pt-5 pb-4 bothcards flip-card-back"
                      >
                        <p class="fs-3 center whitetext mb-5">{explanation}</p>
                        <button
                          class="floatright flipbutton"
                          onClick={() => {
                            // transform: rotateY(180deg);
                            flipRef.current.style.transform = "rotateY(0deg)";

                            flipRef.current.style.height =
                              flipFrontRef.current.offsetHeight + "px";
                          }}
                        >
                          <span class="fs-4 fw-bold whitetext mx-3 mt-2">
                            Flip card for question
                          </span>
                          <img
                            src="/images/FlipWhite.png"
                            class="moderateicon mb-2"
                            alt="icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {answers?.map((answer, index) => (
                  <button
                    class={
                      "btn fs-5 p-0 mb-3 " +
                      (selectedAnswer?._id === answer?._id
                        ? "bg-blue"
                        : "btn-secondary")
                    }
                    key={index}
                    onClick={() => setSelectedAnswer(answer)}
                  >
                    <p class="fs-5 py-2 px-4 m-0">{answer?.text}</p>
                  </button>
                ))}

                {/* <div class="btn btn-secondary fs-5 p-0 mb-3">
                  // <p class="fs-5 py-2 px-4 m-0">Prolonging QT Interval</p>
                  //{" "}
                </div> */}
                <div
                  class="d-flex align-items-center "
                  onClick={() => handleAnswerClick(selectedAnswer)}
                >
                  <button
                    type="submit"
                    class="btn btn-deactivated fw-bold fs-5 mt-4 mb-4 px-3 py-2"
                  >
                    Submit Answer
                  </button>{" "}
                  {/* <button
                    onClick={handleSkip}
                    class="mediumbluetext fs-5 fw-bold mx-4 removeunderline btn"
                  >
                    Skip Flashcard
                  </button> */}
                </div>
              </div>
            </div>

            {/* <div class="row mt-3">
              <span class="fw-bold fs-5 navybluetext inline fitcontent">
                Discussion (0 Posts)
              </span>

              <Link
                to=""
                class="removeunderline navybluetext inline fitcontent"
              >
                <span class="fs-5">
                  <img
                    src="/images/SortIcon.png"
                    class="moderateicon mx-3"
                    alt="icon"
                  />{" "}
                  Sort By None
                </span>
              </Link>
            </div> */}

            <div class="row mt-3">
              <div class="col-sm-1 ">
                <img
                  src="/images/DummyAvatar.png"
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
    </>
  );
};

export default QuizView;
