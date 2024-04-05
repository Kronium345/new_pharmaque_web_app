import React from "react"
class UpcomingEvents2 extends React.Component {
  render() {
    return (
      <main>
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-sm-3 leftnavigation p-4">
              <a class="navbar-brand" href="index.html">
                <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
                <span class="fs-4 fw-bold mx-3">PharmaQue</span>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="pt-5 pb-3 m-0">
                  <img src="images/DashboardGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Dashboard</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img src="images/ChaptersGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Chapters</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img src="images/FlashcardsGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Flashcards</span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/FlaggedQuestionsGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Flagged Questions
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/PastChaptersGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">Past Chapters</span>
                </p>
              </a>
              <a href="#" class="removeunderline activelink">
                <p class="py-3 m-0">
                  <img
                    src="images/UpcomingEventsColour.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Upcoming Events
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img
                    src="images/QueryResponsesGrey.png"
                    class="navigationicon"
                  />
                  <span class="fs-5 navigationoption mx-4">
                    Query Responses
                  </span>
                </p>
              </a>
              <a href="#" class="removeunderline inactivelink">
                <p class="py-3 m-0">
                  <img src="images/AccountGrey.png" class="navigationicon" />
                  <span class="fs-5 navigationoption mx-4">Account</span>
                </p>
              </a>
            </div>
            <div class="col-sm-9 p-4 maincontent">
              <p class="fs-4 mt-4 fw-bold navybluetext">Upcoming Events</p>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card p-4 navybluebg">
                    <p class="center mb-4">
                      <a href="#" class="removeunderline floatleft">
                        <img src="images/backarrowicon.png" class="tinyicon" />
                        <span class="whitetext fs-5  mx-3">Back</span>
                      </a>
                      <span class="whitetext fs-4 fw-bold center">
                        Add Exams
                      </span>
                    </p>

                    <input
                      type="text"
                      class="form-control px-4 py-2 fs-5 mb-3"
                      id="examTitleInput"
                      placeholder="Enter Exam Title"
                    />

                    <select
                      class="form-select px-4 py-2 fs-5 mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Select a Clinical Topic</option>
                      <option value="1">Gastrointestinal System</option>
                      <option value="2">Cardiovascular System</option>
                      <option value="3">Respiratory System</option>
                      <option value="4">Central Nervous System</option>
                      <option value="5">Infections</option>
                      <option value="6">Endocrine</option>
                      <option value="7">
                        Obstetrics, Gynaecology and Genitourinary tract
                      </option>
                      <option value="8">
                        Malignant Disease and Immunosuppression
                      </option>
                      <option value="9">Nutrition and Blood</option>
                      <option value="10">Ophthalmology</option>
                      <option value="11">Skin</option>
                      <option value="12">Anaesthesia</option>
                      <option value="13">
                        Immunological products and vaccines
                      </option>
                      <option value="14">
                        Musculoskeletal & Joint diseases
                      </option>
                      <option value="15">Ear, Nose and Throat</option>
                    </select>

                    <select
                      class="form-select px-4 py-2 fs-5 mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Select a Maths Topic</option>
                      <option value="1">Calculations</option>
                    </select>

                    <p class="fs-5 whitetext fw-bold pb-0 pt-2">
                      Select Exam Date
                    </p>
                    <input
                      type="date"
                      class="form-control px-4 py-2 fs-5 mb-4"
                    />

                    <div class="center">
                      <button
                        type="submit"
                        class="btn-tertiary fs-5 px-4 py-2 fw-bold"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </main>
    )
  }
}

export default UpcomingEvents2
