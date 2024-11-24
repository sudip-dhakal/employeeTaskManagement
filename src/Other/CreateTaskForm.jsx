import React from "react";

const CreateTaskForm = () => {
  return (
    <>
      <div className=" h-screen w-screen p-2">
        <div className="bg-white shadow-md shadow-black max-w-[70%] flex  flex-col ml-auto p-4  mr-24  rounded-md ">
          <h1 className="text-3xl font-bold mb-4">Create task !</h1>
          <form className="flex flex-col mt-4 gap-5">
            <input
              type="text"
              placeholder="Task/ Title"
              className="border-b-2 border-black border-solid focus:outline-none focus:ring-0 "
            />

            <textarea
              type="text"
              placeholder="Task Description"
              className="border-b-2 border-black border-solid focus:outline-none focus:ring-0 resize-none"
            ></textarea>
            <input
              type="date"
              placeholder="Issued Date"
              className="border-b-2 border-black border-solid focus:outline-none focus:ring-0 "
            />
            <input
              type="text"
              placeholder="Final Date"
              className="border-b-2 border-black border-solid focus:outline-none focus:ring-0"
            />
            <select className="border-b-2 border-black border-solid focus:outline-none focus:ring-0 ">
              <option disabled>Please Select</option>
              <option>Sudip</option>
              <option>Krishna</option>
              <option>Ram</option>
              <option>Shyam</option>
              <option>Hari</option>
              <option>Mukunda</option>
              <option>Murari</option>
            </select>

            <button
              type="submit"
              className="bg-blue-700 rounded-md py-2 text-xl text-white"
            >
              Create Task{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTaskForm;
