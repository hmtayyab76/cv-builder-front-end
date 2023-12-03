import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Tab({ Data = {} }) {
  const { HeadingTop, EXP, HeadingSec, Para, image } = Data;
  const location = useLocation(); // Get the current location object

  // Extract the pathname from the location object
  const currentPath = location.pathname;

  // Initialize the activeTab state based on the currentPath
  const [activeTab, setActiveTab] = useState(getActiveTabFromPath(currentPath));

  // Update the activeTab state whenever the pathname changes
  useEffect(() => {
    setActiveTab(getActiveTabFromPath(currentPath));
  }, [currentPath]);

  // Helper function to extract the active tab from the pathname
  function getActiveTabFromPath(path) {
    if (path === "/cv-template") {
      return "CVs";
    } else if (path === "/cover-letter") {
      return "CoverLetters";
    } else {
      return "Resumes"; // Default active tab for other paths
    }
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="px-44 max-lg:px-10">
        <h1 className="text-4xl mt-4 font-extrabold">{HeadingTop}</h1>
        <p className="text-xl">{EXP}</p>
        <div className="line2 mt-3"></div>
      </div>
      <div className="flex mx-36 max-lg:mx-10 flex-wrap px-5 py-10 my-10 shadow-2xl rounded-2xl h-auto  relative">
        <div className="w-1/2 max-lg:w-full">
          <div className="flex items-center w-full justify-between">
            <Link preventScrollReset={true} to="/resume-template">
              <div
                className={`mx-4 cursor-pointer ${
                  activeTab === "Resumes" ? "text-emerald-500" : ""
                }`}
                onClick={() => handleTabClick("Resumes")}
              >
                <h1 className="text-lg font-extrabold">Resumes</h1>
                <p className="text-xl max-lg:hidden">Student / Intermediate</p>
                <div
                  className={`my-4 w-10 rounded-2xl h-3 p-2 flex justify-center items-center  ${
                    activeTab === "Resumes" ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                >
                  <div className="w-full h-1 bg-white rounded-xl"></div>
                </div>
              </div>
            </Link>
            <Link to={"/cv-template"}>
              <div
                className={`mx-4 cursor-pointer ${
                  activeTab === "CVs" ? "text-emerald-500" : ""
                }`}
                onClick={() => handleTabClick("CVs")}
              >
                <h1 className="text-lg font-extrabold">CVs</h1>
                <p className="text-xl  max-lg:hidden">Senior</p>
                <div
                  className={`my-4 w-10 rounded-2xl h-3 p-2 flex justify-center items-center  ${
                    activeTab === "CVs" ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                >
                  <div className="w-full h-1 bg-white rounded-xl"></div>
                </div>
              </div>
            </Link>
            <Link preventScrollReset={true} to="/cover-letter">
              <div
                className={`mx-4 cursor-pointer ${
                  activeTab === "CoverLetters" ? "text-emerald-500" : ""
                }`}
                onClick={() => handleTabClick("CoverLetters")}
              >
                <h1 className="text-lg font-extrabold">Cover Letters</h1>
                <p className="text-xl max-lg:hidden">All Level of Experience</p>
                <div
                  className={`my-4 w-10 rounded-2xl h-3 p-2 flex justify-center items-center  ${
                    activeTab === "CoverLetters"
                      ? "bg-emerald-500"
                      : "bg-slate-300"
                  }`}
                >
                  <div className="w-full h-1 bg-white rounded-xl"></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="mx-4 mt-5">
            <h1 className="text-lg font-extrabold">{HeadingSec}</h1>
            <p className="text-lg">{Para}</p>
          </div>
        </div>
        <div className="w-1/2 max-lg:relative max-lg:m-auto max-lg:mt-5 h-full flex justify-end overflow-hidden absolute right-5 bottom-0">
          <img src={image} alt="Resumes" className="" />
        </div>
      </div>
    </div>
  );
}

export default Tab;
