import axios from "axios";
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getImageUrl } from "../../utils";
import { useLoading } from "../../hooks";

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
    if (chapter.name === "Law & Ethics") {
      // Do nothing for Law & Ethics chapter
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
                const isLawAndEthics = chapter.name === "Law & Ethics";

                return (
                  <div className="col-sm-6 mb-3 d-flex" key={idx}>
                    <div
                      className={`card p-4 mediumbluebg h-100 w-100 d-flex flex-column ${
                        isLawAndEthics ? "grayed-out" : ""
                      }`}
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
                            }}
                          />
                        </div>
                        <div className="col-sm-9">
                          <p className="fs-5 fw-bold whitetext mb-1">
                            {chapter.name}
                          </p>
                          <p className="fs-6 whitetext mb-3">
                            {isAttempted?.attemptedQuestions || 0} Questions
                            Attempted
                          </p>
                          <div className="mt-auto">
                            <button
                              onClick={() => handleStart(chapter)}
                              className="btn removeunderline boldtext navybluetext fw-bold"
                              disabled={isLawAndEthics}
                            >
                              <div className="px-3 py-2 whitebg pseudobutton">
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
