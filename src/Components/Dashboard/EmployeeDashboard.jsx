import React from "react";
import Header from "../../Other/Header";
import TaskListNumber from "../../Other/TaskListNumber";
import TaskList from "../../Tasks/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="w-[80%] mx-auto mt-4">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
