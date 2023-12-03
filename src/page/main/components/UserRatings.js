import React from "react";

function UserRatings() {
  return (
    <div className=" w-full px-36 max-lg:px-10 mt-28">
      <div>
        <h1 className=" text-4xl font-bold w-1/2">
          Novorésumé Users Love Our Resume Builder.
        </h1>
        <div className=" line2 mt-2"></div>
      </div>
      <div className=" flex items-center">
        <div className=" mt-10 w-fit m-2">
          <h1 className=" text-2xl font-medium">Excellent</h1>
          <div className=" mt-5">
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
          </div>
          <p className=" mt-2 text-center text-sm">
            Based On <span className=" underline">916 review</span>
          </p>
          <div className=" mt-3 flex items-center justify-center cursor-pointer">
            <span className=" bg-emerald-500 p-1 m-0.5">
              <i class="fa-solid fa-star text-white"></i>
            </span>
            <h1 className=" text-lg font-bold  ml-3">Trustpilot</h1>
          </div>
        </div>
        {/* <div className=" w-auto">
          <div className=" flex items-center">
            <div className=" mt-10 w-fit">
              <div className=" mt-5  flex items-center">
                <div className=" w-fit bg-emerald-500 pb-0.5 pt-0 px-1 m-0.5">
                  <i class="fa-solid fa-star text-white m-auto text-xs text-center "></i>
                </div>
                <div className=" w-fit bg-emerald-500 pb-0.5 pt-0 px-1 m-0.5">
                  <i class="fa-solid fa-star text-white m-auto text-xs text-center "></i>
                </div>
                <div className=" w-fit bg-emerald-500 pb-0.5 pt-0 px-1 m-0.5">
                  <i class="fa-solid fa-star text-white m-auto text-xs text-center "></i>
                </div>
                <div className=" w-fit bg-emerald-500 pb-0.5 pt-0 px-1 m-0.5">
                  <i class="fa-solid fa-star text-white m-auto text-xs text-center "></i>
                </div>
                <div className=" w-fit bg-emerald-500 pb-0.5 pt-0 px-1 m-0.5">
                  <i class="fa-solid fa-star text-white m-auto text-xs text-center "></i>
                </div>
              </div>
              <h1 className=" mt-2 text-xs font-bold">
                Proper platform for Creating CVs
              </h1>
              <p></p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default UserRatings;
