import axios from "axios";
import toast from "react-hot-toast";

import React, { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

let logoutTimer;

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [timer, setTimer] = useState();
  const [profile, setProfile] = useState({});

  const login = useCallback(async (user, token, expireTime) => {
    const expires =
      expireTime || new Date(new Date().getTime() + 1000 * 60 * 60 * 6);

    const newUser = {
      email: user.email,
      id: user.id || user.uid,
      expires: expires.toISOString(),
      role: user.role,
    };

    setToken(token);
    setUser(newUser);
    setTimer(expires);

    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", token);

    toast.success("Logged in successfully");

    getProfile();
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setTimer(null);
    setProfile(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
  }, []);

  const getProfile = useCallback(async () => {
    await axios
      .get("auth/get-basic-profile")
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user && token && new Date(user.expires) > new Date()) {
      login(user, token, new Date(user.expires));
    }
  }, []);

  useEffect(() => {
    if (token && timer) {
      const rt = timer.getTime() - new Date();
      logoutTimer = setTimeout(logout, rt);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, timer]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        login,
        logout,
        token,
        user,
        profile,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
