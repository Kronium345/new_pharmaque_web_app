import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";
import pharmacistTypeImage from '../../assets/images/PharmacistTypeImage.png';

const SignUp3 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || {}; // Retrieve email from state
  const [pharmacistType, setPharmacistType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/update-profile", { email, pharmacistType });
      navigate("/signup4", { state: { email } }); // Pass email to next step
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
          <div className="col-sm-6 p-5 leftside">
            <img src={pharmacistTypeImage} className="img-fluid exampleimage" alt="Pharmacist Type" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar" style={{ width: "40%" }}>40%</div>
            </div>
            <h1 className="h3 fw-bold leftalign">What type of pharmacist are you?</h1>
            <p className="fs-5 leftalign">Tell us more about your role.</p>
            <form onSubmit={handleSubmit}>
              <select
                className="form-select py-2 mb-3"
                value={pharmacistType}
                onChange={(e) => setPharmacistType(e.target.value)}
              >
                <option value="" disabled>Select Your Pharmacist Type</option>
                <option value="Pre-Registration Pharmacist">Pre-Registration Pharmacist</option>
                <option value="Qualified Pharmacist">Qualified Pharmacist</option>
                <option value="Pharmacy Student">Pharmacy Student</option>
              </select>
              <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp3;
