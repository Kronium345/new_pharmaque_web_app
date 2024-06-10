import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QueryResponses.css';

const QueryResponses = () => {
  const navigate = useNavigate();
  const [reportedQuestions, setReportedQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportContent, setReportContent] = useState('');
  const [selectedQuestionForReport, setSelectedQuestionForReport] = useState(null);

  useEffect(() => {
    const fetchReportedQuestions = async () => {
      try {
        const { data } = await axios.get('/reported/reported');
        if (data.status) {
          setReportedQuestions(data.questions);
        }
      } catch (error) {
        console.error('Error fetching reported questions:', error);
      }
    };

    fetchReportedQuestions();
  }, []);

  const handleCheckboxChange = (questionId) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(questionId)
        ? prevSelected.filter((id) => id !== questionId)
        : [...prevSelected, questionId]
    );
  };

  const handleDelete = async () => {
    try {
      await axios.post('/reported/delete', { ids: selectedQuestions });
      setReportedQuestions((prev) =>
        prev.filter((q) => !selectedQuestions.includes(q._id))
      );
      setSelectedQuestions([]);
    } catch (error) {
      console.error('Error deleting questions:', error);
    }
  };

  const handleMarkAsRead = async () => {
    try {
      await axios.post('/reported/mark-as-read', { ids: selectedQuestions });
      setReportedQuestions((prev) =>
        prev.map((q) => (selectedQuestions.includes(q._id) ? { ...q, status: 'read' } : q))
      );
      setSelectedQuestions([]);
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleMarkAsUnread = async () => {
    try {
      await axios.post('/reported/mark-as-unread', { ids: selectedQuestions });
      setReportedQuestions((prev) =>
        prev.map((q) => (selectedQuestions.includes(q._id) ? { ...q, status: 'unread' } : q))
      );
      setSelectedQuestions([]);
    } catch (error) {
      console.error('Error marking as unread:', error);
    }
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage * questionsPerPage < reportedQuestions.length) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = reportedQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const openReportForm = (question) => {
    setSelectedQuestionForReport(question);
    setShowReportForm(true);
  };
  const closeReportForm = () => setShowReportForm(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/send-email', { content: reportContent });
      closeReportForm();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleSelectAllChange = () => {
    if (selectedQuestions.length === currentQuestions.length) {
      setSelectedQuestions([]);
    } else {
      setSelectedQuestions(currentQuestions.map((q) => q._id));
    }
  };

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">Query Responses</p>

      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <div className="row p-0 mx-0 mt-0 mb-3">
              <div className="col-sm-1">
                <p className="floatleft">
                  <input
                    className="form-check-input fs-5"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onChange={handleSelectAllChange}
                    checked={selectedQuestions.length === currentQuestions.length}
                  />
                </p>
              </div>
              <div className="col-sm-2">
                <button
                  className="fs-5 fw-bold navybluetext halfopacity addeventbutton"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <div className="col-sm-2">
                <button
                  className="fs-5 fw-bold navybluetext halfopacity addeventbutton"
                  onClick={handleMarkAsRead}
                >
                  Mark as Read
                </button>
              </div>
              <div className="col-sm-2">
                <button
                  className="fs-5 fw-bold navybluetext halfopacity addeventbutton"
                  onClick={handleMarkAsUnread}
                >
                  Mark as Unread
                </button>
              </div>
              <div className="col-sm-3">
                <p className="fs-5 fw-bold navybluetext">
                  {currentPage} - {Math.ceil(reportedQuestions.length / questionsPerPage)}
                </p>
              </div>
              <div className="col-sm-1">
                <button className="addeventbutton" onClick={() => handlePageChange('prev')}>
                  <img src="/images/Previous.png" className="tinyicon halfopacity" alt="button" />
                </button>
              </div>
              <div className="col-sm-1">
                <button className="addeventbutton" onClick={() => handlePageChange('next')}>
                  <img src="/images/Next.png" className="tinyicon halfopacity" alt="button" />
                </button>
              </div>
            </div>

            {currentQuestions.map((q, index) => (
              <div
                className={`row px-0 pt-3 pb-2 m-0 fullborder ${q.status === 'read' ? 'read' : 'unread'}`}
                key={index}
              >
                <div className="col-sm-1">
                  <p className="floatleft">
                    <input
                      className="form-check-input fs-5"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onChange={() => handleCheckboxChange(q._id)}
                      checked={selectedQuestions.includes(q._id)}
                    />
                  </p>
                </div>
                <div className="col-sm-3">
                  <p className="fs-5 fw-bold mediumbluetext mb-1">{q.userId.username}</p>
                </div>
                <div className="col-sm-5">
                  <p className="fs-5 fw-bold mediumbluetext mb-1">Re: {q.reason}</p>
                  <p className="fs-5 fw-bold mediumbluetext mb-1">Question: {q.questionDetail}</p>
                </div>
                <div className="col-sm-2">
                  <p className="fs-5 fw-bold mediumbluetext mb-1">
                    {new Date(q.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="col-sm-1">
                  <button className="btn btn-primary" onClick={() => openReportForm(q)}>
                    Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showReportForm && (
        <div className="report-form">
          <div className="form-container">
            <h2 className="title">Report Question</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Content:</label>
                <textarea
                  value={reportContent}
                  onChange={(e) => setReportContent(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Report
              </button>
              <button type="button" className="btn btn-secondary" onClick={closeReportForm}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryResponses;
