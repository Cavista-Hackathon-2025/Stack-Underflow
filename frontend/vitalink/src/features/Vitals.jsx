import React from "react";
import { Favorite, HeartBrokenOutlined, ThermostatOutlined } from "@mui/icons-material";

const Vitals = () => {
  return (
    <div className="w-full h-full">
      <div className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-4 sm:grid-cols-2 w-full">
        <div className="p-5 shadow-[1px_1px_10px_rgba(0,0,0,0.9)] rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-red-600 py-5 px-5 rounded-2xl flex items-center">
              <Favorite sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold">heart rate</span>
          </div>

          <div className="text-6xl my-10 font-bold">
            88 <span className="text-2xl font-medium">bpm</span>
          </div>
          <div className="mt-5 text-2xl text-green-600 font-bold">normal</div>
        </div>

        <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-orange-600 py-5 px-5 rounded-2xl flex items-center">
              <ThermostatOutlined sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold leading-8">
              body <br /> temperature
            </span>
          </div>
          <div className="text-6xl my-10 font-bold">
            88 <span className="text-2xl font-medium">°C</span>
          </div>
          <div className="mt-5 text-2xl text-green-600 font-bold">normal</div>
        </div>

        <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-red-600 py-5 px-5 rounded-2xl flex items-center">
              <HeartBrokenOutlined sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold"></span>
          </div>
          <div className="text-6xl my-10 font-bold">
            88 <span className="text-2xl font-medium">bpm</span>
          </div>
          <div className="mt-5 text-2xl text-green-600 font-bold">normal</div>
        </div>

        <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-red-600 py-5 px-5 rounded-2xl flex items-center">
              <HeartBrokenOutlined sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold">heart rate</span>
          </div>
          <div className="text-6xl my-10 font-bold">
            88 <span className="text-2xl font-medium">bpm</span>
          </div>
          <div className="mt-5 text-2xl text-green-600 font-bold">normal</div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
