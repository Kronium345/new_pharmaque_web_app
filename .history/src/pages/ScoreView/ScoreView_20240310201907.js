import React from "react";
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
          <div class="card p-4"></div>
        </div>
      </div>
    </>
  );
};

export default ScoreView;
