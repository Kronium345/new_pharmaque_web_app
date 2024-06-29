import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";

const SignUp4 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const [subscriptionPlan, setSubscriptionPlan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("auth/signup", { subscriptionPlan });
      navigate("/signup5");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mainbg p-4">
      <div className="container-fluid p-4">
        <a className="navbar-brand" href="index.html">
          <img src="images/Logo.png" alt="PharmaQue Logo" className="logo" />
          <span className="fs-3 fw-bold mx-3">PharmaQue</span>
        </a>
      </div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-sm-6 p-5 leftside">
            <img src="images/SubscriptionImage.png" className="img-fluid exampleimage" alt="Subscription Plan" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar" style={{ width: "60%" }}>60%</div>
            </div>
            <h1 className="h3 fw-bold leftalign">Choose Your Subscription Plan</h1>
            <form onSubmit={handleSubmit}>
              <select
                className="form-select py-2 mb-3"
                value={subscriptionPlan}
                onChange={(e) => setSubscriptionPlan(e.target.value)}
              >
                <option value="" disabled>Select Your Subscription Plan</option>
                <option value="Free">Free</option>
                <option value="Six Months">Six Months (£29 per month)</option>
                <option value="One Year">One Year (£18 per month)</option>
              </select>
              <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp4;
