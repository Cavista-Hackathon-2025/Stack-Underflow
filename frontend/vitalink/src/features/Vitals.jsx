import React from "react";
import { Favorite, MonitorHeart, ThermostatOutlined, WaterDrop } from "@mui/icons-material";

const Vitals = () => {
  return (
    <div className="w-full h-full">
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2 w-full">
        <div data-aos="fade-right" className="p-5 bg-green-400 shadow-[1px_1px_4px_rgba(0,0,0,0.9)] rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-red-600 py-5 px-5 rounded-2xl flex items-center">
              <Favorite sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold">heartbeat rate</span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">88</span>
            <span className="text-2xl font-medium normal-case">bpm</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-red-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-green-400 shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-amber-600 py-5 px-5 rounded-2xl flex items-center">
              <ThermostatOutlined sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold leading-8">
              body <br /> temperature
            </span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">88</span>
            <span className="text-2xl font-medium normal-case">°C</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-amber-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-green-400 shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-blue-600 py-5 px-5 rounded-2xl flex items-center">
              <WaterDrop sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold leading-8">
              oxygen <br /> saturation
            </span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">88</span>
            <span className="text-2xl font-medium normal-case">%</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-blue-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-green-400 shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <span className="bg-red-600 py-5 px-5 rounded-2xl flex items-center">
              <MonitorHeart sx={{ fontSize: "3.5rem" }} />
            </span>
            <span className="text-3xl font-semibold">Blood pressure</span>
          </div>
          <div className="my-16 ">
            <span className="text-7xl my-10 font-bold">88/</span>
            <span className="text-5xl font-semibold">77</span>
            <span className="text-2xl font-medium normal-case">mmhg</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-red-500 w-max py-1 px-5 rounded-sm">normal</div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
