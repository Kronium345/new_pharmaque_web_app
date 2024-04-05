import React from "react"
class SignUp5 extends React.Component {
  render() {
    return (
      <main>
        <body class="mainbg p-4">
          <div class="container-fluid p-4">
            <a class="navbar-brand" href="index.html">
              <img src="images/Logo.png" alt="PharmaQue Logo" class="logo" />
              <span class="fs-3 fw-bold mx-3">PharmaQue</span>
            </a>
          </div>
          <div class="container-fluid">
            <div class="row p-5">
              <div class="col-sm-6 p-5 leftside verticalcenter">
                <img
                  src="images/Subscriptions.png"
                  class="img-fluid exampleimage"
                />
              </div>
              <div class="col-sm-6 p-5 rightside">
                <div class="progress mb-3" role="progressbar">
                  <div class="progress-bar fw-bold" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>

                <h1 class="h3 fw-bold leftalign mb-3">
                  Choose Your Subscription Plan
                </h1>

                <form>
                  <div class="row py-3 whitebg borderradius mb-4">
                    <div class="row">
                      <div class="col-sm-10 px-0">
                        <p class="fs-4 mediumbluetext fw-bold px-4 mb-1">
                          Demo
                        </p>
                        <p class="fs-3 fw-bold px-4 navybluetext">£0</p>
                      </div>
                      <div class="col-sm-2 px-0">
                        <input
                          class="form-check-input fs-4 mx-0"
                          type="radio"
                          name="plans"
                          id="planone"
                          value="plan1"
                        />
                      </div>
                    </div>

                    <div class="row px-4 mb-3">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">Access to 50 questions.</p>
                      </div>
                    </div>

                    <div class="row px-4">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">
                          Useful for students to see what the question bank is
                          like.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row py-3 whitebg borderradius mb-4">
                    <div class="row">
                      <div class="col-sm-10 px-0">
                        <p class="fs-4 mediumbluetext fw-bold px-4 mb-1">
                          Six Months
                        </p>
                        <p class="fs-3 fw-bold px-4 navybluetext mb-1">
                          £29 per month{" "}
                        </p>
                        <p class="fs-5 navybluetext px-4 mb-4">
                          (£174 for six months)
                        </p>
                      </div>
                      <div class="col-sm-2 px-0">
                        <input
                          class="form-check-input fs-4 mx-0"
                          type="radio"
                          name="plans"
                          id="plantwo"
                          value="plan2"
                        />
                      </div>
                    </div>

                    <div class="row px-4 mb-3">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">
                          Access to atleast 2,500 questions
                        </p>
                      </div>
                    </div>

                    <div class="row px-4">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">Comes with one mock exam.</p>
                      </div>
                    </div>
                  </div>

                  <div class="row py-3 whitebg borderradius mb-4">
                    <div class="row">
                      <div class="col-sm-10 px-0">
                        <p class="fs-4 mediumbluetext fw-bold px-4 mb-1">
                          One Year
                        </p>
                        <p class="fs-3 fw-bold px-4 navybluetext mb-1">
                          £18 per month{" "}
                        </p>
                        <p class="fs-5 navybluetext px-4 mb-4">
                          (£216 for twelve months)
                        </p>
                      </div>
                      <div class="col-sm-2 px-0">
                        <input
                          class="form-check-input fs-4 mx-0"
                          type="radio"
                          name="plans"
                          id="planthree"
                          value="plan3"
                        />
                      </div>
                    </div>

                    <div class="row px-4 mb-3">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">
                          Access to atleast 2,500 questions
                        </p>
                      </div>
                    </div>

                    <div class="row px-4 mb-3">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">Comes with two mock exams.</p>
                      </div>
                    </div>

                    <div class="row px-4">
                      <div class="col-sm-1">
                        <img src="images/Point.png" class="mediumicon" />
                      </div>
                      <div class="col-sm-11 px-3">
                        <p class="fs-5 mx-3">Access to flashcards.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary fw-bold fs-5 mt-3"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary fw-bold fs-5 mx-3 mt-3"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"
          ></script>
          <script src="script.js"></script>
        </body>
      </main>
    )
  }
}

export default SignUp5
