import axios from "axios";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../quiz-styles/reset.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7171/auth/forgotpassword", {
        email,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Please check your email address for the reset password link");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <div className="mainbg p-4">
        <div className="container-fluid p-4">
          <a className="navbar-brand" href="index.html">
            <img src="images/Logo.png" alt="PharmaQue Logo" className="logo" />
            <span className="fs-3 fw-bold mx-3">PharmaQue</span>
          </a>
        </div>
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-sm-6 p-5 leftside">
              <img
                src="images/ExampleImage1.png"
                className="img-fluid exampleimage"
              />
            </div>
            <div className="col-sm-6 p-5 rightside">
              <h1 className="h3 fw-bold leftalign">Forgot Password?</h1>
              <p className="fs-5 leftalign">
                Please enter the Email Address you used to Sign Up for your
                account.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary fw-bold fs-5">
                  Send
                </button>
                <p className="fs-5 leftalign mt-2">
                  Don't have an account?{" "}
                  <Link to="/" className="fw-bold link">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
      <script src="script.js"></script>
    </main>
  );
};

export default ForgotPassword;
