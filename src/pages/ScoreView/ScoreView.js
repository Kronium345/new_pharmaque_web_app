import React from 'react';
// import './ScoreView.css';
import classnames from 'classnames';

const ScoreView = ({ handleResetClick, score, questions }) => {
  return (
    <div>
      <p>You scored {score} out of {questions.length}</p>
      <div className="result-list">
        {questions.map(({ answers, Explanation }, index) => (
          <div
            key={index}
            className={classnames({
              'correct-answer': answers && answers.some((answer) => answer.isCorrect),
              'incorrect-answer': answers && answers.every((answer) => !answer.isCorrect),
            })}
          >
            {index + 1}.{' '}
            {answers && answers.some((answer) => answer.isCorrect) ? (
              <>
                <span className="result-text correct-text">Correct Answer</span>
              </>
            ) : (
              <>
                <span className="result-text incorrect-text">Incorrect</span>
              </>
            )}
            {Explanation && (
              <div className="explanation">
                <span>{Explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreView;
