import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FlaggedQuestions.css';
import { useAuth } from '../../hooks';

const FlaggedQuestions = () => {
  const { profile } = useAuth();
  const [flagged, setFlagged] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchFlaggedQuestions = async () => {
      try {
        const { data } = await axios.get('/flagged/flagged');
        if (data.status) {
          // Filter questions based on the logged-in user's username
          const userFlagged = data.questions.filter(q => q.userId.username === profile.username);
          setFlagged(userFlagged);

          const questionIds = userFlagged.map(q => q.questionId);
          const questionData = await axios.post('/chapter/questions/details', { ids: questionIds });
          setQuestions(questionData.data.questions);
        }
      } catch (error) {
        console.error('Error fetching flagged questions:', error);
      }
    };

    fetchFlaggedQuestions();
  }, [profile]);

  const handleDelete = async (id) => {
    try {
      await axios.post('/flagged/delete', { ids: [id] });
      setFlagged((prev) =>
        prev.filter((q) => q._id !== id)
      );
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const getQuestionText = (questionId) => {
    const question = questions.find(q => q._id === questionId);
    return question ? question.question : 'Loading...';
  };

  return (
    <div className="flagged-questions-container">
      <div className="flagged-questions-header">
        <p className="fs-4 mt-4 fw-bold navybluetext">Flagged Questions</p>
      </div>
      <div className="row mt-2">
        <div className="col-sm-4">
          <p><img src="images/FlagIcon.png" className="mediumicon" /><span className="fw-bold fs-5 mb-1 mx-3 redtext">Flagged</span></p>
        </div>
        <div className="col-sm-4 center"></div>
        <div className="col-sm-4">
          <button onClick={() => {}} className="navybluetext floatright flipbutton">
            <span className="fs-5 mx-3 questionshowingtext">Show Question</span>
            <img src="images/Dropdown.png" className="mediumicon showquestionicon" />
          </button>
        </div>
      </div>
      {flagged.map((q, index) => (
        <div className="flagged-question-card" key={q._id}>
          <div className="flagged-question-card-header">
            <h4 className="question-id">{index + 1}. Question: {getQuestionText(q.questionId)}</h4>
            <p className="chapter-weighting">Chapter Weighting: High</p>
          </div>
          <div className="flagged-question-card-body">
            <div className="row">
              <div className="col-sm-3">User: {q.userId.username}</div>
              <div className="col-sm-3">Reason: {q.reason}</div>
              <div className="col-sm-3">Timestamp: {new Date(q.timestamp).toLocaleString()}</div>
              <div className="col-sm-3">Count: {q.count || 1}</div>
            </div>
            <button className="btn btn-danger" onClick={() => handleDelete(q._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlaggedQuestions;
