import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "@components/spinner";
import useAuth from "@hooks/useAuth";
import SignUpPage from "../pages/auth/signup";
import ForgotPasswordPage from "../pages/auth/forgetPassword";

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
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/myaccount" element={<AccountPage />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
}
