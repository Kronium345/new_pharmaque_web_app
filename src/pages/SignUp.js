import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:7171/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <main>
      <div className="mainbg p-4">
        <div className="container-fluid p-4">
          <Link to="/signup" className="navbar-brand">
            <img src="images/Logo.png" alt="PharmaQue Logo" className="logo" />
            <span className="fs-3 fw-bold mx-3">PharmaQue</span>
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-sm-6 p-5 leftside">
              <img
                src="images/ExampleImage1.png"
                className="img-fluid exampleimage"
                alt="Example"
              />
            </div>
            <div className="col-sm-6 p-5 rightside">
              <div className="progress mb-3" role="progressbar">
                <div className="progress-bar" style={{ width: "0%" }}>
                  0%
                </div>
              </div>
              <h1 className="h3 fw-bold leftalign">Create Account</h1>
              <p className="fs-5 leftalign">
                Welcome to PharmaQue! Follow the steps below to create your
                account on this website.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="username"
                    className="form-control py-2"
                    id="exampleUsername1"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
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
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control py-2"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="mb-3">
                                    <input type="password" className="form-control py-2" id="exampleInputPassword1" placeholder="Confirm Password" />
                                </div> */}
                <button type="submit" className="btn btn-primary fw-bold fs-5">
                  Next
                </button>
                <p className="fs-5 leftalign mt-2">
                  Already have an account?{" "}
                  <Link to="/" className="fw-bold link">
                    Login
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
        crossorigin="anonymous"
      ></script>
      <script src="script.js"></script>
    </main>
  )
}

export default SignUp
