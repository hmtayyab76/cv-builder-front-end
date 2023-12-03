import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = () => {
    // Implement your registration logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-300"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border rounded focus:ring focus:ring-indigo-300"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
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
        </div>
        <div className="mb-4">
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
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreement"
            className="mr-2"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <label htmlFor="agreement" className="text-sm text-gray-700">
            By clicking Agree & Join,{" "}
            <span className=" text-blue-500 cursor-pointer hover:text-blue-400">
              User Agreement, Privacy Policy, and Cookie Policy.{" "}
            </span>
          </label>
        </div>
        <button
          className="bg-indigo-600 text-white cursor-pointer w-full py-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          onClick={handleRegister}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          Agree & Join
        </button>
        <button
          className="mt-2 bg-red-500 text-white w-full py-2 rounded focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => {}}
        >
          Register with Google
        </button>
        <div className="mt-4 text-center cursor-pointer">
          <Link to={"/sign-in"}>
            <div className="text-indigo-600 hover:underline">
              Already have an account? Sign in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
