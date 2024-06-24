import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoading } from "../../hooks";

const PastChapters = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [chapter, setChapter] = useState({});
  const [flash, setFlash] = useState({});
  const [event, setEvent] = useState({});
  const { setLoading } = useLoading();

  useEffect(() => {
    getData();
    getProfile();
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
        setUsername(res.data.user.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">Past Chapters</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            {/* <form className="d-flex mb-3" role="search">
              <div className="input-group">
                <span className="input-group-text">
                  <img
                    src="/images/SearchIcon.png"
                    className="smallericon mx-1"
                    alt="search"
                  />
                </span>
                <input
                  className="form-control px-2 py-2"
                  type="search"
                  placeholder="Search Chapter Name"
                  aria-label="Search"
                />
              </div>
            </form> */}
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
                  <Link to="/flashcards" className="removeunderline">
                    <p className="h5 navybluetext fw-bold whitetext">View All</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

            <div className="row">
              <div className="col-sm-12 mb-3">
                <div className="card p-4 navybluebg mb-3">
                  <div className="row mb-3">
                    <div className="col-sm-9">
                      <p className="h5 navybluetext fw-bold whitetext">
                        {chapter?.chapter?.name}
                      </p>
                    </div>
                    <div className="col-sm-3 center">
                      <Link to="/chapters" className="removeunderline">
                        <p className="h5 navybluetext fw-bold whitetext">
                          Retake Chapter
                        </p>
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
              {(!chapter || !chapter.chapter) && (
                <div className="col-sm-12">
                  <p className="fs-5 navybluetext mb-2">No past chapters found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastChapters;
