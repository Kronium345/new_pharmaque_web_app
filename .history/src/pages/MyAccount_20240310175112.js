import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyAccount = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [profile, setProfile] = useState({});

  axios.defaults.withCredentials = true;

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

      await axios.post("http://localhost:7171/auth/change-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Avatar changed successfully");
      console.log("Avatar changed successfully");
    } catch (error) {
      console.error("Error changing avatar:", error);
    }
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const getProfile = async () => {
    try {
      const res = await axios.get("http://localhost:7171/auth/get-profile");

      setProfile(res?.data?.user);
    } catch (error) {
      console.error("Error getting profile:", error);
    }
  };

  useLayoutEffect(() => {
    getProfile();
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:7171/auth/verify")
      .then((res) => {
        if (!res.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/"); // Handle error by redirecting to home page
      });
  }, [navigate]);

  return (
    <main>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-3 leftnavigation p-4">
            <Link to="/myaccount" className="navbar-brand">
              <img
                src="images/Logo.png"
                alt="PharmaQue Logo"
                className="logo1"
              />
              <span className="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" className="removeunderline inactivelink">
              <p className="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  className="navigationicon"
                  alt="navigation"
                />
                <span className="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" className="removeunderline inactivelink">
              <p className="py-3 m-0">
                <img
                  src="images/ChaptersGrey.png"
                  className="navigationicon"
                  alt="navigation"
                />
                <span className="fs-5 navigationoption mx-4">Chapters</span>
              </p>
            </Link>
          </div>
          <div className="col-sm-9 p-4 maincontent">
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <button
                      className="btn btn-tertiary fs-5 fw-bold mb-2"
                      onClick={handleAvatarChange}
                    >
                      Change Avatar
                    </button>
                    <p className="fs-4 fw-bold mb-1">Username123</p>
                    <p className="fs-5 mediumnavytext mb-3">
                      adityag774@gmail.com
                    </p>
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
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      <script src="script.js"></script>
    </main>
  );
};

export default MyAccount;
