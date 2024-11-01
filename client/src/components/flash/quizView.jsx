// QuizView.jsx
import React, { useEffect, useState, useMemo } from "react";
import "./QuizView.css";
import axios from 'axios';
import FlashcardView from './FlashcardView';

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

  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [flagReason, setFlagReason] = useState('');
  const [reportReason, setReportReason] = useState('');
  const [showFlagOptions, setShowFlagOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [isSessionCompleted, setIsSessionCompleted] = useState(false);

  const handleFlagFlashcard = async () => {
    try {
      const response = await axios.post('/flagged/flag', {
        questionId: questions[currentQuestion]._id,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error flagging flashcard:', error);
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

  const handleMarkDifficulty = async (difficulty) => {
    try {
      const response = await axios.post('/flash/mark-difficulty', {
        questionId: questions[currentQuestion]._id,
        difficulty: difficulty,
      });
      alert(`Marked as ${difficulty}`);
    } catch (error) {
      console.error('Error marking difficulty:', error);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      handleSkip();
    } else {
      setIsSessionCompleted(true);
    }
  };

  const handleRetake = () => {
    setIsSessionCompleted(false);
    handleSkip(0); // Reset to the first question
  };

  if (questions.length === 0) {
    return <div>No questions found.</div>;
  }

  useEffect(() => {
    flipRef.current.style.transform = "rotateY(0deg)";
    flipRef.current.style.height = flipFrontRef.current.offsetHeight + "px";
  }, [currentQuestion]);

  const sortedQuestions = useMemo(() => {
    return questions.sort((a, b) => {
      if (a.difficulty === 'hard' && b.difficulty !== 'hard') return -1;
      if (a.difficulty !== 'hard' && b.difficulty === 'hard') return 1;
      return 0;
    });
  }, [questions]);

  const { question, answers, explanation } = sortedQuestions[currentQuestion] || {};

  if (isSessionCompleted) {
    return <FlashcardView onRetake={handleRetake} />;
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

              {/* Flag Flashcard Button (Direct Action) */}
              <div className="col-sm-3">
                <div onClick={handleFlagFlashcard} className="inline removeunderline navybluetext btn">
                  <img src="/images/FlagQuestionIcon.png" className="moderateicon" alt="icon" />{" "}
                  <span className="fs-5 mx-2">Flag Flashcard</span>
                </div>
              </div>

              <div className="col-sm-4 center">
                <p className="fs-4 fw-bold navybluetext mb-2">
                  Flashcard {currentQuestion + 1} of {questions.length}
                </p>
                <p className="fs-5 fw-bold mediumbluetext mb-4">
                  Chapter Weighting: <span className="redtext">High</span>
                </p>
              </div>

              <div className="col-sm-3">
                <div onClick={() => setShowReportOptions(!showReportOptions)} className="inline removeunderline navybluetext btn">
                  <img
                    src="/images/FlagQuestionIcon.png"
                    className="moderateicon"
                    alt="icon"
                  />{" "}
                  <span className="fs-5 mx-2">Report Flashcard</span>
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
                <button onClick={handleNext} className="inline floatright mb-3">
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
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-6">
                <button
                  className="btn btn-primary fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                  onClick={() => handleMarkDifficulty('easy')}
                >
                  Mark as Easy
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-primary fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                  onClick={() => handleMarkDifficulty('hard')}
                >
                  Mark as Hard
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
