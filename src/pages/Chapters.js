import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

const Chapters = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredChapters, setFilteredChapters] = useState(CHAPTERS)

  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios.get("http://localhost:7171/auth/verify").then((res) => {
  //     if (!res.data.status) {
  //       navigate("/myaccount");
  //     }
  //     console.log(res);
  //   });
  // }, [navigate]);

  useEffect(() => {
    const result = CHAPTERS.map((group) =>
      group.filter((chapter) =>
        chapter.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).filter((group) => group.length > 0) // This will remove any empty groups after filtering
    setFilteredChapters(result)
  }, [searchQuery])

  const handleStart = (chapter) => {
    localStorage.setItem("chapter", JSON.stringify(chapter))
    localStorage.setItem("chapterScore", "")
    navigate(chapter.link)
  }

  return (
    <main>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-3 leftnavigation p-4">
            <Link to="/dashboard" class="removeunderline inactivelink">
              <p class="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersColour.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Chapters</span>
              </p>
            </Link>
            <Link to="/flashcards" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlashcardsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Flashcards</span>
              </p>
            </Link>
            <Link to="/flaggedquestions" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlaggedQuestionsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">
                  Flagged Questions
                </span>
              </p>
            </Link>
            <Link to="/pastchapters" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/PastChaptersGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Past Chapters</span>
              </p>
            </Link>
            <Link to="/upcomingevents" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/UpcomingEventsGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
              </p>
            </Link>
            <Link to="/queryresponses" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/QueryResponsesGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Query Responses</span>
              </p>
            </Link>
            <Link to="/myaccount" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/AccountGrey.png"
                  class="navigationicon"
                  alt="navigation"
                />
                <span class="fs-5 navigationoption mx-4">Account</span>
              </p>
            </Link>
          </div>
          <div className="col-sm-9 p-4 maincontent">
            <p className="fs-4 mt-4 fw-bold navybluetext">Chapters</p>
            <div className="row">
              <div className="col-sm-12">
                <div className="card p-4">
                  <form className="d-flex mb-3" role="search">
                    <div className="input-group">
                      <span className="input-group-text">
                        <img
                          src="images/SearchIcon.png"
                          className="smallericon mx-1"
                          alt="navigation"
                        />
                      </span>
                      <input
                        className="form-control px-2 py-2"
                        type="search"
                        placeholder="Search Chapter Name"
                        aria-label="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </form>

                  {filteredChapters.map((group, index) => (
                    <div className="row" key={index}>
                      {group.map((chapter, idx) => (
                        <div className="col-sm-6 mb-3" key={idx}>
                          <div className="card p-4 mediumbluebg">
                            <div className="row">
                              <div className="col-sm-3">
                                <img
                                  src={chapter.image}
                                  className="icon"
                                  alt="icon"
                                />
                              </div>
                              <div className="col-sm-9">
                                <p className="fs-5 fw-bold whitetext mb-1">
                                  {chapter.name}
                                </p>
                                <p className="fs-6 whitetext mb-3">
                                  {chapter.questionsAttempted}
                                </p>

                                <button
                                  onClick={() => handleStart(chapter)}
                                  className="btn removeunderline boldtext navybluetext fw-bold"
                                >
                                  <div className="px-3 py-2 whitebg pseudobutton">
                                    Start Chapter
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Chapters

// Assume CHAPTERS is defined elsewhere in your code.
const CHAPTERS = [
  [
    {
      name: "Gastrointestinal System",
      image: "images/GastroIcon.png",
      questionsAttempted: "5/100 Questions Attempted",
      link: "",
    },
    {
      name: "Cardiovascular System",
      image: "images/CardioIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/cardioquestion",
    },
  ],
  [
    {
      name: "Respiratory System",
      image: "images/RespiratoryIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/respiratoryquestion",
    },
    {
      name: "Central Nervous System",
      image: "images/CNSIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/cnsquestion",
    },
  ],
  [
    {
      name: "Infections",
      image: "images/InfectionsIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/infectionquestion",
    },
    {
      name: "Endocrine",
      image: "images/EndocrineIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/endocrinequestion",
    },
  ],
  [
    {
      name: "Obstetrics, Gynaecology and Genitourinary tract",
      image: "images/GynaecologyIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/oguquestion",
    },
    {
      name: "Malignant Disease and Immunosuppression",
      image: "images/MalignantIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/mdiquestion",
    },
  ],
  [
    {
      name: "Nutrition and Blood",
      image: "images/BloodIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/nbquestion",
    },
    {
      name: "Ophthalmology",
      image: "images/EyeIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/ophthalmologyquestion",
    },
  ],
  [
    {
      name: "Skin",
      image: "images/SkinIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/skinquestion",
    },
    {
      name: "Anaesthesia",
      image: "images/AnaesthesiaIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/anaesthesiaquestion",
    },
  ],
  [
    {
      name: "Immunological products and vaccines",
      image: "images/ImmunoIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/ipvquestion",
    },

    {
      name: "Musculoskeletal & Joint diseases",
      image: "images/MusculoIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "/mskquestion",
    },
  ],
  [
    {
      name: "Ear, Nose and Throat",
      image: "images/ENTIcon.png",
      questionsAttempted: "0/100 Questions Attempted",
      link: "",
    },
  ],
]
