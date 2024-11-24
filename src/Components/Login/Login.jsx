import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 p-3 rounded-md text-white font-semibold text-lg shadow-md"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      <p className="text-center text-gray-500 mt-6">
        Don't have an account?{" "}
        <a
          href="#"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default Login;
