import React from "react";
import Carousel from "./Carousel";

function SectionUser() {
  return (
    <div className=" max-lg:p-10 p-40">
      <h1 className="text-3xl w-1/2 font-bold mb-4 max-lg:text-center max-lg:w-full">
        Our Users Are Being Hired at the World's Leading Companies.
      </h1>
      <div className="line2 max-lg:m-auto"></div>
      <Carousel />
    </div>
  );
}

export default SectionUser;
