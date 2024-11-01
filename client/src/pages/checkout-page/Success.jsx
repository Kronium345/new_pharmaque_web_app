import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Payment Successful!</h1>
      <p>Thank you for your subscription. Your payment was processed successfully.</p>
      <Link to="/myaccount" className="btn btn-primary mt-3">
        Go to My Account
      </Link>
    </div>
  );
};

export default Success;
