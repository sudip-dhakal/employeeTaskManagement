import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import CreateTask from "./Tasks/CreateTask";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);
  console.log(authData.empData)
  const [user, setUser] = useState(null);

  let handleLogin = (email, password, role) => {
    if (email == "admin@gmail.com" && password == "123" && role == "admin") {
      console.log("Yes this is admin");
      setUser("admin");
    } else if (
      email == "employee@gmail.com" &&
      password == "123" &&
      role == "employee"
    ) {
      console.log("Yes this is employee");
      setUser("employee");
    } else {
      console.log("Neither employee nor admin");
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
