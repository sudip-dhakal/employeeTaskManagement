import React, { useState } from "react";

const Header = ({ employee }) => {
  return (
    <div className="flex justify-between  border-b-2 pb-3 border-solid">
      <div className="flex flex-col">
        <span className="text-xl">Hello 👋</span>
        <span className="text-3xl font-semibold">&nbsp; Sudip</span>
      </div>
      {employee && (
        <div className="flex ml-auto">
          <ul className="flex gap-x-10 ">
            <li className="bg-red-600 h-fit px-4 py-2 rounded-md text-white cursor-pointer">
              Employees
            </li>
            <li className="bg-red-600 h-fit px-4 py-2 rounded-md text-white cursor-pointer">
              Tasks
            </li>
            <li className="bg-red-600 h-fit px-4 py-2 rounded-md text-white cursor-pointer">
              Reports
            </li>
          </ul>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      )}
      <li className="bg-red-600 h-fit px-4 py-2 rounded-md text-white cursor-pointer list-none">
        Logout
      </li>
    </div>
  );
};

export default Header;
