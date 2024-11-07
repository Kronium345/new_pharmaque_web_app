// Success.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const Success = () => {
  const { getProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Refresh profile to get the updated subscription plan
    getProfile().then(() => {
      // Optional: Add a small delay to ensure the backend has processed the webhook
      setTimeout(() => navigate("/myaccount"), 1000);
    });
  }, [getProfile, navigate]);

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
