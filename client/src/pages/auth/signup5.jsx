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

  // Price IDs for each subscription plan
  const PRICE_IDS = {
    free: "Free", // Free plan does not require Stripe checkout
    threeMonths: "price_1QFzZvFMQn0VxZqSRQxEIM05", // Replace with actual price ID for Three Months plan
    nineMonths: "price_1QFzf1FMQn0VxZqS6te9I1sU", // Replace with actual price ID for Nine Months plan
  };

  const handlePlanChange = (e) => {
    setSubscriptionPlan(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine subscription level based on selected plan
    let subscriptionLevel;
    switch (subscriptionPlan) {
      case PRICE_IDS.threeMonths:
        subscriptionLevel = 2; // Three Months subscription level
        break;
      case PRICE_IDS.nineMonths:
        subscriptionLevel = 3; // Nine Months subscription level
        break;
      default:
        subscriptionLevel = 1; // Free plan
    }

    // **For Free Plan**: Directly update the user's profile without Stripe
    if (subscriptionPlan === PRICE_IDS.free) {
      setLoading(true);
      try {
        await axios.post("/auth/update-subscription-level", { email, subscriptionLevel });
        navigate("/myaccount", { state: { email } }); // Navigate to the account page
      } catch (error) {
        console.error("Error updating profile:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // For paid plans, initiate checkout process (Stripe)
      // Ensure CheckoutButton is properly set up to handle Stripe payments
      setLoading(true);
      try {
        const response = await axios.post("/auth/create-checkout-session", {
          priceId: subscriptionPlan,
          email,
        });
        window.location.href = response.data.url; // Redirect to Stripe checkout
      } catch (error) {
        console.error("Error with checkout:", error);
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
                      value={PRICE_IDS.free}
                      onChange={handlePlanChange}
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
                      value={PRICE_IDS.threeMonths}
                      onChange={handlePlanChange}
                    />
                  </div>
                </div>
                <div className="row px-4 mb-3">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Access to at least 2,500 questions.</p>
                  </div>
                </div>
                <div className="row px-4">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Comes with one mock exam.</p>
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
                      value={PRICE_IDS.nineMonths}
                      onChange={handlePlanChange}
                    />
                  </div>
                </div>
                <div className="row px-4 mb-3">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Access to at least 2,500 questions.</p>
                  </div>
                </div>
                <div className="row px-4 mb-3">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Comes with two mock exams.</p>
                  </div>
                </div>
                <div className="row px-4">
                  <div className="col-sm-1">
                    <img src="images/Point.png" className="mediumicon" alt="Point icon" />
                  </div>
                  <div className="col-sm-11 px-3">
                    <p className="fs-5 mx-3">Access to flashcards.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary fw-bold fs-5" onClick={() => navigate(-1)}>
                  Previous
                </button>
                {subscriptionPlan === PRICE_IDS.free ? (
                  <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
                ) : (
                  <CheckoutButton priceId={subscriptionPlan} email={email} />
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
