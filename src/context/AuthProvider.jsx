import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { empData, adData } = getLocalStorage();
    setUserData({ empData, adData });
  }, []);

  return (
    <>
      <div>
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
      </div>
    </>
  );
};

export default AuthProvider;
