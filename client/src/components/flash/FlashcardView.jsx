// FlashcardView.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlashcardView.css';

const FlashcardView = ({ onRetake }) => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card p-4">
          <img
            src="/images/ResultsIcon.png"
            className="logo text-center"
            alt="Flashcards Logo"
          />
          <p className="text-header">Flashcard Session Completed</p>
          <p>Congratulations! You have reviewed all the flashcards.</p>
          <button
            onClick={() => navigate('/chapters')}
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
            Retake Flashcards
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardView;
