import React from "react";

const TaskListNumber = () => {
  return (
    <>
      <div className=" flex justify-between gap-5 mt-10">
        <div className="w-[20%] h-[20%] bg-red-500 rounded-md py-6 px-9 text-center align-middle ">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-2xl font-medium">New Task</h3>
        </div>
        <div className="w-[20%] h-[20%] bg-violet-500 rounded-md py-6 px-9 text-center align-middle ">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-2xl font-medium">Completed</h3>
        </div>
        <div className="w-[20%] h-[20%] bg-green-500 rounded-md py-6 px-9 text-center align-middle ">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-2xl font-medium">Accepted </h3>
        </div>
        <div className="w-[20%] h-[20%] bg-yellow-500 rounded-md py-6 px-9 text-center align-middle ">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-2xl font-medium">Pending</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
