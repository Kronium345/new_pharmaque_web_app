import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoading } from "../../hooks";
import { formattedDate, formattedTime, remaningTime } from "../events";
import { useScreenTime } from "../../components/ScreenTime/ScreenTimeContext";

const HomePagee = () => {
  const navigate = useNavigate("");
  const [username, setUsername] = useState(""); // Add state for username
  const [flash, setFlash] = useState({});
  const [chapter, setChapter] = useState({});
  const [event, setEvent] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const { setLoading } = useLoading();
  const { screenTime } = useScreenTime();

  // Screen time code
  const hours = Math.floor(screenTime / 3600000);
  const minutes = Math.floor((screenTime % 3600000) / 60000);
  const seconds = ((screenTime % 60000) / 1000).toFixed(0);

  const [lastScreenTime, setLastScreenTime] = useState(null);
  const [screenTimeDifference, setScreenTimeDifference] = useState(null);
  const [examCountdown, setExamCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    getData();
    getProfile(); // Fetch the profile to get the username
    fetchFlaggedQuestions(); // Fetch flagged questions

    const lastTime = localStorage.getItem('lastScreenTime');
    if (lastTime !== null) {
      const lastTimeInt = parseInt(lastTime, 10);
      setLastScreenTime(lastTimeInt);
      const timeDifference = screenTime - lastTimeInt;
      setScreenTimeDifference(timeDifference);
    }

    const examDate = localStorage.getItem('examDate');
    if (examDate) {
      startCountdown(new Date(examDate));
    }
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("/get-homepage")
      .then((res) => {
        setEvent(res.data.event);
        setChapter(res.data.cQuiz);
        setFlash(res.data.fQuiz);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getProfile = async () => {
    await axios
      .get("/auth/get-profile")
      .then((res) => {
        setUsername(res.data.user.username); // Set the username from the profile data
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchFlaggedQuestions = async () => {
    try {
      const { data } = await axios.get('/flagged/flagged');
      if (data.status) {
        setFlaggedQuestions(data.questions);

        const questionIds = data.questions.map(q => q.questionId);
        const questionData = await axios.post('/chapter/questions/details', { ids: questionIds });
        setQuestions(questionData.data.questions);
      }
    } catch (error) {
      console.error('Error fetching flagged questions:', error);
    }
  };

  const getQuestionText = (questionId) => {
    const question = questions.find(q => q._id === questionId);
    return question ? question.question : 'Loading...';
  };

  const mostRecentFlaggedQuestion = flaggedQuestions.length > 0 ? flaggedQuestions[0] : null;

  const formatScreenTime = (time) => {
    const hrs = Math.floor(time / 3600000);
    const mins = Math.floor((time % 3600000) / 60000);
    const secs = Math.floor((time % 60000) / 1000);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const startCountdown = (examDate) => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = examDate.getTime() - now;

      if (distance < 0) {
        clearInterval(countdown);
        setExamCountdown({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setExamCountdown({ hours, minutes, seconds });
    }, 1000);
  };

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">HomePage</p>
      <div className="row">
        <div className="col-sm-6">
          <div className="col-sm-12 mb-3">
            <div className="card p-4">
              <div className="row">
                <div className="col-sm-9">
                  <p className="h5 navybluetext fw-bold">Welcome back {username}!</p>
                  <p className="greytext fs-5 mb-1">
                    There are <span className="fw-bold">0 tasks</span> for you to
                    complete today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 mb-3 halveopacity">
            <div className="card p-4">
              <div className="row">
                <p className="h5 navybluetext fw-bold mb-3 halveopacity">Today's Tasks</p>
              </div>
              <div className="row borderbottom">
                <div className="col-sm-1">
                  <img
                    src="/images/IncompleteTaskIcon.png"
                    className="smallicon"
                    alt="icon"
                  />
                </div>
                <div className="col-sm-11">
                  <p className="fs-5 navybluetext mb-2 halveopacity">Gastrointestinal System</p>
                  <p>
                    <img src="/images/ChaptersColour.png" className="smallicon" />
                    <span className="fs-6 fw-bold mx-2 halveopacity">
                      0/40 Questions Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div className="row borderbottom mt-2">
                <div className="col-sm-1">
                  <img
                    src="/images/CompleteTaskIcon.png"
                    className="smallicon"
                    alt="icon"
                  />
                </div>
                <div className="col-sm-11">
                  <p className="fs-5 navybluetext mb-2 halveopacity">
                    Cardiovascular System
                  </p>
                  <p>
                    <img
                      src="/images/FlashcardsColour.png"
                      className="smallicon halveopacity"
                      alt="flashcard"
                    />
                    <span className="fs-6 fw-bold mx-2 halveopacity">
                      0/40 Flashcards Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div className="row borderbottom mt-2">
                <div className="col-sm-1">
                  <img src="/images/IncompleteTaskIcon.png" className="smallicon" />
                </div>
                <div className="col-sm-11">
                  <p className="fs-5 navybluetext mb-2 halveopacity">Central Nervous System</p>
                  <p>
                    <img
                      src="/images/FlashcardsColour.png"
                      className="smallicon"
                      alt="icon"
                    />
                    <span className="fs-6 fw-bold mx-2 halveopacity">
                      0/40 Flashcards Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div className="row borderbottom mt-2">
                <div className="col-sm-1">
                  <img src="/images/CompleteTaskIcon.png" className="smallicon" />
                </div>
                <div className="col-sm-11">
                  <p className="fs-5 navybluetext mb-2 halveopacity">
                    Respiratory System
                  </p>
                  <p>
                    <img
                      src="/images/ChaptersColour.png"
                      className="smallicon halveopacity"
                    />
                    <span className="fs-6 fw-bold mx-2 halveopacity">
                      0/40 Questions Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div className="row borderbottom mt-2">
                <div className="col-sm-1">
                  <img src="/images/IncompleteTaskIcon.png" className="smallicon" />
                </div>
                <div className="col-sm-11">
                  <p className="fs-5 navybluetext mb-2 halveopacity">Infections</p>
                  <p>
                    <img
                      src="/images/FlashcardsColour.png"
                      className="smallicon"
                    />
                    <span className="fs-6 fw-bold mx-2 halveopacity">
                      0/40 Flashcards Attempted
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 mb-3">
            <div className="card p-4">
              <div className="row">
                <div className="col-sm-9">
                  <p className="h5 navybluetext fw-bold mb-3">Flagged Questions</p>
                </div>
                <div className="col-sm-3">
                  <Link to="/flaggedquestions" className="removeunderline">
                    <p className="h5 navybluetext fw-bold">View All</p>
                  </Link>
                </div>
              </div>
              {mostRecentFlaggedQuestion && (
                <>
                  <div className="row borderbottom mb-3">
                    <div className="col-sm-12">
                      <h4 className="question-id">
                        1. Question: {getQuestionText(mostRecentFlaggedQuestion.questionId)}
                      </h4>
                      <p className="chapter-weighting">Chapter Weighting: High</p>
                    </div>
                  </div>
                  <div className="row borderbottom">
                    <div className="col-sm-3">User: {mostRecentFlaggedQuestion.userId.username}</div>
                    <div className="col-sm-3">Reason: {mostRecentFlaggedQuestion.reason}</div>
                    <div className="col-sm-3">Timestamp: {new Date(mostRecentFlaggedQuestion.timestamp).toLocaleString()}</div>
                    <div className="col-sm-3">Count: {mostRecentFlaggedQuestion.count || 1}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="col-sm-12 mb-3">
            <div className="card p-4">
              <div className="row">
                <div className="col-sm-3">
                  <img src="/images/InsightIcon.png" className="icon" />
                </div>
                <div className="col-sm-9">
                  <p className="h5 navybluetext fw-bold">User Insights</p>
                  <p className="greytext fs-5 mb-1">
                    So far, you have completed: 
                    <span className="fw-bold"> {chapter?.correctAnswers + chapter?.wrongAnswers}/{chapter?.chapter?.questions?.length} Questions</span>
                  </p>
                  <p className="greytext fs-5 mb-1"> 
                    in: 
                    <span className="fw-bold"> {chapter?.chapter?.name}</span>
                  </p>
                  {lastScreenTime !== null && (
                    <p className="greytext fs-5 mb-1">
                      Countdown until your exam is: 
                      <span className="fw-bold"> {`${examCountdown.hours}h ${examCountdown.minutes}m ${examCountdown.seconds}s`}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {event?._id && (
            <div className="card p-4 mb-3">
              <p className="h5 navybluetext fw-bold">Upcoming Events</p>
              <div className="row justify-content-between align-items-center">
                <div className="col-sm-9">
                  <p className="greytext fs-5 mb-1">{event.name}</p>
                  <p className="greytext fs-6 mb-1">{event.topic}</p>
                  <p className="fs-6 navybluetext fw-bold mb-1">
                    {formattedDate(event.formattedDate)} -{" "}
                    {formattedTime(event.formattedTime)}
                  </p>
                </div>
                <div className="col-sm-3 center">
                  <div className="mt-3 navybluebg px-2 py-2 borderradius">
                    {remaningTime(event.formattedDate) > 0 && (
                      <p className="fs-3 fw-bold whitetext mb-1">
                        {remaningTime(event.formattedDate)}
                      </p>
                    )}
                    {remaningTime(event.formattedDate) === 0 && (
                      <p className="fs-3 fw-bold whitetext mb-1">Today</p>
                    )}
                    {remaningTime(event.formattedDate) < 0 && (
                      <p className="fs-3 fw-bold whitetext mb-1">Expired</p>
                    )}
                    {remaningTime(event.formattedDate) > 0 && (
                      <p className="fs-4 whitetext mt-1">day to go</p>
                    )}
                    {remaningTime(event.formattedDate) === 0 && (
                      <p className="fs-4 whitetext mt-1">
                        {formattedTime(event.formattedDate)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {chapter && chapter.name && (
            <div className="card p-4 navybluebg mb-3">
              <div className="row">
                <div className="col-sm-9">
                  <p className="h5 navybluetext fw-bold whitetext">Chapters</p>
                  <p className="greytext fs-5 mb-1 whitetext">{chapter.name}</p>
                  <br />
                  <a href="#" className="removeunderline">
                    <p className="fs-6 navybluetext fw-bold mb-1 whitetext">
                      <img src="/images/ChaptersWhite.png" className="smallicon" />
                      {chapter.chapterScore ? (
                        <span className="mx-3">
                          {chapter.chapterScore + " Questions Attempted"}
                        </span>
                      ) : (
                        <span className="mx-3">Has not been attempted</span>
                      )}
                    </p>
                  </a>
                </div>
                <div className="col-sm-3 center">
                  <a href="#" className="removeunderline">
                    <p className="h5 navybluetext fw-bold whitetext">View All</p>
                  </a>
                </div>
              </div>
            </div>
          )}
          {flash && flash._id && (
            <div className="card p-4 navybluebg mb-3">
              <div className="row">
                <div className="col-sm-9">
                  <p className="h5 navybluetext fw-bold whitetext">Flashcards</p>
                  <p className="greytext fs-5 mb-1 whitetext">{flash.flash.name}</p>
                  <br />
                  <a href="#" className="removeunderline">
                    <p className="fs-6 navybluetext fw-bold mb-1 whitetext">
                      <img
                        src="/images/FlashcardsWhite.png"
                        className="smallicon"
                      />
                      <span className="mx-3">
                        {flash.attemptedQuestions} Questions Attempted
                      </span>
                    </p>
                  </a>
                </div>
                <div className="col-sm-3 center">
                  <Link to="/pastchapters" className="removeunderline">
                    <p className="h5 navybluetext fw-bold whitetext">View All</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="card p-4 navybluebg mb-3">
            <div className="row mb-3">
              <div className="col-sm-9">
                <p className="h5 navybluetext fw-bold whitetext">Past Chapters</p>
                <p className="greytext fs-5 mb-1 whitetext">
                  {chapter?.chapter?.name}
                </p>
              </div>
              <div className="col-sm-3 center">
                <Link to="/pastchapters" className="removeunderline">
                  <p className="h5 navybluetext fw-bold whitetext">View All</p>
                </Link>
              </div>
            </div>
            <div className="col-sm-12">
              <p className="fs-6 navybluetext fw-bold mb-1 whitetext">
                <img src="/images/Correct.png" className="smallicon" />
                <span className="mx-3">
                  {chapter?.correctAnswers + chapter?.wrongAnswers}/{chapter?.chapter?.questions?.length} Questions Attempted
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagee;
