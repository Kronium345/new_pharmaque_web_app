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
    <div>
      <h2>Flagged Questions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Question ID</th>
            <th>User ID</th>
            <th>Reason</th>
            <th>Timestamp</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {flagged.map(q => (
            <tr key={q._id}>
              <td>{q.questionId}</td>
              <td>{q.userId}</td>
              <td>{q.reason}</td>
              <td>{new Date(q.timestamp).toLocaleString()}</td>
              <td>{q.count || 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlaggedQuestions;
