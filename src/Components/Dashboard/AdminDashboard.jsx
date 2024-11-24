import React, { useState } from "react";
import Header from "../../Other/Header";
import Lists from "./List";

const AdminDashboard = () => {
  const [data, setData] = useState(Lists);
  const [employee, setEmployee] = useState(true);

  return (
    <>
      <div className="w-[80%] mx-auto mt-6">
        <Header employee={employee} />
        <div className="">
          <div>
            <h3 className=" pt-4 text-xl font-semibold">Pending Tasks</h3>
            <table className="mt-6 w-full border border-black border-solid">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                <tr className="border border-black">
                  <th className="p-4 text-center">S.N</th>
                  <th className="p-4 text-center ">Task Name</th>
                  <th className="p-4 text-center  ">Assigned to</th>
                  <th className="p-4 text-center">Assigned Date</th>
                  <th className="p-4 text-center ">Due Date</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.id}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.taskName}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.assigned}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.issued}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.deadline}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className=" pt-4 text-xl font-semibold">Assigned Tasks</h3>
            <table className="mt-6 w-full border border-black">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                <tr className="border-b border-gray-300">
                  <th className="p-4 text-center ">S.N</th>
                  <th className="p-4 text-center ">Task Name</th>
                  <th className="p-4 text-center ">Assigned to</th>
                  <th className="p-4 text-center ">Assigned Date</th>
                  <th className="p-4 text-center ">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.id}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.taskName}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.assigned}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.issued}
                      </td>
                      <td className=" p-2 text-center border-b-2 border-dotted border-gray-500">
                        {item.deadline}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
