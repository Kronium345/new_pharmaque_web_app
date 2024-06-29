import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks";

const SignUp5 = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      await axios.post("auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/myaccount");
    } catch (error) {
      console.error("Error uploading avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
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
            <img src="images/AvatarImage.png" className="img-fluid exampleimage" alt="Avatar" />
          </div>
          <div className="col-sm-6 p-5 rightside">
            <div className="progress mb-3" role="progressbar">
              <div className="progress-bar" style={{ width: "80%" }}>80%</div>
            </div>
            <h1 className="h3 fw-bold leftalign">Upload Your Avatar</h1>
            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button type="submit" className="btn btn-primary fw-bold fs-5">Complete Signup</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp5;
