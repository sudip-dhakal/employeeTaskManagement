import React from "react";

const TaskList = () => {
  return (
    <>
      <div
        id="tasklist"
        className="w-[100%] h-[15rem] mt-12 px-4 flex justify-start items border-x-2 border-black-300 border-solid overflow-x-auto gap-5  "
      >
        <div className="min-w-[30%] w-[30%] h-auto bg-red-300 rounded-xl p-3 cursor-pointer hover:bg-slate-500 transition-all duration-300 hover:scale-105  ">
          <div className="flex justify-between  ">
            <h2 className="font-semibold bg-red-600 px-2 py-1 rounded-md text-[1rem]">
              High
            </h2>
            <h3>2081 Magh 10</h3>
          </div>
          <div className="mt-4">
            <h1 className="text-center font-bold text-2xl">
              Create a Logo for new product
            </h1>
            <p className="mt-3 text-left overflow-hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              libero asperiores consequuntur quos accusamus fuga reprehenderit
              error suscipit. Esse, itaque. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
