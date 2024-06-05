import { useNavigate, Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ScoreView from "../../components/chapters/scoreView";
import QuizView from "../../components/chapters/quizView";
import { useLoading } from "../../hooks";
import axios from "axios";

const ChapterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [chapter, setChapter] = useState({});
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswerClick = async (answer) => {
    setLoading(true);
    await axios
      .patch("cquiz/solve", {
        _id: quiz._id,
        selectedAnswer: answer,
      })
      .then((response) => {
        if (response.data.status) {
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setIsQuizOver(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFlagged = async () => {
    setLoading(true);
    await axios
      .patch("cquiz/flag", {
        _id: quiz._id,
      })
      .then((response) => {
        if (response.data.status) {
          setCurrentQuestion((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReport = async () => {
    setLoading(true);
    await axios
      .patch("cquiz/report", {
        _id: quiz._id,
      })
      .then((response) => {
        if (response.data.status) {
          setCurrentQuestion((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSkip = async () => {
    setLoading(true);
    await axios
      .patch("cquiz/skip", {
        _id: quiz._id,
      })
      .then((response) => {
        if (response.data.status) {
          setCurrentQuestion((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBack = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    getQuizInfo();
  }, []);

  const getQuizInfo = async () => {
    setLoading(true);
    await axios
      .get("cquiz/get/" + id)
      .then((response) => {
        if (response.data.status) {
          const { cQuiz } = response.data;

          if (cQuiz.attemptedQuestions === cQuiz.chapter.questions.length) {
            setIsQuizOver(true);
          }

          setQuiz(cQuiz);
          setChapter(cQuiz.chapter);
          setQuestions(cQuiz.chapter.questions);
          setCurrentQuestion(cQuiz.attemptedQuestions);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="row">
        {!isQuizOver && (
          <div className="col-sm-7">
            <p className="fs-4 mt-4 fw-bold navybluetext">
              Chapter: {chapter.name}
            </p>
          </div>
        )}
        {!isQuizOver && (
          <div className="col-sm-5">
            <button
              type="button"
              className="btn btn-primary back fw-bold fs-5 mt-4 floatright mb-4"
              onClick={() => navigate(-1)}
            >
              <img
                src="/images/Back.png"
                className="tinyicon mx-3"
                alt="icon"
              />
              Back To Chapter Selection
            </button>
          </div>
        )}
      </div>
      <div className="App">
        {isQuizOver ? (
          <ScoreView questions={questions} score={quiz} />
        ) : (
          questions.length !== 0 && (
            <QuizView
              questions={questions}
              currentQuestion={currentQuestion}
              handleAnswerClick={handleAnswerClick}
              handleFlagged={handleFlagged}
              handleReport={handleReport}
              handleSkip={handleSkip}
              handleBack={handleBack}
              quiz={quiz}
            />
          )
        )}
      </div>
    </>
  );
};

export default ChapterDetail;
