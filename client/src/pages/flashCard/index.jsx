import axios from "axios";
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getImageUrl } from "../../utils";
import { useLoading } from "../../hooks";

const FlashCards = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [attempted, setAttempted] = useState([]);

  const filteredChapters = useMemo(() => {
    if (!searchQuery) {
      return data;
    }

    return data.filter((flash) =>
      flash.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  useLayoutEffect(() => {
    getData();
    getAttemptedChapters();
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("flash")
      .then((response) => {
        if (response.data.status) {
          setData(response.data.flashCards);
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
      .get("fquiz/get")
      .then((response) => {
        if (response.data.status) {
          setAttempted(response?.data?.fQuiz);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleStart = async (flash) => {
    setLoading(true);
    await axios
      .post("fquiz/create", {
        flash: flash._id,
      })
      .then((response) => {
        if (response.data.status) {
          const { fQuiz } = response.data;
          console.log(fQuiz);
          navigate("/flashcard/" + fQuiz._id);
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
      <p className="fs-4 mt-4 fw-bold navybluetext">Flashcards</p>
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
                  placeholder="Search Flashcard Name"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            <div className="row">
              {filteredChapters.map((flash, idx) => {
                const isAttempted = attempted.find(
                  (cQuiz) => cQuiz.flash === flash._id
                );

                return (
                  <div className="col-sm-6 mb-3 d-flex" key={idx}>
                    <div
                      className={`card p-4 mediumbluebg h-100 w-100 d-flex flex-column`}
                    >
                      <div className="row flex-grow-1">
                        <div className="col-sm-3">
                          <img
                            src={getImageUrl(flash.image)}
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
                            {flash.name}
                          </p>
                          <p className="fs-6 whitetext mb-3">
                            {isAttempted?.attemptedQuestions || 0} Questions
                            Attempted
                          </p>
                          <div className="mt-auto">
                            <button
                              onClick={() => handleStart(flash)}
                              className="btn removeunderline boldtext navybluetext fw-bold"
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

export default FlashCards;
