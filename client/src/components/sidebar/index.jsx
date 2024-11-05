import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { useAuth } from "../../hooks";
import { useScreenTime } from "../ScreenTime/ScreenTimeContext";
import chatImage from '../../assets/images/Chat.png';
import aiChatImage from '../../assets/images/AIChat.png';
import chatImageGrey from '../../assets/images/ChatGrey.png';
import aiChatImageGrey from '../../assets/images/AIChatGrey.png';
import chatImageDisabled from '../../assets/images/ChatDisabled.png';
import aiChatImageDisabled from '../../assets/images/AIChatDisabled.png';
import upcomingEventsDisabled from '../../assets/images/UpcomingEventsDisabled.png';

export default function SideBar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const { user } = useAuth();
  const { logout } = useAuth();
  const { resetScreenTime } = useScreenTime();
  const path = location.pathname;
  const userSubscriptionLevel = user?.subscriptionLevel || 1; // Default to level 1 (Free) if not set

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const greyedOutStyle = {
    color: "#DBDCDA",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px",
    textDecoration: "none",
    pointerEvents: "none",
  };

  const lockIconStyle = {
    marginLeft: "10px",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px",
    textDecoration: "none",
    color: "#BFC0C0",
  };

  const activeLinkStyle = {
    color: "#1D3354",
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
          width: sidebarOpen ? '200px' : '0',
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
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/dashboard" && activeLinkStyle) }}>
                  <img src={path === "/dashboard" ? "/images/DashboardColor.png" : "/images/DashboardGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Dashboard</span>
                </p>
              </Link>
              <Link to="/chapters" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/chapters" && activeLinkStyle) }}>
                  <img src={path === "/chapters" ? "/images/ChaptersColour.png" : "/images/ChaptersGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Chapters</span>
                </p>
              </Link>
              <Link to={userSubscriptionLevel === 3 ? "/flashcards" : "#"} className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/flashcards" && activeLinkStyle) }}>
                  <img src={path === "/flashcards" ? "/images/FlashcardsColour.png" : "/images/FlashcardsGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Flashcards</span>
                  {userSubscriptionLevel !== 3 && <FaLock style={lockIconStyle} />}
                </p>
              </Link>
              <Link to="/flaggedquestions" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/flaggedquestions" && activeLinkStyle) }}>
                  <img src={path === "/flaggedquestions" ? "/images/FlaggedQuestionsColour.png" : "/images/FlaggedQuestionsGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Flagged Questions</span>
                </p>
              </Link>
              <Link to="/pastchapters" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/pastchapters" && activeLinkStyle) }}>
                  <img src={path === "/pastchapters" ? "/images/PastChaptersColour.png" : "/images/PastChaptersGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Past Chapters</span>
                </p>
              </Link>
              <div style={greyedOutStyle}>
                <p className="py-3 m-0">
                  <img src={upcomingEventsDisabled} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-3">Upcoming Events</span>
                  <FaLock style={lockIconStyle} />
                </p>
              </div>
              <Link to="/queryresponses" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/queryresponses" && activeLinkStyle) }}>
                  <img src={path === "/queryresponses" ? "/images/QueryResponsesColour.png" : "/images/QueryResponsesGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">Query Responses</span>
                </p>
              </Link>
              <div style={greyedOutStyle}>
                <p className="py-3 m-0">
                  <img src={chatImageDisabled} alt="Chat" className="navigationicon" />
                  <span className="fs-5 navigationoption mx-3">Chat</span>
                </p>
              </div>
              <div style={greyedOutStyle}>
                <p className="py-3 m-0">
                  <img src={aiChatImageDisabled} alt="AIChat" className="navigationicon" />
                  <span className="fs-5 navigationoption mx-3">AI Chat</span>
                </p>
              </div>
              <Link to="/myaccount" className="removeunderline activelink">
                <p className="py-3 m-0" style={{ ...linkStyle, ...(path === "/myaccount" && activeLinkStyle) }}>
                  <img src={path === "/myaccount" ? "/images/AccountColour.png" : "/images/AccountGrey.png"} className="navigationicon" alt="navigation" />
                  <span className="fs-5 navigationoption mx-4">My Account</span>
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
