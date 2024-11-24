import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import CreateTask from "./Tasks/CreateTask";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Localstorage";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <Login />
      </div>
      {/* <EmployeeDashboard /> */}
      {/* <CreateTask /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
