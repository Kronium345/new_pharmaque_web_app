import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks";

const MyAccount = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const { profile, getProfile } = useAuth();

  const handleLogout = () => {
    axios
      .get("http://localhost:7171/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAvatarChange = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      await axios.post("auth/change-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Avatar changed successfully");
      getProfile();
      console.log("Avatar changed successfully");
    } catch (error) {
      console.error("Error changing avatar:", error);
    }
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">Account</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <div className="col-sm-12 center">
              <img
                src={
                  profile?.avatar
                    ? `http://localhost:7171/${profile.avatar}`
                    : "images/10.png"
                }
                className="logo mb-2"
                alt="10"
              />
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button
                className="btn btn-tertiary fs-5 fw-bold mb-2"
                onClick={handleAvatarChange}
              >
                Change Avatar
              </button>
              <p className="fs-4 fw-bold mb-1">Username123</p>
              <p className="fs-5 mediumnavytext mb-3">{profile?.email}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn btn-tertiary fs-5 fw-bold mb-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
            {/* More account details */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
