import React from "react";
import CreateTaskForm from "../Other/CreateTaskForm";
import Header from "../Other/Header";
import RecentTasks from "../Other/RecentTasks";

const CreateTask = () => {
  return (
    <>
      <div className=" px-8 pt-4 bg-[#f2f4f7]">
        <Header />
        <div className="flex justify-between mt-10">
          <RecentTasks />
          <CreateTaskForm />
        </div>
      </div>
    </>
  );
};

export default CreateTask;
