import { Link } from "react-router-dom";

import React from "react";

import "./QuizView.css";
import CommentBox from "../comments/CommentBox";
import useNode from "../../hooks/useNode";
const comments = {
  id: 1,
  items: []
}

const QuizView = ({
  questions = [],
  currentQuestion,
  handleAnswerClick,
  handleFlagged,
  handleReport,
  handleSkip,
  handleBack,
  quiz
}) => {
  const { question, answers, explanation } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = React.useState({});
  const [commentsData, setCommentsData] = React.useState(comments);
  const {insertNode, editNode, deleteNode} = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  }

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  }


  if (questions.length === 0) {
    return <div>No questions found.</div>;
  }


  return (
    <>
      <div class="row">
        <div class="col-sm-12">
          <div class="card p-4">
            <div class="row borderbottom mb-3 ">
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
                  class="inline removeunderline navybluetext btn"
                  onClick={handleReport}
                >
                  <img
                    src="/images/FlagQuestionIcon.png"
                    class="moderateicon"
                    alt="icon"
                  />{" "}
                  <span class="fs-5 mx-2">Report Question</span>
                </button>
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
                <button
                  class="inline removeunderline navybluetext floatright btn"
                  onClick={handleFlagged}
                >
                  <img
                    src="/images/FlagIcon.png"
                    class="moderateicon"
                    alt="icon"
                  />{" "}
                  <span class="fs-5 mx-2">Flag Question</span>
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

            <div class="row borderbottom justify-content-start align-items-start text-start">
              <div class="col-sm-12">
                <div class="card p-0 mb-4 mt-3">
                  <div className="text-left">{question}</div>
                  <div className="mt-3">{explanation}</div>
                </div>

                {answers.map(({ text, isCorrect, _id }, index) => {
                  return (
                    <button
                      class={
                        "fs-5 btn p-0 mb-3 " +
                        (selectedAnswer._id == _id
                          ? "bg-blue"
                          : "btn-secondary")
                      }
                      key={text}
                      onClick={() => {
                        setSelectedAnswer({ text, isCorrect, _id });
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
                      selectedAnswer?._id !== undefined
                        ? () => {
                            handleAnswerClick(selectedAnswer);
                            setSelectedAnswer({});
                          }
                        : () => {}
                    }
                  >
                    Submit Answer
                  </button>{" "}
                  {/* <button
                    onClick={handleSkip}
                    class="mediumbluetext fs-5 fw-bold mx-4 removeunderline btn"
                  >
                    Skip Question
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

            <CommentBox 
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={commentsData}
            chapterId={quiz._id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizView;

