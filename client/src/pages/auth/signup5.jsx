// SignUp5.jsx
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";
import subscriptionPlanImage from '../../assets/images/Subscriptions.png';
import CheckoutButton from "../../components/checkout/CheckoutButton";

const SignUp5 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || {}; // Retrieve email from state
  const [subscriptionPlan, setSubscriptionPlan] = useState("");

  // Mapping human-readable plan names to Stripe price IDs
  const PRICE_IDS = {
    threeMonths: "price_1QFzZvFMQn0VxZqSRQxEIM05", // Replace with actual Stripe price ID for Three Months plan
    nineMonths: "price_1QFzf1FMQn0VxZqS6te9I1sU", // Replace with actual Stripe price ID for Nine Months plan
  };

  // Plan names for internal usage
  const PLAN_NAMES = {
    free: "Free",
    threeMonths: "threeMonths",
    nineMonths: "nineMonths",
  };

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setSubscriptionPlan(selectedPlan);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subscriptionPlan === PLAN_NAMES.free) {
      setLoading(true);
      try {
        await axios.post("/auth/update-profile", { email, subscriptionPlan: PLAN_NAMES.free });
        navigate("/myaccount", { state: { email } });
      } catch (error) {
        console.error("Error updating profile:", error);
      } finally {
        setLoading(false);
      }
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
              {/* Free Plan */}
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
                      value={PLAN_NAMES.free}
                      onChange={handlePlanChange}
                    />
                  </div>
                </div>
              </div>

              {/* Three Months Plan */}
              <div className="row py-3 whitebg borderradius mb-4">
                <div className="row">
                  <div className="col-sm-10 px-0">
                    <p className="fs-4 mediumbluetext fw-bold px-4 mb-1">Three Months</p>
                    <p className="fs-3 fw-bold px-4 navybluetext">£35</p>
                  </div>
                  <div className="col-sm-2 px-0">
                    <input
                      className="form-check-input fs-4 mx-0"
                      type="radio"
                      name="plans"
                      value={PLAN_NAMES.threeMonths}
                      onChange={handlePlanChange}
                    />
                  </div>
                </div>
              </div>

              {/* Nine Months Plan */}
              <div className="row py-3 whitebg borderradius mb-4">
                <div className="row">
                  <div className="col-sm-10 px-0">
                    <p className="fs-4 mediumbluetext fw-bold px-4 mb-1">Nine Months</p>
                    <p className="fs-3 fw-bold px-4 navybluetext">£80</p>
                  </div>
                  <div className="col-sm-2 px-0">
                    <input
                      className="form-check-input fs-4 mx-0"
                      type="radio"
                      name="plans"
                      value={PLAN_NAMES.nineMonths}
                      onChange={handlePlanChange}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary fw-bold fs-5" onClick={() => navigate(-1)}>
                  Previous
                </button>
                {subscriptionPlan === PLAN_NAMES.free ? (
                  <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
                ) : (
                  <CheckoutButton
                    priceId={PRICE_IDS[subscriptionPlan]}
                    email={email}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp5;
