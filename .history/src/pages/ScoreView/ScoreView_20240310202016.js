import React from "react";
import "./ScoreView.css";
import classnames from "classnames";

const ScoreView = ({ handleResetClick, score, questions }) => {
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card p-4">
          <img
            src="/images/gift.png"
            class="logo text-center"
            alt="PharmaQue Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreView;
