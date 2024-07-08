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
              <button type="submit" className="btn btn-primary fw-bold fs-5">Next</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp2;
