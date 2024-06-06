import React from "react";
import { Link } from "react-router-dom";
import "./PastChapters.css";

const PastChapters = () => {
  // Example static data for past chapters
  const pastChapters = [
    {
      name: "Cardiovascular System",
      correctAnswers: 16,
      totalQuestions: 310,
    },
  ];

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">Past Chapters</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <form className="d-flex mb-3" role="search">
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
            </form>
            <div className="row">
              {pastChapters.map((chapter, index) => (
                <div className="col-sm-12 mb-3" key={index}>
                  <div className="card p-4 navybluebg mb-3">
                    <div className="row mb-3">
                      <div className="col-sm-9">
                        <p className="h5 navybluetext fw-bold whitetext">
                          Past Chapters
                        </p>
                        <p className="greytext fs-5 mb-1 whitetext">
                          {chapter.name}
                        </p>
                      </div>
                      <div className="col-sm-3 center">
                        <Link to="" className="removeunderline">
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
                          {chapter.correctAnswers}/ {chapter.totalQuestions}{" "}
                          Correct
                        </span>
                        <img src="/images/Wrong.png" className="smallicon" />
                        <span className="mx-3">
                          {chapter.totalQuestions - chapter.correctAnswers}/{" "}
                          {chapter.totalQuestions} Wrong
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {pastChapters.length === 0 && (
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
