import React from "react";
import "./QuizView.css";
import classnames from "classnames";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const QuizView = ({
  questions,
  currentQuestion,
  handleAnswerClick,
  selectedAnswer,
}) => {
  const { question, answers, Explanation } = questions[currentQuestion];

  return (
    <>
      {/* <div className="question">
        <div className="question-number">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">{question}</div>
      </div>

      <div className="answer">
        {answers.map(({ text, isCorrect }, index) => (
          <button
            key={text}
            onClick={() => handleAnswerClick(isCorrect)}
            className={classnames({
              'correct-answer': selectedAnswer !== null && isCorrect,
              'incorrect-answer': selectedAnswer !== null && !isCorrect,
            })}
            disabled={selectedAnswer !== null} // Disable button after clicking an answer
          >
            {text}
          </button>
        ))}
        {selectedAnswer !== null && (
          <div className="result">
            {selectedAnswer ? (
              <>
                <AiOutlineCheck className="correct-icon" />
                <span className="result-text">Correct!</span>
              </>
            ) : (
              <>
                <AiOutlineClose className="incorrect-icon" />
                <span className="result-text">Incorrect!</span>
              </>
            )}
            <div className="explanation">
              <span>{Explanation}</span>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default QuizView;
