import React, { createContext, useState } from "react";
import { getLocalStorage } from "../Localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  const data = getLocalStorage();
  console.log(data);
  return (
    <>
      <div>
        <AuthContext.Provider value="Hey there">
          {children}
        </AuthContext.Provider>
      </div>
    </>
  );
};

export default AuthProvider;
