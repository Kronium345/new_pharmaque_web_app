import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";
import { useLoading } from "../../hooks";
import { FaLock } from "react-icons/fa";

const Chapters = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [attempted, setAttempted] = useState([]);
  const [userSubscription, setUserSubscription] = useState("Free");

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((chapter) =>
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  useEffect(() => {
    // Fetch initial data and user subscription on load
    getData();
    getAttemptedChapters();
    fetchUserSubscription();
  }, []);

// Fetches the user's subscription plan from the backend
const fetchUserSubscription = async () => {
  try {
    const response = await axios.get("/auth/get-profile");
    const subscriptionPlan = response.data.user.subscriptionPlan;
    
    console.log("Fetched subscription plan from backend:", subscriptionPlan); // Log the fetched plan

    if (subscriptionPlan) {
      setUserSubscription(subscriptionPlan);
      console.log("User subscription plan set to:", subscriptionPlan); // Confirm state update
    } else {
      console.warn("No subscription plan set for the user. Please check the backend.");
    }
  } catch (error) {
    console.error("Error fetching user subscription:", error);
  }
};



  // Fetches the list of chapters
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/chapter");
      if (response.data.status) {
        let chapters = response.data.chapters;
        // Sort so "Sample Questions" appears at the top
        chapters = chapters.sort((a, b) => {
          if (a.name === "Sample Questions") return -1;
          if (b.name === "Sample Questions") return 1;
          return 0;
        });
        setData(chapters);
      }
    } catch (error) {
      console.error("Error fetching chapters:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetches attempted chapters
  const getAttemptedChapters = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/cquiz/get");
      if (response.data.status) {
        setAttempted(response.data.cQuiz);
      }
    } catch (error) {
      console.error("Error fetching attempted chapters:", error);
    } finally {
      setLoading(false);
    }
  };

  // Starts a chapter if the user has access, otherwise prompts to upgrade
  const handleStart = async (chapter) => {
    const isLocked = userSubscription === "Free" && chapter.name !== "Sample Questions";
    
    if (isLocked) {
      alert("Upgrade to access more chapters");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("cquiz/create", { chapter: chapter._id });
      if (response.data.status) {
        const { cQuiz } = response.data;
        navigate("/chapter/" + cQuiz._id);
      }
    } catch (error) {
      console.error("Error starting chapter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="fs-4 mt-4 fw-bold navybluetext">Chapters</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-4">
            <form className="d-flex mb-3" role="search">
              <div className="input-group">
                <span className="input-group-text">
                  <img src="/images/SearchIcon.png" className="smallericon mx-1" alt="navigation" />
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

            <div className="row">
              {filteredChapters.map((chapter, idx) => {
                if (!chapter) return null;
                const isLocked = userSubscription === "Free" && chapter.name !== "Sample Questions";

                return (
                  <div className="col-sm-6 mb-3 d-flex" key={idx}>
                    <div
                      className={`card p-4 h-100 w-100 d-flex flex-column ${isLocked ? "grayed-out" : "mediumbluebg"}`}
                      style={{
                        backgroundColor: isLocked ? "#f0f0f0" : "#1d3354",
                        color: isLocked ? "#a0a0a0" : "#ffffff",
                      }}
                    >
                      <div className="row flex-grow-1">
                        <div className="col-sm-3">
                          <img
                            src={getImageUrl(chapter.image)}
                            className="icon"
                            alt="icon"
                            style={{
                              borderRadius: "8px",
                              width: "100%",
                              height: "auto",
                              filter: isLocked ? "grayscale(100%)" : "none",
                            }}
                          />
                        </div>
                        <div className="col-sm-9">
                          <p className="fs-5 fw-bold mb-1">
                            {chapter.name}
                            {isLocked && <FaLock style={{ marginLeft: "10px" }} />}
                          </p>
                          <p className="fs-6 mb-3">{attempted.find((cQuiz) => cQuiz.chapter === chapter._id)?.attemptedQuestions || 0} Questions Attempted</p>
                          <div className="mt-auto">
                            <button
                              onClick={() => handleStart(chapter)}
                              className="btn removeunderline boldtext fw-bold"
                              disabled={isLocked}
                              style={{
                                backgroundColor: isLocked ? "#d0d0d0" : "#ffffff",
                                color: isLocked ? "#a0a0a0" : "#1d3354",
                                cursor: isLocked ? "not-allowed" : "pointer",
                              }}
                            >
                              <div className="px-3 py-2">
                                {attempted.some((cQuiz) => cQuiz.chapter === chapter._id) ? "Resume" : "Start"} Chapter
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapters;
