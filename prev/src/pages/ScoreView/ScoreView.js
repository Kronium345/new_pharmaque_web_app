import React from "react"
import "./ScoreView.css"
import classnames from "classnames"
import { Link } from "react-router-dom"

const ScoreView = ({ flagged = 0, score = 0, questions = [] }) => {
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
          <p>Congratulations! You have completed the chapter.</p>
          <Option
            text="Socre Gained"
            value={score + "/" + questions.length}
            image="/images/ScoreIcon.png"
          />
          <Option
            text="Questions Flagged"
            value={flagged}
            image="/images/FlaggedIcon.png"
          />
          <Option
            text="Correct Answers"
            value={score}
            image="/images/CorrectIcon.png"
          />
          <Option
            text="Wrong Answers"
            value={questions.length - score - flagged}
            image="/images/WrongIcon.png"
          />

          <Link to="/chapters" class="scoreview-btn">
            <img src="/images/backarrowicon.png" alt="icon" />
            Back to Chapter Selection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ScoreView

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
  )
}
