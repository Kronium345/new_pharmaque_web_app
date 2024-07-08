import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth, useLoading } from "../../hooks";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const { setLoading } = useLoading();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await axios
      .post("auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data);
          const { user, token } = response.data;

          navigate("/dashboard");
          login(user, token);
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <div className="mainbg p-4">
        <div className="container-fluid p-4">
          <Link className="navbar-brand" to="/">
            <img src="/images/Logo.png" alt="PharmaQue Logo" className="logo" />
            <span className="fs-3 fw-bold mx-3">PharmaQue</span>
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-sm-6 p-5 leftside">
              <img
                src="/images/ExampleImage1.png"
                className="img-fluid exampleimage"
                alt="Example"
              />
            </div>
            <div className="col-sm-6 p-5 rightside">
              <h1 className="h3 fw-bold leftalign">Login</h1>
              <p className="fs-5 leftalign">
                Welcome to PharmaQue! Please enter your details and login to
                access the site.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control py-2"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="mb-3">
                  <p className="my-0 mx-1 floatright link fs-6">
                    Forgot your password?{" "}
                    <Link to="/forgotpassword" className="fw-bold link">
                      Forgot Password
                    </Link>
                  </p>
                </div>
                <button type="submit" className="btn btn-primary fw-bold fs-5">
                  Login
                </button>
                <p className="fs-5 leftalign mt-2">
                  Don't have an account?{" "}
                  <Link to="/signup" className="fw-bold link">
                    Sign Up
                  </Link>
                </p>
              </form>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
