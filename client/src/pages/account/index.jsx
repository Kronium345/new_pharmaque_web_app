import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks";
import { useScreenTime } from "../../components/ScreenTime/ScreenTimeContext";
import { loadStripe } from "@stripe/stripe-js";

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
  const { screenTime } = useScreenTime();
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const [lastScreenTime, setLastScreenTime] = useState(null);
  const [screenTimeDifference, setScreenTimeDifference] = useState(null);

  const PRICE_IDS = {
    free: "Free", // Free plan require's no Stripe checkout
    threeMonths: "price_1QFzZvFMQn0VxZqSRQxEIM05", // Replace with actual price ID for Three Months plan
    nineMonths: "price_1QFzf1FMQn0VxZqS6te9I1sU", // Replace with actual price ID for Nine Months plan
  };

  useEffect(() => {
    if (profile) {
      console.log("Loaded profile with subscriptionPlan:", profile.subscriptionPlan);
      setSubscriptionPlan(profile.subscriptionPlan);
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      console.log("Profile loaded:", profile);
      setEmail(profile.email); // Set email from profile
      setSubscriptionPlan(profile.subscriptionPlan);
      setUniversity(profile.university);
      setPharmacistType(profile.pharmacistType);
    }

    const lastTime = localStorage.getItem('lastScreenTime');
    if (lastTime !== null) {
      const lastTimeInt = parseInt(lastTime, 10);
      setLastScreenTime(lastTimeInt);
      const timeDifference = screenTime - lastTimeInt;
      setScreenTimeDifference(timeDifference);
    }
  }, [profile, screenTime]);

  const handleLogout = () => {
    localStorage.setItem('lastScreenTime', screenTime);
    logout();
    navigate("/login");
  };

  const handleSaveChanges = async () => {
    console.log("Saving changes...");
    console.log("Email:", email);
    console.log("Subscription Plan:", subscriptionPlan);
    console.log("University:", university);
    console.log("Pharmacist Type:", pharmacistType);

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

  const handleSubscriptionPlanChange = async (e) => {
    const newSubscriptionPlan = e.target.value;
    setSubscriptionPlan(newSubscriptionPlan);

    if (newSubscriptionPlan === "Free") {
        try {
            await axios.post("/auth/update-subscription-plan", { 
                subscriptionPlan: newSubscriptionPlan, 
                email: profile.email 
            });
            console.log("Subscription plan updated to Free");
            await getProfile(); // Refresh the profile to reflect the change
        } catch (error) {
            console.error("Error updating subscription plan:", error.response?.data?.message || error.message);
        }
    } else {
        const confirmPayment = window.confirm("Are you sure you want to proceed with payment?");
        if (confirmPayment) {
            initiateStripePayment(newSubscriptionPlan);
        }
    }
};


const initiateStripePayment = async (subscriptionPlan) => {
  const stripe = await stripePromise;
  const priceId = subscriptionPlan === "threeMonths" ? "price_1QFzZvFMQn0VxZqSRQxEIM05" : "price_1QFzf1FMQn0VxZqS6te9I1sU";

  try {
      const response = await axios.post("/stripe/create-checkout-session", {
          priceId,
          email: profile.email,
      });

      const result = await stripe.redirectToCheckout({
          sessionId: response.data.sessionId,
      });

      if (result.error) {
          console.error(result.error.message);
      }
  } catch (error) {
      console.error("Error creating checkout session:", error);
  }
};

  

  const handleUniversityChange = async (e) => {
    const newUniversity = e.target.value;
    setUniversity(newUniversity);
    console.log("Updated University:", newUniversity);

    try {
      await axios.post("/auth/update-university", { university: newUniversity }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('University updated successfully');
      await getProfile(); // Re-fetch the profile to update the changes
    } catch (error) {
      console.error('Error updating university:', error.response?.data?.message || error.message);
    }
  };

  const handlePharmacistTypeChange = async (e) => {
    const newPharmacistType = e.target.value;
    setPharmacistType(newPharmacistType);
    console.log("Updated Pharmacist Type:", newPharmacistType);

    try {
      await axios.post("/auth/update-pharmacist-type", { pharmacistType: newPharmacistType }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Pharmacist type updated successfully');
      await getProfile(); // Re-fetch the profile to update the changes
    } catch (error) {
      console.error('Error updating pharmacist type:', error.response?.data?.message || error.message);
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
              <p className="fs-4 fw-bold mb-1">{profile?.username}</p> {/* Use the username from the profile */}
              <p className="fs-5 mediumnavytext mb-3">{profile?.email}</p>
              <button
                className="btn btn-tertiary fs-5 fw-bold mb-2 halveopacity"
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
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={subscriptionPlan} onChange={handleSubscriptionPlanChange}>
                    <option value="Free">Free - 50 Questions</option>
                    <option value="threeMonths">Three Months - £35</option>
                    <option value="nineMonths">Nine Months - £80</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">University Attended</p>
                  </div>
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={university} onChange={handleUniversityChange}>
                    <option value="Aston University (Birmingham)">Aston University (Birmingham)</option>
                    <option value="University of Bath">University of Bath</option>
                    <option value="University of Birmingham">University of Birmingham</option>
                    <option value="University of Bradford">University of Bradford</option>
                    <option value="University of Brighton">University of Brighton</option>
                    <option value="Cardiff University">Cardiff University</option>
                    <option value="University of Central Lancashire (Preston)">University of Central Lancashire (Preston)</option>
                    <option value="University College London">University College London</option>
                    <option value="De Montfort University (Leicester)">De Montfort University (Leicester)</option>
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
                </div>
              </div>

              <div className="row p-3 mb-3">
                <div className="col-sm-6">
                  <div className='d-flex justify-content-start'>
                    <p className="fs-4 fw-bold navybluetext">Pharmacist Type</p>
                  </div>
                  <select className="form-select px-4 py-2 fs-5 mb-3" value={pharmacistType} onChange={handlePharmacistTypeChange}>
                    <option value="Pre-Registration Pharmacist">Pre-Registration Pharmacist</option>
                    <option value="Qualified Pharmacist">Qualified Pharmacist</option>
                    <option value="Pharmacy Student">Pharmacy Student</option>
                  </select>
                  <div className="row">
                    <div className="col-sm-1">
                      <img src="images/hinticon.png" className="smallicon" alt="Hint icon" />
                    </div>
                    <div className="col-sm-11">
                      <span className="fw-bold navybluetext">This helps us keep track of who is using our website.</span>
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
