import React, { createContext, useState, useEffect, useContext } from "react";
import { authDataContext } from "../context/AuthDataContext.jsx";
import axios from "axios";

// Context object
export const UserDataContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const { serverUrl } = useContext(authDataContext);
  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/user/currentuser", {withCredentials: true});
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error);                                                                                                               
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    userData,
    setUserData,
  };

  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};
export default UserProvider;

