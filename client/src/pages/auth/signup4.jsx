import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";
import avatar1 from '../../assets/images/1.png';
import avatar2 from '../../assets/images/2.png';
import avatar3 from '../../assets/images/3.png';
import avatar4 from '../../assets/images/4.png';
import avatar5 from '../../assets/images/5.png';
import avatar6 from '../../assets/images/6.png';
import avatar7 from '../../assets/images/7.png';
import avatar8 from '../../assets/images/8.png';
import avatar9 from '../../assets/images/9.png';
import avatar10 from '../../assets/images/10.png';
import avatar11 from '../../assets/images/11.png';
import avatar12 from '../../assets/images/12.png';
import avatar13 from '../../assets/images/13.png';
import avatar14 from '../../assets/images/14.png';
import avatar15 from '../../assets/images/15.png';
import avatar16 from '../../assets/images/16.png';
import avatarGroup from '../../assets/images/Avatars.png';

const SignUp4 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || {}; // Retrieve email from state
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/update-profile", { email, avatar });
      navigate("/signup5", { state: { email } }); // Pass email to next step
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
            <img src={avatarGroup} className="img-fluid exampleimage" alt="Avatar Group" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar fw-bold" style={{ width: "60%" }}>60%</div>
            </div>
            <h1 className="h3 fw-bold leftalign">Choose Your Avatar</h1>
            <form onSubmit={handleSubmit}>
              <div className="row py-3">
                {[avatar1, avatar2, avatar3, avatar4].map((img, index) => (
                  <div className="col-sm-3" key={index}>
                    <input
                      type="radio"
                      id={`avatar${index + 1}`}
                      className="hide"
                      name="avatar"
                      value={img}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <label htmlFor={`avatar${index + 1}`}><img src={img} className="logo pointercursor" alt={`avatar${index + 1}`} /></label>
                  </div>
                ))}
              </div>
              <div className="row py-3">
                {[avatar5, avatar6, avatar7, avatar8].map((img, index) => (
                  <div className="col-sm-3" key={index + 4}>
                    <input
                      type="radio"
                      id={`avatar${index + 5}`}
                      className="hide"
                      name="avatar"
                      value={img}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <label htmlFor={`avatar${index + 5}`}><img src={img} className="logo pointercursor" alt={`avatar${index + 5}`} /></label>
                  </div>
                ))}
              </div>
              <div className="row py-3">
                {[avatar9, avatar10, avatar11, avatar12].map((img, index) => (
                  <div className="col-sm-3" key={index + 8}>
                    <input
                      type="radio"
                      id={`avatar${index + 9}`}
                      className="hide"
                      name="avatar"
                      value={img}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <label htmlFor={`avatar${index + 9}`}><img src={img} className="logo pointercursor" alt={`avatar${index + 9}`} /></label>
                  </div>
                ))}
              </div>
              <div className="row py-3">
                {[avatar13, avatar14, avatar15, avatar16].map((img, index) => (
                  <div className="col-sm-3" key={index + 12}>
                    <input
                      type="radio"
                      id={`avatar${index + 13}`}
                      className="hide"
                      name="avatar"
                      value={img}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <label htmlFor={`avatar${index + 13}`}><img src={img} className="logo pointercursor" alt={`avatar${index + 13}`} /></label>
                  </div>
                ))}
              </div>
              <button type="submit" className="btn btn-primary fw-bold fs-5 mt-3">Previous</button>
              <button type="submit" className="btn btn-primary fw-bold fs-5 mx-3 mt-3">Next</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp4;
