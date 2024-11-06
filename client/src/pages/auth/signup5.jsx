// SignUp5.jsx
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";
import subscriptionPlanImage from '../../assets/images/Subscriptions.png';

const SignUp5 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || {}; // Retrieve email from state
  const [subscriptionPlan, setSubscriptionPlan] = useState("Free"); // Default to Free plan

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/update-profile", { email, subscriptionPlan: "Free" });
      navigate("/myaccount", { state: { email } }); // Navigate to the account page
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mainbg p-4">
      <div className="container-fluid p-4">
        <Link to="/" className="navbar-brand">
          <img src="images/Logo.png" alt="PharmaQue Logo" className="logo" />
          <span className="fs-3 fw-bold mx-3">PharmaQue</span>
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-sm-6 p-5 leftside verticalcenter">
            <img src={subscriptionPlanImage} className="img-fluid exampleimage" alt="Subscription Plan" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar fw-bold" style={{ width: "80%" }}>80%</div>
            </div>
            <h1 className="h3 fw-bold leftalign mb-3">Choose Your Subscription Plan</h1>
            <form onSubmit={handleSubmit}>
              {/* Free Plan Only */}
              <div className="row py-3 whitebg borderradius mb-4">
                <div className="row">
                  <div className="col-sm-10 px-0">
                    <p className="fs-4 mediumbluetext fw-bold px-4 mb-1">Free - 50 Questions</p>
                    <p className="fs-3 fw-bold px-4 navybluetext">£0</p>
                  </div>
                  <div className="col-sm-2 px-0">
                    <input
                      className="form-check-input fs-4 mx-0"
                      type="radio"
                      name="plans"
                      value="Free"
                      checked
                      readOnly
                    />
                  </div>
                </div>
                <div className="row px-4 mb-3">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Access to 50 questions.</p>
                  </div>
                </div>
                <div className="row px-4">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Useful for students to see what the question bank is like.</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary fw-bold fs-5" onClick={() => navigate(-1)}>
                  Previous
                </button>
                <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp5;
