import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "@components/spinner";
import useAuth from "@hooks/useAuth";
import Chapters from "../pages/chapters";
import ChapterDetail from "../pages/chapters/detail";
import FlashCards from "../pages/flashCard";
import FlashCardDetail from "../pages/flashCard/detail";

const SignUpPage = lazy(() => import("../pages/auth/signup"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/forgetPassword"));
const UpcomingEventsPage = lazy(() => import("../pages/events"));
const AIChat = lazy(() => import("../pages/chat/aiChat"));
const ChatRoom = lazy(() => import("../pages/chat/chatRoom"));
const QueryResponses = lazy(() => import("../pages/queryResponse"));
const PastChapters = lazy(() => import("../pages/chapters/past"));
const FlaggedQuestions = lazy(() => import("../pages/question/flagged"));
const Layout = lazy(() => import("@routes/layout"));
const LoginPage = lazy(() => import("../pages/auth/login"));
const HomePage = lazy(() => import("../pages/home"));
const AccountPage = lazy(() => import("../pages/account"));

export default function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<LoginPage />} />
          </>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapter/:id" element={<ChapterDetail />} />
            <Route path="/flashcards" element={<FlashCards />} />
            <Route path="/flashcard/:id" element={<FlashCardDetail />} />
            <Route path="/myaccount" element={<AccountPage />} />
            <Route path="/upcomingevents" element={<UpcomingEventsPage />} />
            <Route path="/chat-room" element={<ChatRoom />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/queryresponses" element={<QueryResponses />} />
            <Route path="/pastchapters" element={<PastChapters />} />
            <Route path="/flaggedquestions" element={<FlaggedQuestions />} />
            <Route path="/*" element={<HomePage />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
}
