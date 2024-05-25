// components/FlaggedQuestions.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlaggedQuestions = () => {
  const [flagged, setFlagged] = useState([]);

  useEffect(() => {
    const fetchFlaggedQuestions = async () => {
      const { data } = await axios.get("/api/cquiz/flagged");
      if (data.status) {
        setFlagged(data.questions);
      }
    };

    fetchFlaggedQuestions();
  }, []);

  return (
    <div>
      <h2>Flagged Questions</h2>
      <ul>
        {flagged.map(q => (
          <li key={q._id}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlaggedQuestions;
