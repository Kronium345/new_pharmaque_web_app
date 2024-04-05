import React from "react";
import { Link, useLocation } from "react-router-dom";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";

export default function SideBar() {
  const location = useLocation();

  const path = location.pathname;

  return (
    <>
      <Link class="navbar-brand" to="/dashboard">
        <img src="/images/Logo.png" alt="PharmaQue Logo" class="logo1" />
        <span class="fs-4 fw-bold mx-3">PharmaQue</span>
      </Link>
      {data.map((item) => {
        return (
          <Link to={item.path} class="removeunderline activelink">
            <p class="py-3 m-0">
              {!item.icon ? (
                <img
                  src={path === item.path ? item.activeIcon : item.inActiveIcon}
                  class="navigationicon"
                  alt="navigation"
                />
              ) : path === item.path ? (
                item.activeIcon
              ) : (
                item.inActiveIcon
              )}
              <span class="fs-5 navigationoption mx-4">{item.name}</span>
            </p>
          </Link>
        );
      })}
    </>
  );
}

const data = [
  {
    id: 1,
    path: "/dashboard",
    activeIcon: "/images/DashboardColor.png",
    inActiveIcon: "/images/DashboardGrey.png",
    name: "Dashboard",
  },
  {
    id: 2,
    path: "/chapters",
    activeIcon: "/images/ChaptersColour.png",
    inActiveIcon: "/images/ChaptersGrey.png",
    name: "Chapters",
  },
  {
    id: 3,
    path: "/flashcards",
    activeIcon: "/images/FlashcardsColour.png",
    inActiveIcon: "/images/FlashcardsGrey.png",
    name: "Flashcards",
  },
  {
    id: 4,
    path: "/flaggedquestions",
    activeIcon: "/images/FlaggedQuestionsColour.png",
    inActiveIcon: "/images/FlaggedQuestionsGrey.png",
    name: "Flagged Questions",
  },
  {
    id: 5,
    path: "/pastchapters",
    activeIcon: "/images/PastChaptersColour.png",
    inActiveIcon: "/images/PastChaptersGrey.png",
    name: "Past Chapters",
  },
  {
    id: 6,
    path: "/upcomingevents",
    activeIcon: "/images/UpcomingEventsColour.png",
    inActiveIcon: "/images/UpcomingEventsGrey.png",
    name: "Upcoming Events",
  },
  {
    id: 7,
    path: "/queryresponses",
    activeIcon: "/images/QueryResponsesColour.png",
    inActiveIcon: "/images/QueryResponsesGrey.png",
    name: "Query Responses",
  },

  {
    id: 9,
    path: "/chat-room",
    activeIcon: <IoChatbubbleEllipsesOutline fontSize={45} color={"#1d3354"} />,
    inActiveIcon: (
      <IoChatbubbleEllipsesOutline fontSize={45} color={"#bfc0c0"} />
    ),
    name: "Chat",
    icon: true,
  },
  {
    id: 10,
    path: "/ai-chat",
    activeIcon: <RiWechatLine fontSize={45} color={"#1d3354"} />,
    inActiveIcon: <RiWechatLine fontSize={45} color={"#bfc0c0"} />,
    name: "AI Chat",
    icon: true,
  },
  {
    id: 8,
    path: "/myaccount",
    activeIcon: "/images/AccountColour.png",
    inActiveIcon: "/images/AccountGrey.png",
    name: "My Account",
  },
];
