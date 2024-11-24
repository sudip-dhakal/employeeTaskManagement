import React from "react";

const RecentTasks = () => {
  return (
    <>
      <div className="w-[80%] ml-[2rem] mt-2">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
           Assigned Tasks
        </h1>
        <div
          id="recent-scroll"
          className="flex flex-col gap-6 hide-scrollbar overflow-y-auto max-h-[70vh] p-4"
        >
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
              >
                <p className="font-bold text-2xl text-gray-800 mb-2">
                  Title: Youtube video creation
                </p>
                <p className="text-lg text-gray-600">
                  <span className="font-medium">Assigned to:</span> Krishna
                  Murari
                </p>
                <p className="text-lg text-gray-600">
                  <span className="font-medium">Due Date:</span> 2081-01-01
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-medium">Status:</span>{" "}
                  <span className="italic underline text-red-500">
                    Not Completed
                  </span>
                </p>
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition duration-300"
                >
                  View Description
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentTasks;
