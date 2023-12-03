import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Added state for email validation

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Validate email format
    setIsEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    if (!isEmailValid) {
      alert("Invalid email format");
      return;
    }
    // Implement your sign-in logic here
  };

  const handleGoogleSignIn = () => {
    // Implement your Google sign-in logic here
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-300"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && (
            <p className="text-red-500 text-xs mt-1">Invalid email format.</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-300"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button
            className="absolute top-8 right-3 focus:outline-none"
            onClick={handleTogglePassword}
          >
            <i
              className={
                showPassword
                  ? "fa fa-eye-slash text-gray-500"
                  : "fa fa-eye text-gray-500"
              }
            ></i>
          </button>
        </div>
        <button
          className="bg-indigo-600 text-white w-full py-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <button
          className="mt-2 bg-red-500 text-white w-full py-2 rounded focus:outline-none focus:ring focus:ring-red-300"
          onClick={handleGoogleSignIn}
        >
          Log In with Google
        </button>
        <div className="mt-4 text-center">
          <button
            className="text-indigo-600 hover:underline focus:outline-none"
            onClick={() => { }}
          >
            Forgot password?
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link to={"/register"}>
            <div className="text-indigo-600 hover:underline">
              If you don't have an account? Register Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
