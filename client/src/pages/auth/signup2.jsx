import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";

const SignUp2 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || {}; // Retrieve email from state
  const [university, setUniversity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/update-profile", { email, university });
      navigate("/signup3", { state: { email } }); // Pass email to next step
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
                <option value="Aston University (Birmingham)">Aston University (Birmingham)</option>
                <option value="University of Bath">University of Bath</option>
                <option value="University of Birmingham">University of Birmingham</option>
                <option value="University of Bradford">University of Bradford</option>
                <option value="University of Brighton">University of Brighton</option>
                <option value="Cardiff University">Cardiff University</option>
                <option value="University of Central Lancashire (Preston)">University of Central Lancashire (Preston)</option>
                <option value="University College London">University College London</option>
                <option value="De Montford University (Leicester)">De Montford University (Leicester)</option>
                <option value="University of East Anglia (Norwich)">University of East Anglia (Norwich)</option>
                <option value="University of Hertfordshire (Hatfield)">University of Hertfordshire (Hatfield)</option>
                <option value="University of Huddersfield">University of Huddersfield</option>
                <option value="Keele University">Keele University</option>
                <option value="Kings College, University of London">Kings College, University of London</option>
                <option value="Kingston University London">Kingston University London</option>
                <option value="University of Lincoln">University of Lincoln</option>
                <option value="Liverpool John Moores University">Liverpool John Moores University</option>
                <option value="Medway School of Pharmacy">Medway School of Pharmacy</option>
                <option value="Universities of Greenwich and Kent">Universities of Greenwich and Kent</option>
                <option value="University of Manchester">University of Manchester</option>
                <option value="Newcastle University">Newcastle University</option>
                <option value="University of Nottingham">University of Nottingham</option>
                <option value="University of Portsmouth">University of Portsmouth</option>
                <option value="Queen's University Belfast">Queen's University Belfast</option>
                <option value="University of Reading">University of Reading</option>
                <option value="Robert Gordon University (Aberdeen)">Robert Gordon University (Aberdeen)</option>
                <option value="University of Strathclyde (Glasgow)">University of Strathclyde (Glasgow)</option>
                <option value="University of Sunderland">University of Sunderland</option>
                <option value="Swansea University">Swansea University</option>
                <option value="University of Ulster (Coleraine)">University of Ulster (Coleraine)</option>
                <option value="University of Wolverhampton">University of Wolverhampton</option>

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
