import { Link, Outlet } from "react-router-dom";

import { useState } from "react";

import SideBar from "@components/sidebar";

export default function Layout() {
  return (
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-sm-3 leftnavigation p-4">
          <Link class="navbar-brand" to="/dashboard">
            <img src="images/Logo.png" alt="PharmaQue Logo" class="logo1" />
            <span class="fs-4 fw-bold mx-3">PharmaQue</span>
          </Link>
          <Link to="/dashboard" class="removeunderline activelink">
            <p class="pt-5 pb-3 m-0">
              <img
                src="images/DashboardColor.png"
                class="navigationicon"
                alt="navigation"
              />
              <span class="fs-5 navigationoption mx-4">Dashboard</span>
            </p>
          </Link>
          <Link to="/chapters" class="removeunderline inactivelink">
            <p class="py-3 m-0">
              <img
                src="images/ChaptersGrey.png"
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
              <span class="fs-5 navigationoption mx-4">Flagged Questions</span>
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
          <Link to="/chat-room" class="removeunderline inactivelink">
            <p class="py-3 m-0">
              <img
                src="https://cdn-icons-png.freepik.com/512/8735/8735217.png"
                class="navigationicon"
                alt="navigation"
              />
              <span class="fs-5 navigationoption mx-4">Chat Room</span>
            </p>
          </Link>
          <Link to="/ai-chat" class="removeunderline inactivelink">
            <p class="py-3 m-0">
              <img
                src="https://cdn-icons-png.freepik.com/512/8735/8735217.png"
                class="navigationicon"
                alt="navigation"
              />
              <span class="fs-5 navigationoption mx-4">AI Chat</span>
            </p>
          </Link>
        </div>
        <div class="col-sm-9 p-4 maincontent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
