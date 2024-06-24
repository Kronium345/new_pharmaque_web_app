import axios from "axios";

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import "../quiz-styles/reset.css";
import useLoading from "../../hooks/useLoading";

const ResetPassword = () => {
  const { setLoading } = useLoading();
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await axios
      .post("auth/resetpassword/" + token, { password })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <div className="mainbg p-4">
        <div className="container-fluid p-4">
          <a className="navbar-brand" href="/">
            <img src="/images/Logo.png" alt="PharmaQue Logo" className="logo" />
            <span className="fs-3 fw-bold mx-3">PharmaQue</span>
          </a>
        </div>
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-sm-6 p-5 leftside">
              <img
                src="/images/ExampleImage1.png"
                className="img-fluid exampleimage"
              />
            </div>
            <div className="col-sm-6 p-5 rightside">
              <h1 className="h3 fw-bold leftalign">Reset Password</h1>
              <p className="fs-5 leftalign">
                Please enter the password you desire.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary fw-bold fs-5">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
