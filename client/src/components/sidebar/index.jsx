import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../../hooks";
import { useScreenTime } from "../ScreenTime/ScreenTimeContext";

export default function SideBar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const { logout } = useAuth();
  const { resetScreenTime } = useScreenTime();
  const path = location.pathname;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}>
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
        {sidebarOpen && (
          <Link className="navbar-brand" to="/dashboard" style={{ marginLeft: '10px' }}>
            <img src="/images/Logo.png" alt="PharmaQue Logo" className="logo1" />
            <span className="fs-4 fw-bold mx-3">PharmaQue</span>
          </Link>
        )}
      </div>
      <div
        style={{
          width: sidebarOpen ? '200px' : '0', // Adjusted width to be narrower
          transition: 'width 0.3s',
          overflow: 'hidden',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: '10px',
        }}
      >
        {sidebarOpen && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Link to="/dashboard" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/dashboard" ? "/images/DashboardColor.png" : "/images/DashboardGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Dashboard</span>
                </p>
              </Link>
              <Link to="/chapters" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/chapters" ? "/images/ChaptersColour.png" : "/images/ChaptersGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Chapters</span>
                </p>
              </Link>
              <Link to="/flashcards" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/flashcards" ? "/images/FlashcardsColour.png" : "/images/FlashcardsGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Flashcards</span>
                </p>
              </Link>
              <Link to="/flaggedquestions" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/flaggedquestions" ? "/images/FlaggedQuestionsColour.png" : "/images/FlaggedQuestionsGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Flagged Questions</span>
                </p>
              </Link>
              <Link to="/pastchapters" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/pastchapters" ? "/images/PastChaptersColour.png" : "/images/PastChaptersGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Past Chapters</span>
                </p>
              </Link>
              <Link to="/upcomingevents" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/upcomingevents" ? "/images/UpcomingEventsColour.png" : "/images/UpcomingEventsGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Upcoming Events</span>
                </p>
              </Link>
              <Link to="/queryresponses" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/queryresponses" ? "/images/QueryResponsesColour.png" : "/images/QueryResponsesGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Query Responses</span>
                </p>
              </Link>

              <Link to="/chat-room" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <IoChatbubbleEllipsesOutline fontSize={45} color={"#1d3354"} />
                  <span className="fs-5 navigationoption mx-4">Chat</span>
                </p>
              </Link>
              <Link to="/ai-chat" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <RiWechatLine fontSize={45} color={"#1d3354"} />
                  <span className="fs-5 navigationoption mx-4">AI Chat</span>
                </p>
              </Link>
              <Link to="/myaccount" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '20px' }}>
                  <img src={path === "/myaccount" ? "/images/AccountColour.png" : "/images/AccountGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">My Account</span>
                </p>
              </Link>
            </div>
            {sidebarOpen && (
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button
                  className="btn btn-tertiary fs-5 fw-bold mb-5"
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    maxWidth: '120px',
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
