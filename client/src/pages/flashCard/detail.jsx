import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FlashcardView from "../../components/flash/FlashcardView";
import QuizView from "../../components/flash/quizView";
import { useLoading } from "../../hooks";
import axios from "axios";

const FlashCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [flash, setFlash] = useState({});
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswerClick = async (answer) => {
    setLoading(true);
    await axios
      .patch("fquiz/solve", {
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
      .patch("fquiz/flag", {
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
      .patch("fquiz/report", {
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

  const handleSkip = async (newIndex = currentQuestion + 1) => {
    setLoading(true);
    await axios
      .patch("fquiz/skip", {
        _id: quiz._id,
      })
      .then((response) => {
        if (response.data.status) {
          setCurrentQuestion(newIndex);
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

  const handleRetake = () => {
    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  useEffect(() => {
    getQuizInfo();
  }, []);

  const getQuizInfo = async () => {
    setLoading(true);
    await axios
      .get("fquiz/get/" + id)
      .then((response) => {
        if (response.data.status) {
          const { fQuiz } = response.data;

          if (fQuiz.attemptedQuestions === fQuiz.flash.questions.length) {
            setIsQuizOver(true);
          }

          setQuiz(fQuiz);
          setFlash(fQuiz.flash);
          setQuestions(fQuiz.flash.questions);
          setCurrentQuestion(fQuiz.attemptedQuestions);
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
      {!isQuizOver && (
        <div className="row">
          <div className="col-sm-7">
            <p className="fs-4 mt-4 fw-bold navybluetext">
              Chapter: {flash.name}
            </p>
          </div>
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
        </div>
      )}
      <div className="App">
        {isQuizOver ? (
          <FlashcardView onRetake={handleRetake} />
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
            />
          )
        )}
      </div>
    </>
  );
};

export default FlashCardDetail;
