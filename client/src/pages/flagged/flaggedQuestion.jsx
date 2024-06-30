// FlaggedQuestions.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlaggedQuestions = () => {
  const [flagged, setFlagged] = useState([]);

  useEffect(() => {
    const fetchFlaggedQuestions = async () => {
      try {
        const { data } = await axios.get("/flagged/flagged");
        if (data.status) {
          setFlagged(data.questions);
        }
      } catch (error) {
        console.error('Error fetching flagged questions:', error);
      }
    };

    fetchFlaggedQuestions();
  }, []);

  return (
    <div className="flagged-questions-container">
      <div className="header">
        <h2>Flagged Questions</h2>
      </div>
      {flagged.map((q, index) => (
        <div className="card" key={index}>
          <div className="questionholder hide">
            <h4>Question ID: {q.questionId}</h4>
            <p className="chapter-weighting">Chapter Weighting: High</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">User: {q.userId.username}</div>
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
