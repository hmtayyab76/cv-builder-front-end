import React from "react";
import "../main.css";
const UserCard = ({ data }) => {
  return (
    <div className="bg-gray-200 mx-3 w-1/2  rounded-lg card p-10">
      <div className="flex items-center mb-4 w-full">
        <img
          src={data.image}
          alt="User"
          className=" max-md:hidden w-36 h-36 rounded-3xl mr-4"
        />
        <div className=" w-full">
          <h2 className=" max-lg:text-xl text-2xl  font-extrabold">
            {data.name}
          </h2>
          <h3 className="text-sm font-medium  w-1/2">{data.job}</h3>
        </div>
      </div>
      <div className=" flex items-center w-full justify-center">
        <div className="line"></div>
        <span className=" max-md:text-4xl text-8xl text-center comas text-slate-300">
          “”
        </span>
        <div className="line"></div>
      </div>
      <p className=" max-md:text-base text-lg text-black max-h-60 overflow-hidden">
        {data.description}
      </p>
      <div className=" cursor-pointer hover:text-green-500 mt-5 text-xl">
        See more
      </div>
    </div>
  );
};

export default UserCard;
