import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./QuizView.css";
import CommentBox from "../comments/CommentBox";
import useNode from "../../hooks/useNode";
import axios from "axios";
import { useAuth } from "../../hooks";

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(currentQuestion);
  const { question, answers, explanation } = questions[currentQuestionIndex] || {};
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();
  const [reportReason, setReportReason] = useState("");
  const [showReportOptions, setShowReportOptions] = useState(false);
  const { profile } = useAuth();
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.retake) {
      handleRetake();
    }
  }, [location.state]);

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
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setShowExplanation(true);
      setIsAnswerCorrect(selectedAnswer.isCorrect);
      setAnsweredQuestions((prev) => [
        ...prev,
        { questionIndex: currentQuestionIndex, isCorrect: selectedAnswer.isCorrect }
      ]);
      setHasSubmitted(true);
    }
  };

  const handleFlagQuestion = async () => {
    try {
      const response = await axios.post("/flagged/flag", {
        questionId: questions[currentQuestionIndex]._id
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error flagging question:", error);
    }
  };

  const handleReportQuestion = async () => {
    try {
      const response = await axios.post("/reported/report", {
        questionId: questions[currentQuestionIndex]._id,
        reason: reportReason
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error reporting question:", error);
    }
  };

  const handleRetake = () => {
    setSelectedAnswer({});
    setShowExplanation(false);
    setIsAnswerCorrect(null);
    setHasSubmitted(false);
    setAnsweredQuestions([]);
    navigate("/chapters");
  };

  const handleSkipQuestion = () => {
    setSelectedAnswer({});
    setShowExplanation(false);
    setIsAnswerCorrect(null);
    setHasSubmitted(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/chapters");
    }
  };

  const handleQuestionClick = (index) => {
    setSelectedAnswer({});
    setShowExplanation(false);
    setIsAnswerCorrect(null);
    setHasSubmitted(false);
    setCurrentQuestionIndex(index);
  };

  const currentScore = Math.round(
    (answeredQuestions.filter((q) => q.isCorrect).length / questions.length) * 100
  );

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer({});
      setShowExplanation(false);
      setIsAnswerCorrect(null);
      setHasSubmitted(false);
    }
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      setAnsweredQuestions(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizProgress", JSON.stringify(answeredQuestions));
  }, [answeredQuestions]);

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
                <button onClick={handlePreviousQuestion} className="inline mb-3">
                  <img src="/images/PreviousGrey.png" className="mediumicon" alt="icon" />
                </button>
              </div>
              <div className="col-sm-3">
                <div onClick={handleFlagQuestion} className="inline removeunderline navybluetext btn">
                  <img src="/images/FlagQuestionIcon.png" className="moderateicon" alt="icon" />{" "}
                  <span className="fs-5 mx-2">Flag Question</span>
                </div>
              </div>

              <div className="col-sm-4 center">
                <p className="fs-4 fw-bold navybluetext mb-2">
                  Question {currentQuestionIndex + 1} / {questions.length}
                </p>
                <p className="fs-5 fw-bold mediumbluetext mb-4">
                  Chapter Weighting: <span className="redtext">High</span>
                </p>
              </div>

              <div className="col-sm-3">
                <div
                  onClick={() => setShowReportOptions(!showReportOptions)}
                  className="inline removeunderline navybluetext floatright btn"
                >
                  <img src="/images/FlagIcon.png" className="moderateicon" alt="icon" />{" "}
                  <span className="fs-5 mx-2">Report Question</span>
                </div>
                {showReportOptions && (
                  <>
                    <select onChange={(e) => setReportReason(e.target.value)}>
                      <option value="">Select reason</option>
                      <option value="incorrect">Incorrect</option>
                      <option value="misleading">Misleading</option>
                      <option value="other">Other</option>
                    </select>
                    <button onClick={handleReportQuestion} className="btn btn-primary mt-2">
                      Submit Report
                    </button>
                  </>
                )}
              </div>

              <div className="col-sm-1">
                <button onClick={handleSkipQuestion} className="inline floatright mb-3">
                  <img src="/images/NextBlue.png" className="mediumicon" alt="icon" />
                </button>
              </div>
            </div>

            <div className="row borderbottom justify-content-start align-items-start text-start">
              <div className="col-sm-9">
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
                    className={`btn ${selectedAnswer?._id ? "btn-submit-active" : "btn-deactivated"} fw-bold fs-5 mt-4 mb-4 px-3 py-2`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer?._id === undefined}
                  >
                    {hasSubmitted ? "Next Question" : "Submit Answer"}
                  </button>
                </div>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center justify-content-start question-list">
                <div className="scrollable-question-list">
                  {questions.map((q, index) => {
                    const answeredQuestion = answeredQuestions.find((aq) => aq.questionIndex === index);
                    const buttonClass = answeredQuestion
                      ? answeredQuestion.isCorrect
                        ? "correct-question"
                        : "incorrect-question"
                      : "";

                    return (
                      <div
                        key={q._id}
                        className={`question-item ${
                          currentQuestionIndex === index ? "current-question" : ""
                        } ${buttonClass}`}
                        onClick={() => handleQuestionClick(index)}
                        style={{ marginBottom: "10px" }}
                      >
                        Question {index + 1}
                      </div>
                    );
                  })}
                </div>
                <div className="score-container">
                  <p className="current-score">Current Score: {isNaN(currentScore) ? 0 : currentScore}%</p>
                </div>
              </div>
            </div>

            <CommentBox
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={commentsData}
              chapterId={quiz._id}
              profile={profile}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizView;
