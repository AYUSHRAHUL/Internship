import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Default Credentials
    if (email === "user" && password === "1234") {
      navigate("/account"); // Redirect to profile page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-12">
      <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Sign in to your</h1>
        <h1 className="text-2xl font-bold mb-4">PopX account</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-purple-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded"
              type="text"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-purple-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border rounded"
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-gray-400 text-white p-3 rounded" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
