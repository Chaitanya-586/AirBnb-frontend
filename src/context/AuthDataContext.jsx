import React, { createContext } from 'react';

// Context object
export const authDataContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:8000";

  const value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

