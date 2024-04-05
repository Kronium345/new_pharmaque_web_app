import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoading } from "../../hooks";
import { formattedDate, formattedTime, remaningTime } from "../events";
const HomePagee = () => {
  const navigate = useNavigate("");

  const [flash, setFlash] = useState({});
  const [chapter, setChapter] = useState({});
  const [event, setEvent] = useState({});
  const { setLoading } = useLoading();

  useEffect(() => {
    // get data from the local storage
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("/get-homepage")
      .then((res) => {
        setEvent(res.data.event);
        setChapter(res.data.cQuiz);
        console.log(res.data);
        setFlash(res.data.fQuiz);
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
      <p class="fs-4 mt-4 fw-bold navybluetext">HomePagee</p>
      <div class="row">
        <div class="col-sm-6">
          <div class="col-sm-12 mb-3">
            <div class="card p-4">
              <div class="row">
                <div class="col-sm-3">
                  <svg viewBox="0 0 250 250" class="circular-progress">
                    <circle class="bg"></circle>
                    <circle class="fg"></circle>
                  </svg>
                </div>
                <div class="col-sm-9">
                  <p class="h5 navybluetext fw-bold">Welcome back Aditya!</p>
                  <p class="greytext fs-5 mb-1">
                    There are <span class="fw-bold">3 tasks</span> for you to
                    complete today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 mb-3">
            <div class="card p-4">
              <div class="row">
                <p class="h5 navybluetext fw-bold mb-3">Today's Tasks</p>
              </div>
              <div class="row borderbottom">
                <div class="col-sm-1">
                  <img
                    src="/images/IncompleteTaskIcon.png"
                    class="smallicon"
                    alt="icon"
                  />
                </div>
                <div class="col-sm-11">
                  <p class="fs-5 navybluetext mb-2">Gastrointestinal System</p>
                  <a href="#" class="removeunderline navybluetext">
                    <p>
                      <img src="/images/ChaptersColour.png" class="smallicon" />
                      <span class="fs-6 fw-bold mx-2">
                        4/40 Questions Attempted
                      </span>
                    </p>
                  </a>
                </div>
              </div>
              <div class="row borderbottom mt-2">
                <div class="col-sm-1">
                  <img
                    src="/images/CompleteTaskIcon.png"
                    class="smallicon"
                    alt="icon"
                  />
                </div>
                <div class="col-sm-11">
                  <p class="fs-5 navybluetext mb-2 halveopacity">
                    Cardiovascular System
                  </p>
                  <p>
                    <img
                      src="/images/FlashcardsColour.png"
                      class="smallicon halveopacity"
                      alt="flashcard"
                    />
                    <span class="fs-6 fw-bold mx-2 halveopacity">
                      40/40 Flashcards Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div class="row borderbottom mt-2">
                <div class="col-sm-1">
                  <img src="/images/IncompleteTaskIcon.png" class="smallicon" />
                </div>
                <div class="col-sm-11">
                  <p class="fs-5 navybluetext mb-2">Central Nervous System</p>
                  <a href="#" class="removeunderline navybluetext">
                    <p>
                      <img
                        src="/images/FlashcardsColour.png"
                        class="smallicon"
                        alt="icon"
                      />
                      <span class="fs-6 fw-bold mx-2">
                        10/40 Flashcards Attempted
                      </span>
                    </p>
                  </a>
                </div>
              </div>
              <div class="row borderbottom mt-2">
                <div class="col-sm-1">
                  <img src="/images/CompleteTaskIcon.png" class="smallicon" />
                </div>
                <div class="col-sm-11">
                  <p class="fs-5 navybluetext mb-2 halveopacity">
                    Respiratory System
                  </p>
                  <p>
                    <img
                      src="/images/ChaptersColour.png"
                      class="smallicon halveopacity"
                    />
                    <span class="fs-6 fw-bold mx-2 halveopacity">
                      40/40 Questions Attempted
                    </span>
                  </p>
                </div>
              </div>
              <div class="row borderbottom mt-2">
                <div class="col-sm-1">
                  <img src="/images/IncompleteTaskIcon.png" class="smallicon" />
                </div>
                <div class="col-sm-11">
                  <p class="fs-5 navybluetext mb-2">Infections</p>
                  <a href="#" class="navybluetext removeunderline">
                    <p>
                      <img
                        src="/images/FlashcardsColour.png"
                        class="smallicon"
                      />
                      <span class="fs-6 fw-bold mx-2">
                        15/40 Flashcards Attempted
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 mb-3">
            <div class="card p-4">
              <div class="row">
                <div class="col-sm-9">
                  <p class="h5 navybluetext fw-bold mb-3">Flagged Questions</p>
                </div>
                <div class="col-sm-3">
                  <a href="#" class="removeunderline">
                    <p class="h5 navybluetext fw-bold">View All</p>
                  </a>
                </div>
              </div>
              <div class="row borderbottom mb-3">
                <div class="col-sm-12">
                  <p class="fs-5 navybluetext mb-2">
                    Musculoskeletal and Joint Disease
                  </p>
                  <a href="#" class="removeunderline navybluetext">
                    <p>
                      <img
                        src="/images/FlaggedQuestionsColour.png"
                        class="smallicon"
                      />
                      <span class="fs-6 mx-2">
                        A 73 year old man is experiencing an acute attack of
                        gout...
                      </span>
                    </p>
                  </a>
                </div>
              </div>
              <div class="row borderbottom">
                <div class="col-sm-12">
                  <p class="fs-5 navybluetext mb-2">Central Nervous System</p>
                  <a href="#" class="removeunderline navybluetext">
                    <p>
                      <img
                        src="/images/FlaggedQuestionsColour.png"
                        class="smallicon"
                      />
                      <span class="fs-6 mx-2">
                        Mr Parker, a 46 year old male has recently been
                        prescribed...
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3">
          <div class="col-sm-12 mb-3">
            <div class="card p-4">
              <div class="row">
                <div class="col-sm-3">
                  <img src="/images/InsightIcon.png" class="icon" />
                </div>
                <div class="col-sm-9">
                  <p class="h5 navybluetext fw-bold">User Insights</p>
                  <p class="greytext fs-5 mb-1">
                    Your screen time has increased by a whopping{" "}
                    <span class="fw-bold">12%</span> much like a pharmacy's
                    stock of candy during flu season!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {event?._id && (
            <div class="card p-4 mb-3">
              <p class="h5 navybluetext fw-bold">Upcoming Events</p>
              <div class="row justify-content-between align-items-center">
                <div class="col-sm-9">
                  <p class="greytext fs-5 mb-1">{event.name}</p>
                  <p class="greytext fs-6 mb-1">{event.topic}</p>
                  <p class="fs-6 navybluetext fw-bold mb-1">
                    {formattedDate(event.formattedDate)} -{" "}
                    {formattedTime(event.formattedTime)}
                  </p>
                </div>
                <div class="col-sm-3 center">
                  <div class="mt-3 navybluebg px-2 py-2 borderradius">
                    {remaningTime(event.formattedDate) > 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">
                        {remaningTime(event.formattedDate)}
                      </p>
                    )}

                    {remaningTime(event.formattedDate) === 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">Today</p>
                    )}
                    {remaningTime(event.formattedDate) < 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">Expired</p>
                    )}

                    {remaningTime(event.formattedDate) > 0 && (
                      <p class="fs-4 whitetext mt-1">day to go</p>
                    )}
                    {remaningTime(event.formattedDate) === 0 && (
                      <p class="fs-4 whitetext mt-1">
                        {formattedTime(event.formattedDate)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {chapter && chapter.name && (
            <div class="card p-4 navybluebg mb-3">
              <div class="row">
                <div class="col-sm-9">
                  <p class="h5 navybluetext fw-bold whitetext">Chapters</p>
                  <p class="greytext fs-5 mb-1 whitetext">{chapter.name}</p>
                  <br />
                  <a href="#" class="removeunderline">
                    <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                      <img src="/images/ChaptersWhite.png" class="smallicon" />
                      {chapter.chapterScore ? (
                        <span class="mx-3">
                          {chapter.chapterScore + " Questions Attempted"}
                        </span>
                      ) : (
                        <span class="mx-3">Has not been attempted</span>
                      )}
                    </p>
                  </a>
                </div>
                <div class="col-sm-3 center">
                  <a href="#" class="removeunderline">
                    <p class="h5 navybluetext fw-bold whitetext">View All</p>
                  </a>
                </div>
              </div>
            </div>
          )}

          {flash && flash._id && (
            <div class="card p-4 navybluebg mb-3">
              <div class="row">
                <div class="col-sm-9">
                  <p class="h5 navybluetext fw-bold whitetext">Flashcards</p>
                  <p class="greytext fs-5 mb-1 whitetext">{flash.flash.name}</p>
                  <br />
                  <a href="#" class="removeunderline">
                    <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                      <img
                        src="/images/FlashcardsWhite.png"
                        class="smallicon"
                      />
                      <span class="mx-3">
                        {flash.attemptedQuestions} Questions Attempted
                      </span>
                    </p>
                  </a>
                </div>
                <div class="col-sm-3 center">
                  <a href="#" class="removeunderline">
                    <p class="h5 navybluetext fw-bold whitetext">View All</p>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div class="card p-4 navybluebg mb-3">
            <div class="row mb-3">
              <div class="col-sm-9">
                <p class="h5 navybluetext fw-bold whitetext">Past Chapters</p>
                <p class="greytext fs-5 mb-1 whitetext">
                  {chapter?.chapter?.name}
                </p>
              </div>
              <div class="col-sm-3 center">
                <a href="#" class="removeunderline">
                  <p class="h5 navybluetext fw-bold whitetext">View All</p>
                </a>
              </div>
            </div>
            <div class="col-sm-12">
              <p class="fs-6 navybluetext fw-bold mb-1 whitetext">
                <img src="/images/Correct.png" class="smallicon" />
                <span class="mx-3">
                  {chapter?.correctAnswers}/{" "}
                  {chapter?.chapter?.questions?.length} Correct
                </span>

                <img src="/images/Wrong.png" class="smallicon" />
                <span class="mx-3">
                  {chapter?.wrongAnswers}/ {chapter?.chapter?.questions?.length}{" "}
                  Wrong
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
