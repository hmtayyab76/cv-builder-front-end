// import SignIn from "./SignIn";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import SignIn from "../SignIn";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation(); // Get the current location object

  // Extract the pathname from the location object
  const currentPath = location.pathname;

  // Initialize the activeItem state based on the currentPath
  useEffect(() => {
    setActiveItem(getActiveItemFromPath(currentPath));
  }, [currentPath]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false); // Close the dropdown when an item is clicked
  };
  function getActiveItemFromPath(path) {
    if (path === "/resume-template") {
      return "resume-template";
    } else if (path === "/cv-template") {
      return "cv-template";
    } else if (path === "/cover-letter") {
      return "cover-letter";
    } else {
      return ""; // Default active item for other paths
    }
  }
  const NavLinkItem = ({ item, children }) => {
    const isActive = activeItem === item;
    const hoverColor = isActive ? "text-green-500" : "hover:text-green-500";

    return (
      <li
        className={`mb-0 lg:p-4 p-3 box-border w-auto ${hoverColor}`}
        onClick={() => handleItemClick(item)}
      >
        <Link to={item}>{children}</Link>
      </li>
    );
  };

  return (
    <nav className="w-full h-full justify-end flex items-center relative">
      <ul className=" w flex items-center justify-end mb-0 list-none font-semibold bg-white max-lg:absolute max-lg:w-52 max-lg:top-6 max-lg:flex-col-reverse  z-50 max-lg:border max-lg:p-4 rounded-md">
        <NavLinkItem item="resume-template">Resume Template</NavLinkItem>
        <NavLinkItem item="cv-template">CV Template</NavLinkItem>
        <NavLinkItem item="cover-letter">Cover Letters</NavLinkItem>
        <li className=" relative">
          <button
            onClick={toggleDropdown}
            className="mb-0 lg:p-4 p-3 box-border w-auto hover:text-green-500 rounded focus:outline-none"
          >
            Career Blog
            {isOpen ? (
              <i className="fa-solid fa-caret-down ml-2 rotate-180"></i>
            ) : (
              <i className="fa-solid fa-caret-down ml-2 "></i>
            )}
          </button>
          {isOpen && (
            <>
              <div className="absolute top-10 right-0 mt-2 w-48 flex flex-col">
                <i class="fa-solid fa-angle-up ml-20  text-slate-200 absolute bg-white text-2xl max-lg:hidden"></i>
                <div className=" bg-white border border-gray-300 rounded shadow-lg lg:mt-5 z-30">
                  <ul className="">
                    <li className="pl-4 pr-2 text-sm py-2 hover:bg-gray-100 cursor-pointer">
                      All Articles
                    </li>
                    <li className="pl-4 pr-2 text-sm py-2 hover:bg-gray-100 cursor-pointer">
                      Resumes & CV Writting
                    </li>
                    <li className="pl-4 pr-2 text-sm py-2 hover:bg-gray-100 cursor-pointer">
                      Examples
                    </li>
                    <li className="pl-4 pr-2 text-sm py-2 hover:bg-gray-100 cursor-pointer">
                      Personal Developemnet
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </li>
        <Link to="/sign-in">
          <li className="max-lg:w-full max-lg:mt-2 text-center max-lg:my-2 mx-2 ml-2 cursor-pointer px-5 py-2 text-black box-border text-sm rounded-full w-auto bg-slate-300 hover:bg-slate-400 ">
            Sign In
          </li>
        </Link>
        <Link to={"/register"}>
          <li className=" max-lg:w-full max-lg:my-2 text-center mb-0 px-5 cursor-pointer py-2 text-white box-border text-sm rounded-full w-auto bg-emerald-400 hover:bg-emerald-500 max-lg:mb-2">
            Register
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
