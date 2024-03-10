import React from "react";
import "./ScoreView.css";
import classnames from "classnames";

const ScoreView = ({ handleResetClick, score, questions }) => {
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card p-4">
          <img
            src="/images/ResultsIcon.png"
            class="logo text-center"
            alt="PharmaQue Logo"
          />
          <p class="text-header">Chapter Results</p>
          <p>Congtratulations! You have completed the chapter.</p>
          <Option
            text="Socre Gained"
            value={"80/100"}
            image="/images/ScoreIcon.png"
          />
          <Option
            text="Questions Flagged"
            value={"40"}
            image="/images/FlaggedIcon.png"
          />
          <Option
            text="Corret Answers"
            value={"80"}
            image="/images/CorrectIcon.png"
          />
          <Option
            text="Wrong Answers"
            value={"20"}
            image="/images/WrongIcon.png"
          />

          <button class="scoreview-btn">
            <img src="/images/backarrowicon.png" alt="icon" className="icon" />
            Back to Chapter Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreView;

const Option = ({ text, value, image = "" }) => {
  return (
    <div class="otp-card">
      <div class="otp-card-left">
        <div class="card-icon">
          <img src={image} alt="icon" />
        </div>
        <p class="card-text">{text}</p>
      </div>
      <p class="card-value">{value}</p>
    </div>
  );
};
