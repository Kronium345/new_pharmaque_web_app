import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FlaggedQuestions.css';

const FlaggedQuestions = () => {
  const [flagged, setFlagged] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchFlaggedQuestions = async () => {
      try {
        const { data } = await axios.get('/flagged/flagged');
        if (data.status) {
          setFlagged(data.questions);

          const questionIds = data.questions.map(q => q.questionId);
          const questionData = await axios.post('/chapter/questions/details', { ids: questionIds });
          setQuestions(questionData.data.questions);
        }
      } catch (error) {
        console.error('Error fetching flagged questions:', error);
      }
    };

    fetchFlaggedQuestions();
  }, []);

  const getQuestionText = (questionId) => {
    const question = questions.find(q => q._id === questionId);
    return question ? question.question : 'Loading...';
  };

  return (
    <div className="flagged-questions-container">
      <div className="flagged-questions-header">
        <h2>Flagged Questions</h2>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlaggedQuestions;
