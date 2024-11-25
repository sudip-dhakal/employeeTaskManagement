import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");
  const [valid, setValid] = useState(false);

  console.log(username, password, role);

  let handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password, role);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Welcome !
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Log in to access your account.
      </p>

      <div className="flex flex-col gap-6">
        <input
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700"
          type="email"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between">
          <div className="flex  gap-x-5 p-2">
            <input
              type="radio"
              className="w-6 h-6 "
              name="position"
              onChange={() => setRole("employee")}
            />
            <label>Job holder</label>
          </div>

          <div className="flex  gap-x-5 p-2">
            <input
              type="radio"
              className="w-6 h-6 "
              name="position"
              onChange={() => setRole("admin")}
            />
            <label>Admin</label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 p-3 rounded-md text-white font-semibold text-lg shadow-md"
          onClick={handleSubmit}
        >
          Login
        </button>
        {valid && (
          <p className="text-red-600 font-medium text-xl text-center">
            Username or password not valid !!!!
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
