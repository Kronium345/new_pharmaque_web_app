import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./QuizView.css";
import CommentBox from "../comments/CommentBox";
import useNode from "../../hooks/useNode";
import axios from 'axios';

const comments = {
  id: 1,
  items: []
};

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
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();
  const [flagReason, setFlagReason] = useState('');
  const [reportReason, setReportReason] = useState('');

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  const handleSubmitAnswer = () => {
    if (hasSubmitted) {
      handleAnswerClick(selectedAnswer);
      setSelectedAnswer({});
      setShowExplanation(false);
      setIsAnswerCorrect(null);
      setHasSubmitted(false);
    } else {
      setShowExplanation(true);
      setIsAnswerCorrect(selectedAnswer.isCorrect);
      setHasSubmitted(true);
    }
  };

  const handleFlagQuestion = async () => {
    try {
      const response = await axios.post('/flagged/flag', {
        questionId: questions[currentQuestion]._id,
        reason: flagReason,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error flagging question:', error);
    }
  };

  const handleReportQuestion = async () => {
    try {
      const response = await axios.post('/reported/report', {
        questionId: questions[currentQuestion]._id,
        reason: reportReason,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error reporting question:', error);
    }
  };

  if (questions.length === 0) {
    return <div>No questions found.</div>;
  }

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
                  className="inline removeunderline navybluetext btn"
                  onClick={handleReport}
                >
                  <img
                    src="/images/FlagQuestionIcon.png"
                    className="moderateicon"
                    alt="icon"
                  />{" "}
                  <span className="fs-5 mx-2">Report Question</span>
                </button>
                <select onChange={(e) => setReportReason(e.target.value)}>
                  <option value="">Select reason</option>
                  <option value="incorrect">Incorrect</option>
                  <option value="misleading">Misleading</option>
                  <option value="other">Other</option>
                </select>
                <button onClick={handleReportQuestion} className="btn btn-primary mt-2">
                  Submit Report
                </button>
              </div>

              <div className="col-sm-4 center">
                <p className="fs-4 fw-bold navybluetext mb-2">
                  Question {currentQuestion + 1} / {questions.length}
                </p>
                <p className="fs-5 fw-bold mediumbluetext mb-4">
                  Chapter Weighting: <span className="redtext">High</span>
                </p>
              </div>

              <div className="col-sm-3">
                <button
                  className="inline removeunderline navybluetext floatright btn"
                  onClick={handleFlagged}
                >
                  <img
                    src="/images/FlagIcon.png"
                    className="moderateicon"
                    alt="icon"
                  />{" "}
                  <span className="fs-5 mx-2">Flag Question</span>
                </button>
                <select onChange={(e) => setFlagReason(e.target.value)}>
                  <option value="">Select reason</option>
                  <option value="inappropriate">Inappropriate</option>
                  <option value="too_cumbersome">Too Cumbersome</option>
                  <option value="other">Other</option>
                </select>
                <button onClick={handleFlagQuestion} className="btn btn-primary mt-2">
                  Submit Flag
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

            <div className="row borderbottom justify-content-start align-items-start text-start">
              <div className="col-sm-12">
                <div className="card p-0 mb-4 mt-3">
                  <div className="text-left question-text">{question}</div>
                </div>

                <div className="answer">
                  {answers.map(({ text, isCorrect, _id }, index) => (
                    <button
                      key={_id}
                      className={`fs-5 btn p-0 mb-3 answer-button ${
                        selectedAnswer._id === _id
                          ? isAnswerCorrect === null
                            ? "selected-answer"
                            : isCorrect
                            ? "correct-answer"
                            : "incorrect-answer"
                          : isCorrect && hasSubmitted
                          ? "correct-answer"
                          : ""
                      }`}
                      onClick={() => setSelectedAnswer({ text, isCorrect, _id })}
                      disabled={hasSubmitted}
                    >
                      <p className="fs-5 py-2 px-4 m-0">{text}</p>
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="mt-3 explanation">
                    <strong>{explanation}</strong>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className={`btn ${
                      selectedAnswer?._id ? "btn-submit-active" : "btn-deactivated"
                    } fw-bold fs-5 mt-4 mb-4 px-3 py-2`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer?._id === undefined}
                  >
                    {hasSubmitted ? "Next Question" : "Submit Answer"}
                  </button>
                </div>
              </div>
            </div>

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
