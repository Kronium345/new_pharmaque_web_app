import { useNavigate } from "react-router-dom";
import React from "react";
import "./ScoreView.css";

const ScoreView = ({ score = {}, questions = [], onRetake }) => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card p-4">
          <img
            src="/images/ResultsIcon.png"
            className="logo text-center"
            alt="PharmaQue Logo"
          />
          <p className="text-header">Chapter Results</p>
          <p>Congratulations! You have completed the chapter.</p>
          <Option
            text="Score Gained"
            value={score?.correctAnswers + "/" + questions.length}
            image="/images/ScoreIcon.png"
          />
          <Option
            text="Questions Flagged"
            value={score?.flaggedQuestions}
            image="/images/FlaggedIcon.png"
          />
          <Option
            text="Correct Answers"
            value={score?.correctAnswers}
            image="/images/CorrectIcon.png"
          />
          <Option
            text="Wrong Answers"
            value={score?.wrongAnswers}
            image="/images/WrongIcon.png"
          />

          <button
            onClick={() => navigate(-1)}
            className="scoreview-btn"
          >
            <img src="/images/backarrowicon.png" alt="icon" />
            Back to Chapter Selection
          </button>
          <button
            onClick={onRetake}
            className="scoreview-btn"
          >
            <img src="/images/backarrowicon.png" alt="icon" />
            Retake Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreView;

const Option = ({ text, value, image = "" }) => {
  return (
    <div className="otp-card">
      <div className="otp-card-left">
        <div className="card-icon">
          <img src={image} alt="icon" />
        </div>
        <p className="card-text">{text}</p>
      </div>
      <p className="card-value">{value}</p>
    </div>
  );
};
