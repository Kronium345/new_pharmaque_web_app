import React from "react";
const FlaggedQuestions = () => {
  return (
    <>
      <p class="fs-4 mt-4 fw-bold navybluetext">Flagged Questions</p>
      <div class="row">
        <div class="col-sm-12">
          <div class="card p-4">
            <div class="row mt-2">
              <div class="col-sm-4">
                <p>
                  <img
                    src="/images/FlagIcon.png"
                    class="mediumicon"
                    alt="icon"
                  />
                  <span class="fw-bold fs-5 mb-1 mx-3 redtext">Flagged</span>
                </p>
              </div>
              <div class="col-sm-4 center">
                <p class="fs-4 fw-bold navybluetext mb-2">Question 5 of 100</p>
                <p class="fs-5 navybluetext">
                  <span class="fw-bold mediumbluetext">Topic:</span> Drug
                  Interactions
                </p>
              </div>
              <div class="col-sm-4">
                <button
                  onclick="toggleQuestion()"
                  class="navybluetext floatright flipbutton"
                >
                  <span class="fs-5 mx-3 questionshowingtext">
                    Show Question
                  </span>
                  <img
                    src="/images/Dropdown.png"
                    class="mediumicon showquestionicon"
                  />
                </button>
              </div>
            </div>

            <div class="row bordertop mt-1 pt-3 questionholder hide">
              <div class="col-sm-12">
                <p class="fs-5">
                  A 73 year old man is experiencing an acute attack of gout. His
                  past medical history includes stage one hypertension as well
                  as mild osteoarthritis in his hip. He is otherwise doing well.
                  His current regimen includes the following medication:
                </p>

                <ul class="fs-5">
                  <li>Atorvastatin 80mg once at night</li>
                  <li>Amlodipine 10mg once in the morning </li>
                  <li>
                    Paracetamol 500mg two tablets up to four times a day when
                    required
                  </li>
                </ul>

                <p class="fs-5 mb-1">He has no known drug allergies.</p>
                <br />

                <p class="fs-5 fw-bold mediumbluetext">
                  Which of the following is the most suitable drug treatment for
                  his attack of Gout?
                </p>

                <div class="btn btn-secondary fs-5 p-0 mb-3">
                  <p class="fs-5 py-2 px-4 m-0">Allopurinol</p>
                </div>

                <div class="btn btn-secondary fs-5 p-0 mb-3">
                  <p class="fs-5 py-2 px-4 m-0">Colchicine</p>
                </div>

                <div class="btn btn-secondary fs-5 p-0 mb-3">
                  <p class="fs-5 py-2 px-4 m-0">Febuxostat</p>
                </div>

                <div class="btn btn-secondary fs-5 p-0 mb-3">
                  <p class="fs-5 py-2 px-4 m-0">Prednisolone</p>
                </div>

                <div class="btn btn-secondary fs-5 p-0 mb-3">
                  <p class="fs-5 py-2 px-4 m-0">Risedronate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlaggedQuestions;
