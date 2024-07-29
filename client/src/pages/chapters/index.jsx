import axios from "axios";
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getImageUrl } from "../../utils";
import { useLoading } from "../../hooks";
import { FaLock } from "react-icons/fa";

const Chapters = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [attempted, setAttempted] = useState([]);

  const filteredChapters = useMemo(() => {
    if (!searchQuery) {
      return data;
    }

    return data.filter((chapter) =>
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  useLayoutEffect(() => {
    getData();
    getAttemptedChapters();
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("chapter")
      .then((response) => {
        if (response.data.status) {
          setData(response.data.chapters);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAttemptedChapters = async () => {
    setLoading(true);
    await axios
      .get("cquiz/get")
      .then((response) => {
        if (response.data.status) {
          setAttempted(response?.data?.cQuiz);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleStart = async (chapter) => {
    if (chapter.name !== "Sample Questions") {
      return;
    }
    setLoading(true);
    await axios
      .post("cquiz/create", {
        chapter: chapter._id,
      })
      .then((response) => {
        if (response.data.status) {
          const { cQuiz } = response.data;
          navigate("/chapter/" + cQuiz._id);
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
      <p className="fs-4 mt-4 fw-bold navybluetext">Chapters</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <form className="d-flex mb-3" role="search">
              <div className="input-group">
                <span className="input-group-text">
                  <img
                    src="/images/SearchIcon.png"
                    className="smallericon mx-1"
                    alt="navigation"
                  />
                </span>
                <input
                  className="form-control px-2 py-2"
                  type="search"
                  placeholder="Search Chapter Name"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            <div className="row">
              {filteredChapters.map((chapter, idx) => {
                const isAttempted = attempted.find(
                  (cQuiz) => cQuiz.chapter === chapter._id
                );
                const isSampleQuestions = chapter.name === "Sample Questions";

                return (
                  <div className="col-sm-6 mb-3 d-flex" key={idx}>
                    <div
                      className={`card p-4 h-100 w-100 d-flex flex-column ${
                        !isSampleQuestions ? "grayed-out" : "mediumbluebg"
                      }`}
                      style={{
                        backgroundColor: !isSampleQuestions ? "#f0f0f0" : "#1d3354",
                        color: !isSampleQuestions ? "#a0a0a0" : "#ffffff",
                      }}
                    >
                      <div className="row flex-grow-1">
                        <div className="col-sm-3">
                          <img
                            src={getImageUrl(chapter.image)}
                            className="icon"
                            alt="icon"
                            style={{
                              borderRadius: "8px",
                              width: "100%",
                              height: "auto",
                              filter: !isSampleQuestions
                                ? "grayscale(100%)"
                                : "none",
                            }}
                          />
                        </div>
                        <div className="col-sm-9">
                          <p className="fs-5 fw-bold mb-1">
                            {chapter.name}
                            {!isSampleQuestions && <FaLock style={{ marginLeft: "10px" }} />}
                          </p>
                          <p className="fs-6 mb-3">
                            {isAttempted?.attemptedQuestions || 0} Questions
                            Attempted
                          </p>
                          <div className="mt-auto">
                            <button
                              onClick={() => handleStart(chapter)}
                              className="btn removeunderline boldtext fw-bold"
                              disabled={!isSampleQuestions}
                              style={{
                                backgroundColor: !isSampleQuestions ? "#d0d0d0" : "#ffffff",
                                color: !isSampleQuestions ? "#a0a0a0" : "#1d3354",
                                cursor: !isSampleQuestions ? "not-allowed" : "pointer",
                              }}
                            >
                              <div className="px-3 py-2">
                                {isAttempted ? "Resume" : "Start"} Chapter
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapters;
