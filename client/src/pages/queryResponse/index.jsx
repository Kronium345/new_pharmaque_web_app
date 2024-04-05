import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const QueryResponses = () => {
  const navigate = useNavigate("");

  return (
    <>
      <p class="fs-4 mt-4 fw-bold navybluetext">Query Responses</p>

      <div class="row">
        <div class="col-sm-12">
          <div class="card p-4">
            <div class="row p-0 mx-0 mt-0 mb-3">
              <div class="col-sm-1">
                <p class="floatleft">
                  <input
                    class="form-check-input fs-5"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </p>
              </div>
              <div class="col-sm-2">
                <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                  Delete
                </button>
              </div>
              <div class="col-sm-2">
                <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                  Mark as Read
                </button>
              </div>
              <div class="col-sm-2">
                <button class="fs-5 fw-bold navybluetext halfopacity addeventbutton">
                  Mark as Unread
                </button>
              </div>
              <div class="col-sm-3">
                <p class="fs-5 fw-bold navybluetext">01 - 02 of 02</p>
              </div>
              <div class="col-sm-1">
                <button class="addeventbutton">
                  <img
                    src="/images/Previous.png"
                    class="tinyicon halfopacity"
                    alt="button"
                  />
                </button>
              </div>
              <div class="col-sm-1">
                <button class="addeventbutton">
                  <img
                    src="/images/Next.png"
                    class="tinyicon halfopacity"
                    alt="button"
                  />
                </button>
              </div>
            </div>

            <Link to="" class="removeunderline">
              <div class="row px-0 pt-3 pb-2 m-0 fullborder">
                <div class="col-sm-1">
                  <p class="floatleft">
                    <input
                      class="form-check-input fs-5"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </p>
                </div>
                <div class="col-sm-3">
                  <p class="fs-5 fw-bold mediumbluetext mb-1">Serhan Ihsan</p>
                </div>
                <div class="col-sm-5">
                  <p class="fs-5 fw-bold mediumbluetext mb-1">
                    Re: Comment Report
                  </p>
                </div>
                <div class="col-sm-3">
                  <p class="fs-5 fw-bold mediumbluetext mb-1">10th Nov 2023</p>
                </div>
              </div>
            </Link>

            <Link to="" class="removeunderline">
              <div class="row px-0 pt-3 pb-2 m-0 fullborder lightgrey">
                <div class="col-sm-1">
                  <p class="floatleft">
                    <input
                      class="form-check-input fs-5"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </p>
                </div>
                <div class="col-sm-3">
                  <p class="fs-5 mediumbluetext mb-1">Ashish Mashru</p>
                </div>
                <div class="col-sm-5">
                  <p class="fs-5 mediumbluetext mb-1">Re: Question Report</p>
                </div>
                <div class="col-sm-3">
                  <p class="fs-5 mediumbluetext mb-1">09th Nov 2023</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryResponses;
