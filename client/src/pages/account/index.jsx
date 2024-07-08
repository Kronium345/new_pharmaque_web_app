import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { getImageUrl } from "../../utils";
import { useAuth } from "../../hooks";
import avatar10 from '../../assets/images/10.png';
import { useScreenTime } from "../../components/ScreenTime/ScreenTimeContext";


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

  const [lastScreenTime, setLastScreenTime] = useState(null);
  const [screenTimeDifference, setScreenTimeDifference] = useState(null);

  useEffect(() => {
    if (profile) {
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
                    <option value="University of Aberdeen">University of Aberdeen</option>
                    <option value="Abertay University">Abertay University</option>
                    <option value="Aberystwyth University">Aberystwyth University</option>
                    <option value="Anglia Ruskin University">Anglia Ruskin University</option>
                    <option value="Arden University">Arden University</option>
                    <option value="Aston University">Aston University</option>
                    <option value="Bangor University">Bangor University</option>
                    <option value="University of Bath">University of Bath</option>
                    <option value="Bath Spa University">Bath Spa University</option>
                    <option value="University of Bedfordshire">University of Bedfordshire</option>
                    <option value="BIMM University">BIMM University</option>
                    <option value="University of Birmingham">University of Birmingham</option>
                    <option value="Birmingham City University">Birmingham City University</option>
                    <option value="Birmingham Newman University">Birmingham Newman University</option>
                    <option value="University College Birmingham">University College Birmingham</option>
                    <option value="Bishop Grosseteste University">Bishop Grosseteste University</option>
                    <option value="University of Bolton">University of Bolton</option>
                    <option value="Arts University Bournemouth">Arts University Bournemouth</option>
                    <option value="Bournemouth University">Bournemouth University</option>
                    <option value="BPP University">BPP University</option>
                    <option value="University of Bradford">University of Bradford</option>
                    <option value="University of Brighton">University of Brighton</option>
                    <option value="University of Bristol">University of Bristol</option>
                    <option value="Brunel University London">Brunel University London</option>
                    <option value="University of Buckingham">University of Buckingham</option>
                    <option value="Buckinghamshire New University">Buckinghamshire New University</option>
                    <option value="University of Cambridge">University of Cambridge</option>
                    <option value="Canterbury Christ Church University">Canterbury Christ Church University</option>
                    <option value="Cardiff Metropolitan University">Cardiff Metropolitan University</option>
                    <option value="Cardiff University">Cardiff University</option>
                    <option value="University of Chester">University of Chester</option>
                    <option value="University of Chichester">University of Chichester</option>
                    <option value="Coventry University">Coventry University</option>
                    <option value="Cranfield University">Cranfield University</option>
                    <option value="University for the Creative Arts">University for the Creative Arts</option>
                    <option value="University of Cumbria">University of Cumbria</option>
                    <option value="De Montfort University">De Montfort University</option>
                    <option value="University of Derby">University of Derby</option>
                    <option value="University of Dundee">University of Dundee</option>
                    <option value="Durham University">Durham University</option>
                    <option value="University of East Anglia">University of East Anglia</option>
                    <option value="University of East London">University of East London</option>
                    <option value="Edge Hill University">Edge Hill University</option>
                    <option value="University of Edinburgh">University of Edinburgh</option>
                    <option value="Edinburgh Napier University">Edinburgh Napier University</option>
                    <option value="University of Essex">University of Essex</option>
                    <option value="University of Exeter">University of Exeter</option>
                    <option value="Falmouth University">Falmouth University</option>
                    <option value="University of Glasgow">University of Glasgow</option>
                    <option value="Glasgow Caledonian University">Glasgow Caledonian University</option>
                    <option value="University of Gloucestershire">University of Gloucestershire</option>
                    <option value="University of Greenwich">University of Greenwich</option>
                    <option value="Harper Adams University">Harper Adams University</option>
                    <option value="Hartpury University">Hartpury University</option>
                    <option value="Heriot-Watt University">Heriot-Watt University</option>
                    <option value="University of Hertfordshire">University of Hertfordshire</option>
                    <option value="University of the Highlands and Islands">University of the Highlands and Islands</option>
                    <option value="University of Huddersfield">University of Huddersfield</option>
                    <option value="University of Hull">University of Hull</option>
                    <option value="Imperial College London">Imperial College London</option>
                    <option selected>Select Your University</option>
                    <option value="Keele University">Keele University</option>
                    <option value="University of Kent">University of Kent</option>
                    <option value="Kingston University">Kingston University</option>
                    <option value="University of Central Lancashire">University of Central Lancashire</option>
                    <option value="Lancaster University">Lancaster University</option>
                    <option value="University of Leeds">University of Leeds</option>
                    <option value="Leeds Arts University">Leeds Arts University</option>
                    <option value="Leeds Beckett University">Leeds Beckett University</option>
                    <option value="Leeds Trinity University">Leeds Trinity University</option>
                    <option value="University of Leicester">University of Leicester</option>
                    <option value="University of Lincoln">University of Lincoln</option>
                    <option value="University of Liverpool">University of Liverpool</option>
                    <option value="Liverpool Hope University">Liverpool Hope University</option>
                    <option value="Liverpool John Moores University">Liverpool John Moores University</option>
                    <option value="University of London">University of London</option>
                    <option value="London Metropolitan University">London Metropolitan University</option>
                    <option value="London School of Economics">London School of Economics</option>
                    <option value="London South Bank University">London South Bank University</option>
                    <option value="Loughborough University">Loughborough University</option>
                    <option value="University of Manchester">University of Manchester</option>
                    <option value="Manchester Metropolitan University">Manchester Metropolitan University</option>
                    <option value="Middlesex University">Middlesex University</option>
                    <option value="Newcastle University">Newcastle University</option>
                    <option value="University of Northampton">University of Northampton</option>
                    <option value="Northeastern University – London">Northeastern University – London</option>
                    <option value="Northumbria University">Northumbria University</option>
                    <option value="Norwich University of the Arts">Norwich University of the Arts</option>
                    <option value="University of Nottingham">University of Nottingham</option>
                    <option value="Nottingham Trent University">Nottingham Trent University</option>
                    <option value="The Open University">The Open University</option>
                    <option value="University of Oxford">University of Oxford</option>
                    <option value="Oxford Brookes University">Oxford Brookes University</option>
                    <option value="Plymouth Marjon University">Plymouth Marjon University</option>
                    <option value="Arts University Plymouth">Arts University Plymouth</option>
                    <option value="University of Plymouth">University of Plymouth</option>
                    <option value="University of Portsmouth">University of Portsmouth</option>
                    <option value="Queen Margaret University">Queen Margaret University</option>
                    <option value="Queen's University Belfast">Queen's University Belfast</option>
                    <option value="Ravensbourne University">Ravensbourne University</option>
                    <option value="University of Reading">University of Reading</option>
                    <option value="Regent's University London">Regent's University London</option>
                    <option value="Richmond American University London">Richmond American University London</option>
                    <option value="Robert Gordon University">Robert Gordon University</option>
                    <option value="Roehampton University">Roehampton University</option>
                    <option value="Royal Agricultural University">Royal Agricultural University</option>
                    <option value="Royal Holloway, University of London">Royal Holloway, University of London</option>
                    <option value="University of Salford">University of Salford</option>
                    <option value="University of Sheffield">University of Sheffield</option>
                    <option value="Sheffield Hallam University">Sheffield Hallam University</option>
                    <option value="University of South Wales">University of South Wales</option>
                    <option value="University of Southampton">University of Southampton</option>
                    <option value="Solent University">Solent University</option>
                    <option value="University of St Andrews">University of St Andrews</option>
                    <option value="St George's, University of London">St George's, University of London</option>
                    <option value="St Mary's University, Twickenham">St Mary's University, Twickenham</option>
                    <option value="Staffordshire University">Staffordshire University</option>
                    <option value="University of Stirling">University of Stirling</option>
                    <option value="University of Strathclyde">University of Strathclyde</option>
                    <option value="University of Suffolk">University of Suffolk</option>
                    <option value="University of Sunderland">University of Sunderland</option>
                    <option value="University of Surrey">University of Surrey</option>
                    <option value="University of Sussex">University of Sussex</option>
                    <option value="Swansea University">Swansea University</option>
                    <option value="Teesside University">Teesside University</option>
                    <option value="University of the Arts London">University of the Arts London</option>
                    <option value="Ulster University">Ulster University</option>
                    <option value="University of Law">University of Law</option>
                    <option value="University of Wales">University of Wales</option>
                    <option value="University of Wales Trinity Saint David">University of Wales Trinity Saint David</option>
                    <option value="University of Warwick">University of Warwick</option>
                    <option value="University of the West of England">University of the West of England</option>
                    <option value="University of the West of Scotland">University of the West of Scotland</option>
                    <option value="University of West London">University of West London</option>
                    <option value="University of Westminster">University of Westminster</option>
                    <option value="University of Winchester">University of Winchester</option>
                    <option value="University of Wolverhampton">University of Wolverhampton</option>
                    <option value="University of Worcester">University of Worcester</option>
                    <option value="Wrexham Glyndŵr University">Wrexham Glyndŵr University</option>
                    <option value="University of York">University of York</option>
                    <option value="York St John University">York St John University</option>
                    <option value="AECC University College">AECC University College</option>
                    <option value="University College of Estate Management">University College of Estate Management</option>
                    <option value="University College of Osteopathy">University College of Osteopathy</option>
                    <option value="Writtle University College">Writtle University College</option>
                    <option value="Birkbeck, University of London">Birkbeck, University of London</option>
                    <option value="City, University of London">City, University of London</option>
                    <option value="Royal Central School of Speech and Drama">Royal Central School of Speech and Drama</option>
                    <option value="The Courtauld Institute of Art">The Courtauld Institute of Art</option>
                    <option value="Goldsmiths, University of London">Goldsmiths, University of London</option>
                    <option value="Institute of Cancer Research">Institute of Cancer Research</option>
                    <option value="King’s College London">King’s College London</option>
                    <option value="London Business School">London Business School</option>
                    <option value="London School of Hygiene and Tropical Medicine">London School of Hygiene and Tropical Medicine</option>
                    <option value="Queen Mary University of London">Queen Mary University of London</option>
                    <option value="Royal Academy of Music">Royal Academy of Music</option>
                    <option value="Royal Veterinary College">Royal Veterinary College</option>
                    <option value="SOAS University of London">SOAS University of London</option>
                    <option value="University College London">University College London</option>
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
