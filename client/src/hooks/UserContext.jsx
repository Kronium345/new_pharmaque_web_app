// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    university: '',
    pharmacistType: '',
    avatar: '',
    subscriptionPlan: '',
  });

  const updateUser = (newDetails) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newDetails,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
