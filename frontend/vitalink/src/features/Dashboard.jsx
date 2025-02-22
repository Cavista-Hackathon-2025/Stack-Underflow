import React from "react";
import Vitals from "./Vitals";

const Dashboard = () => {
  return (
    <div className="w-full h-full section">
      <div className="w-full h-full text-white flex justify-between items-center">
        <div className="w-full flex items-center gap-x-2">
          <img src="vitaLink_logo.jpg" alt="logo image" className="w-[4rem] h-[4rem] rounded-full" />
          <span className="italic text-xl font-bold">vitalLink</span>
        </div>
        <div className="flex gap-x-2">
          <div className="text-2xl font-semibold">device:</div>
        </div>
      </div>

      <div className=" mt-10 lg:w-[40%] sm:w-[60%] w-[85%] items-center">
        <div className="grid grid-cols-2 gap-y-5">
          <div className="text-2xl font-semibold">name: john doe</div>
          <div className="text-2xl font-semibold">email: johndoe@gmail.com</div>
          <div className="text-2xl font-semibold">age: 44 years</div>
          <div className="text-2xl font-semibold">contact no: +000 000 000</div>
        </div>
      </div>

      <div className="">
        <Vitals />
      </div>
    </div>
  );
};

export default Dashboard;
