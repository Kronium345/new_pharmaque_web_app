// ScreenTimeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ScreenTimeContext = createContext();

export const useScreenTime = () => useContext(ScreenTimeContext);

export const ScreenTimeProvider = ({ children }) => {
  const [screenTime, setScreenTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenTime(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const resetScreenTime = () => {
    setStartTime(Date.now());
    setScreenTime(0);
  };

  return (
    <ScreenTimeContext.Provider value={{ screenTime, resetScreenTime }}>
      {children}
    </ScreenTimeContext.Provider>
  );
};
