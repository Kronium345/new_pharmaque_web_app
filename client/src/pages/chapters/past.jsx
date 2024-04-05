import React from "react";
import { Link } from "react-router-dom";

const PastChapters = () => {
  return (
    <>
      <p class="fs-4 mt-4 fw-bold navybluetext">Past Chapters</p>
      <div class="row">
        <div class="col-sm-12">
          <div class="card p-4">
            <form class="d-flex mb-3" role="search">
              <div class="input-group">
                <span class="input-group-text">
                  <img
                    src="/images/SearchIcon.png"
                    class="smallericon mx-1"
                    alt="search"
                  />
                </span>
                <input
                  class="form-control px-2 py-2"
                  type="search"
                  placeholder="Search Chapter Name"
                  aria-label="Search"
                />
              </div>
            </form>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <div class="card p-4 mediumbluebg">
                  <div class="row">
                    <div class="col-sm-3">
                      <img
                        src="/images/GastroIcon.png"
                        class="icon"
                        alt="gastro"
                      />
                    </div>
                    <div class="col-sm-9">
                      <p class="fs-5 fw-bold whitetext mb-1">
                        Gastrointestinal System
                      </p>
                      <p class="fs-6 whitetext mb-3">
                        100/100 Questions Attempted
                      </p>

                      <p>
                        <img
                          src="/images/ScoreIcon.png"
                          class="moderateicon"
                          alt="score"
                        />
                        <span class="whitetext fw-bold mx-3">
                          80 / 100 Scored
                        </span>
                      </p>

                      <Link
                        to=""
                        class="removeunderline boldtext navybluetext fw-bold"
                      >
                        <div class="px-3 py-2 whitebg pseudobutton">
                          Retake Chapter
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastChapters;
