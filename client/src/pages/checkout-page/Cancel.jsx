import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Payment Canceled</h1>
      <p>You have canceled the payment process. You can try again anytime.</p>
      <Link to="/signup5" className="btn btn-secondary mt-3">
        Go Back to Plans
      </Link>
    </div>
  );
};

export default Cancel;
