import React from "react";
import "./QuizView.css";
import classnames from "classnames";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const ScoreView = ({
  questions,
  currentQuestion,
  handleAnswerClick,
  // selectedAnswer,
}) => {
  const { question, answers, Explanation } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = React.useState({});

  return (
    <>
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
                  <span class="fs-5 mx-2">Report Question</span>
                </Link>
              </div>

              <div class="col-sm-4 center">
                <p class="fs-4 fw-bold navybluetext mb-2">
                  Question {currentQuestion + 1} / {questions.length}
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
                  <span class="fs-5 mx-2">Flag Question</span>
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
                  <div className="text-left">{question}</div>
                  <div className="mt-3">{Explanation}</div>
                </div>

                {answers.map(({ text, isCorrect }, index) => {
                  return (
                    <button
                      class={
                        "fs-5 btn btn-secondary p-0 mb-3 " +
                        (selectedAnswer?.index === index ? " bg-blue" : "")
                      }
                      key={text}
                      onClick={() => {
                        setSelectedAnswer({ index, isCorrect });
                      }}
                    >
                      <p class="fs-5 py-2 px-4 m-0">{text}</p>
                    </button>
                  );
                })}

                <div>
                  <button
                    type="submit"
                    class="btn btn-deactivated fw-bold fs-5 mt-4 mb-4 px-3 py-2"
                    onClick={
                      selectedAnswer?.index !== undefined
                        ? () => {
                            handleAnswerClick(selectedAnswer);
                            setSelectedAnswer({});
                          }
                        : () => {}
                    }
                  >
                    Submit Answer
                  </button>{" "}
                  <Link
                    to=""
                    class="mediumbluetext fs-5 fw-bold mx-4 removeunderline"
                  >
                    Skip Question
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
    </>
  );
};

export default ScoreView;
