import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { getImageUrl } from "../../utils";
import { useAuth } from "../../hooks";
import avatar10 from '../../assets/images/10.png';


const MyAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email: initialEmail } = state || {}; // Retrieve email from state
  const [email, setEmail] = useState(initialEmail || "");
  const [avatar, setAvatar] = useState(null);
  const { profile, getProfile } = useAuth();
  const { logout } = useAuth();
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [university, setUniversity] = useState("");
  const [pharmacistType, setPharmacistType] = useState("");

  useEffect(() => {
    if (profile) {
      setEmail(profile.email); // Set email from profile
      setSubscriptionPlan(profile.subscriptionPlan);
      setUniversity(profile.university);
      setPharmacistType(profile.pharmacistType);
    }
  }, [profile]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post("/auth/update-profile", {
        email,
        subscriptionPlan,
        university,
        pharmacistType
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Profile updated successfully:', response.data);
      alert("Profile updated successfully");
      await getProfile(); // Re-fetch the profile to update the changes
    } catch (error) {
      console.error('Error updating profile:', error.response?.data?.message || error.message);
    }
  };

  const handleAvatarChange = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("email", email); // Ensure the email is sent with the avatar change request

      await axios.post("/auth/change-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Avatar changed successfully");
      await getProfile(); // Re-fetch the profile to update the avatar
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
                src={profile?.avatar}
                className="logo mb-2"
                alt="avatar"
                style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover", alignItems: "center" }}
              />
              {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
              <p className="fs-4 fw-bold mb-1">{profile?.username}</p> {/* Use the username from the profile */}
              <p className="fs-5 mediumnavytext mb-3">{profile?.email}</p>
              <button
                className="btn btn-tertiary fs-5 fw-bold mb-2 halveopacity"
                // onClick={handleAvatarChange}
                style={{ cursor: 'default' }}
                disabled
              >
                Change Avatar
              </button>

              <div className="row p-3">
                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">Email Address</p>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control fs-5 halveopacity" value={email} onChange={(e) => setEmail(e.target.value)} readOnly style={{ cursor: 'default' }} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary fs-5 fw-bold halveopacity" type="button" onClick={handleSaveChanges} style={{ cursor: 'default' }} disabled>Edit Email</button>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">Password</p>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control fs-5" placeholder="*********" />
                    <div className="input-group-append">
                      <Link to="/changepassword" className="btn btn-outline-secondary fs-5 fw-bold" type="button">Change Password</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">Current Subscription Plan</p>
                  </div>
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={subscriptionPlan} onChange={(e) => setSubscriptionPlan(e.target.value)}>
                    <option value="Demo">Demo</option>
                    <option value="Six Months">Six Months (£29 per month)</option>
                    <option value="One Year">One Year (£18 per month)</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">University Attended</p>
                  </div>
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={university} onChange={(e) => setUniversity(e.target.value)}>
                    <option value="Imperial College London">Imperial College London</option>
                    <option value="University of Cambridge">University of Cambridge</option>
                    <option value="University of Oxford">University of Oxford</option>
                    <option value="University of Aberdeen">University of Aberdeen</option>
                    <option value="Abertay University">Abertay University</option>
                    {/* Add more options here */}
                  </select>
                </div>
              </div>

              <div className="row p-3 mb-3">
                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">Pharmacist Type</p>
                  </div>
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={pharmacistType} onChange={(e) => setPharmacistType(e.target.value)}>
                    <option value="Pre-Registration Pharmacist">Pre-Registration Pharmacist</option>
                    <option value="Qualified Pharmacist">Qualified Pharmacist</option>
                    <option value="Pharmacy Student">Pharmacy Student</option>
                  </select>
                  <div className="row">
                    <div className = "col-sm-1">
                      <img src = "images/hinticon.png" className = "smallicon" alt="Hint icon" />
                    </div>
                    <div className = "col-sm-11">
                      <span className = "fw-bold navybluetext">This helps us keep track of who is using our website.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 center">
                <button className="btn btn-tertiary fs-5 fw-bold mb-2" onClick={handleSaveChanges}>Save Changes</button>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button
                  className="btn btn-tertiary fs-5 fw-bold mt-5 mb-5"
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    maxWidth: '120px',
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
