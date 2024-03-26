import React from "react"
class SignUp2 extends React.Component {
  render() {
    return (
      <main>
        <body class="mainbg p-4">
          <div class="container-fluid p-4">
            <a class="navbar-brand" href="index.html">
              <img src="images/Logo.png" alt="PharmaQue Logo" class="logo" />
              <span class="fs-3 fw-bold mx-3">PharmaQue</span>
            </a>
          </div>
          <div class="container-fluid">
            <div class="row p-5">
              <div class="col-sm-6 p-5 leftside">
                <img
                  src="images/UniversityImage.png"
                  class="img-fluid exampleimage"
                />
              </div>
              <div class="col-sm-6 p-5 rightside">
                <div class="progress mb-3" role="progressbar">
                  <div class="progress-bar" style={{ width: "20%" }}>
                    20%
                  </div>
                </div>

                <h1 class="h3 fw-bold leftalign">
                  Which university did you attend?
                </h1>
                <p class="fs-5 leftalign">
                  Tell us about your university. Unlock tailored content and
                  resources!
                </p>

                <form>
                  <select class="form-select py-2 mb-3">
                    <option selected>Select Your University</option>
                    <option value="1">University of Aberdeen</option>
                    <option value="2">Abertay University</option>
                    <option value="3">Aberystwyth University</option>
                    <option value="4">Anglia Ruskin University</option>
                    <option value="5">Arden University</option>
                    <option value="6">Aston University</option>
                    <option value="7">Bangor University</option>
                    <option value="8">University of Bath</option>
                    <option value="9">Bath Spa University</option>
                    <option value="10">University of Bedfordshire</option>
                    <option value="11">BIMM University</option>
                    <option value="12">University of Birmingham</option>
                    <option value="13">Birmingham City University</option>
                    <option value="14">Birmingham Newman University</option>
                    <option value="15">University College Birmingham</option>
                    <option value="16">Bishop Grosseteste University</option>
                    <option value="17">University of Bolton</option>
                    <option value="18">Arts University Bournemouth</option>
                    <option value="19">Bournemouth University</option>
                    <option value="20">BPP University</option>
                    <option value="21">University of Bradford</option>
                    <option value="22">University of Brighton</option>
                    <option value="23">University of Bristol</option>
                    <option value="24">Brunel University London</option>
                    <option value="25">University of Buckingham</option>
                    <option value="26">Buckinghamshire New University</option>
                    <option value="27">University of Cambridge</option>
                    <option value="28">
                      Canterbury Christ Church University
                    </option>
                    <option value="29">Cardiff Metropolitan University</option>
                    <option value="30">Cardiff University</option>
                    <option value="31">University of Chester</option>
                    <option value="32">University of Chichester</option>
                    <option value="33">Coventry University</option>
                    <option value="34">Cranfield University</option>
                    <option value="35">University for the Creative Arts</option>
                    <option value="36">University of Cumbria</option>
                    <option value="37">De Montfort University</option>
                    <option value="38">University of Derby</option>
                    <option value="39">University of Dundee</option>
                    <option value="40">Durham University</option>
                    <option value="41">University of East Anglia</option>
                    <option value="42">University of East London</option>
                    <option value="43">Edge Hill University</option>
                    <option value="44">University of Edinburgh</option>
                    <option value="45">Edinburgh Napier University</option>
                    <option value="46">University of Essex</option>
                    <option value="47">University of Exeter</option>
                    <option value="48">Falmouth University</option>
                    <option value="49">University of Glasgow</option>
                    <option value="50">Glasgow Caledonian University</option>
                    <option value="51">University of Gloucestershire</option>
                    <option value="52">University of Greenwich</option>
                    <option value="53">Harper Adams University</option>
                    <option value="54">Hartpury University</option>
                    <option value="55">Heriot-Watt University</option>
                    <option value="56">University of Hertfordshire</option>
                    <option value="57">
                      University of the Highlands and Islands
                    </option>
                    <option value="58">University of Huddersfield</option>
                    <option value="59">University of Hull</option>
                    <option value="60">Imperial College London</option>
                    <option value="61">Keele University</option>
                    <option value="62">University of Kent</option>
                    <option value="63">Kingston University</option>
                    <option value="64">University of Central Lancashire</option>
                    <option value="65">Lancaster University</option>
                    <option value="66">University of Leeds</option>
                    <option value="67">Leeds Arts University</option>
                    <option value="68">Leeds Beckett University</option>
                    <option value="69">Leeds Trinity University</option>
                    <option value="70">University of Leicester</option>
                    <option value="71">University of Lincoln</option>
                    <option value="72">University of Liverpool</option>
                    <option value="73">Liverpool Hope University</option>
                    <option value="74">Liverpool John Moores University</option>
                    <option value="75">University of London</option>
                    <option value="76">London Metropolitan University</option>
                    <option value="77">London School of Economics</option>
                    <option value="78">London South Bank University</option>
                    <option value="79">Loughborough University</option>
                    <option value="80">University of Manchester</option>
                    <option value="81">
                      Manchester Metropolitan University
                    </option>
                    <option value="82">Middlesex University</option>
                    <option value="83">Newcastle University</option>
                    <option value="84">University of Northampton</option>
                    <option value="85">Northeastern University – London</option>
                    <option value="86">Northumbria University</option>
                    <option value="87">Norwich University of the Arts</option>
                    <option value="88">University of Nottingham</option>
                    <option value="89">Nottingham Trent University</option>
                    <option value="90">The Open University</option>
                    <option value="91">University of Oxford</option>
                    <option value="92">Oxford Brookes University</option>
                    <option value="93">Plymouth Marjon University</option>
                    <option value="94">Arts University Plymouth</option>
                    <option value="95">University of Plymouth</option>
                    <option value="96">University of Portsmouth</option>
                    <option value="97">Queen Margaret University</option>
                    <option value="98">Queen's University Belfast</option>
                    <option value="99">Ravensbourne University</option>
                    <option value="100">University of Reading</option>
                    <option value="101">Regent's University London</option>
                    <option value="102">
                      Richmond American University London
                    </option>
                    <option value="103">Robert Gordon University</option>
                    <option value="104">Roehampton University</option>
                    <option value="105">Royal Agricultural University</option>
                    <option value="106">
                      Royal Holloway, University of London
                    </option>
                    <option value="107">University of Salford</option>
                    <option value="108">University of Sheffield</option>
                    <option value="109">Sheffield Hallam University</option>
                    <option value="110">University of South Wales</option>
                    <option value="111">University of Southampton</option>
                    <option value="112">Solent University</option>
                    <option value="113">University of St Andrews</option>
                    <option value="114">
                      St George's, University of London
                    </option>
                    <option value="115">
                      St Mary's University, Twickenham
                    </option>
                    <option value="116">Staffordshire University</option>
                    <option value="117">University of Stirling</option>
                    <option value="118">University of Strathclyde</option>
                    <option value="119">University of Suffolk</option>
                    <option value="120">University of Sunderland</option>
                    <option value="121">University of Surrey</option>
                    <option value="122">University of Sussex</option>
                    <option value="123">Swansea University</option>
                    <option value="124">Teesside University</option>
                    <option value="125">University of the Arts London</option>
                    <option value="126">Ulster University</option>
                    <option value="127">University of Law</option>
                    <option value="128">University of Wales</option>
                    <option value="129">
                      University of Wales Trinity Saint David
                    </option>
                    <option value="130">University of Warwick</option>
                    <option value="131">
                      University of the West of England
                    </option>
                    <option value="132">
                      University of the West of Scotland
                    </option>
                    <option value="133">University of West London</option>
                    <option value="134">University of Westminster</option>
                    <option value="135">University of Winchester</option>
                    <option value="136">University of Wolverhampton</option>
                    <option value="137">University of Worcester</option>
                    <option value="138">Wrexham Glyndŵr University</option>
                    <option value="139">University of York</option>
                    <option value="140">York St John University</option>
                    <option value="141">AECC University College</option>
                    <option value="142">
                      University College of Estate Management
                    </option>
                    <option value="143">
                      University College of Osteopathy
                    </option>
                    <option value="144">Writtle University College</option>
                    <option value="145">Birkbeck, University of London</option>
                    <option value="146">City, University of London</option>
                    <option value="147">
                      Royal Central School of Speech and Drama
                    </option>
                    <option value="148">The Courtauld Institute of Art</option>
                    <option value="149">
                      Goldsmiths, University of London
                    </option>
                    <option value="150">Institute of Cancer Research</option>
                    <option value="151">King’s College London</option>
                    <option value="152">London Business School</option>
                    <option value="153">London School of Economics</option>
                    <option value="154">
                      London School of Hygiene and Tropical Medicine
                    </option>
                    <option value="155">Queen Mary University of London</option>
                    <option value="156">Royal Academy of Music</option>
                    <option value="157">
                      Royal Holloway, University of London
                    </option>
                    <option value="158">Royal Veterinary College</option>
                    <option value="159">SOAS University of London</option>
                    <option value="160">University College London</option>
                  </select>

                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control py-2"
                      placeholder="If other, please specify"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary fw-bold fs-5">
                    Previous
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary fw-bold fs-5 mx-3"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"
          ></script>
          <script src="script.js"></script>
        </body>
      </main>
    )
  }
}

export default SignUp2
