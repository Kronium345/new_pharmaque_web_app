import axios from "axios";
import toast from "react-hot-toast";

import React, { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});

  const login = useCallback(async (user, token) => {
    const newUser = {
      ...user,
      email: user.email,
      id: user.userId || user.uid,
    };

    setToken(token);
    setUser(newUser);

    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", token);

    toast.success("Logged in successfully");

    getProfile();
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setProfile(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
  }, []);

  const getProfile = useCallback(async () => {
    await axios
      .get("auth/get-profile")
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        logout();
      });
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user && token) {
      login(user, token);
    }
  }, []);

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
