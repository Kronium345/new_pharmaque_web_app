import { useContext } from "react";
import { AuthContext } from "@contexts/authContext";

const useAuth = () => {
  const { isLoggedIn, login, logout, token, user, profile, getProfile } =
    useContext(AuthContext);

  return { isLoggedIn, login, logout, token, user, profile, getProfile };
};

export default useAuth;
