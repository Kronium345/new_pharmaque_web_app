import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";

const SignUp2 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const [university, setUniversity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("auth/signup", { university });
      navigate("/signup3");
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
            <img src="images/UniversityImage.png" className="img-fluid exampleimage" alt="University" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar" style={{ width: "20%" }}>20%</div>
            </div>
            <h1 className="h3 fw-bold leftalign">Which university did you attend?</h1>
            <p className="fs-5 leftalign">Tell us about your university. Unlock tailored content and resources!</p>
            <form onSubmit={handleSubmit}>
              <select
                className="form-select py-2 mb-3"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="" disabled>Select Your University</option>
                <option value="Imperial College London">Imperial College London</option>
                <option value="University of Cambridge">University of Cambridge</option>
                <option value="University of Oxford">University of Oxford</option>
                <option value="University of Aberdeen">University of Aberdeen</option>
                <option value="Abertay University">Abertay University</option>
                {/* Add more options here */}
              </select>
              <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp2;
