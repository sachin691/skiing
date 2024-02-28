import React from "react";

const Project = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between lg:p-[5rem] p-[2rem] h-auto bg-[#edede9]">
      <div className="flex flex-col items-start justify-between p-[2rem]">
        <h1 className="font-bold text-black text-5xl py-[1rem]">
          About <span className="text-[#bc3908]">Us</span>
        </h1>
        <div className="py-[0.5rem] md:px-[15rem] px-[8rem]  border-t-2 border-gray-600"></div>
        <div>
          <p className="text-gray-600 text-1xl">
            At Ski Adventures, we're passionate about delivering unforgettable skiing experiences. With years of
            expertise and a love for the mountains, our team is dedicated to providing personalized service and expert
            guidance. Whether you're a seasoned skier or hitting the slopes for the first time, we're here to make your
            journey memorable. From exploring pristine powder to navigating challenging terrain, trust Ski Adventures to
            elevate your skiing adventure to new heights.
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[150rem] w-[100rem] lg:inline-block hidden"
          src="https://images.unsplash.com/photo-1617939533073-6c94c709370c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
