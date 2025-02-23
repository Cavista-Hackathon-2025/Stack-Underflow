import React from "react";
import { Favorite, MonitorHeart, ThermostatOutlined, WaterDrop } from "@mui/icons-material";
import { motion } from "framer-motion";

const Vitals = ({ vitalData }) => {
  return (
    <div className="w-full h-full">
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2 w-full">
        <div data-aos="fade-right" className="p-5 bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.9)] rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <motion.span
              animate={{ scale: [0.5, 1.5, 0.5] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="bg-red-600 py-5 px-5 rounded-2xl flex items-center"
            >
              <Favorite sx={{ fontSize: "3rem" }} />
            </motion.span>
            <span className="text-3xl font-semibold">heartbeat rate</span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">{vitalData.bpm}</span>
            <span className="text-2xl font-medium normal-case">bpm</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-red-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <motion.span
              animate={{ color: ["#ff4500", "#ff0000", "#ff4500"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-amber-600 py-5 px-5 rounded-2xl flex items-center"
            >
              <ThermostatOutlined sx={{ fontSize: "3rem" }} />
            </motion.span>
            <span className="text-3xl font-semibold leading-8">
              body <br /> temperature
            </span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">{vitalData.temp}</span>
            <span className="text-2xl font-medium normal-case">°C</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-amber-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="flex items-center  justify-between mb-5">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4], y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="bg-blue-600 py-5 px-5 rounded-2xl flex items-center"
            >
              <WaterDrop sx={{ fontSize: "3rem" }} />
            </motion.span>
            <span className="text-3xl font-semibold leading-8">
              oxygen <br /> saturation
            </span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">{vitalData.spo2}</span>
            <span className="text-2xl font-medium normal-case">%</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-blue-600 w-max py-1 px-5 rounded-sm">normal</div>
        </div>

        <div data-aos="fade-right" className="bg-white border border-gray-600 relative shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="absolute flex items-center top-1 right-2">
            <img src="/ai_logo.png" alt="ai image" className="w-[2rem] h-[2rem] object-cover" />
            <span className="text-base font-medium">AI generated</span>
          </div>
          <div className="flex items-center  justify-between mb-5">
            <motion.span
              animate={{ x: [-10, 20, -10] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="bg-red-600 py-5 px-5 rounded-2xl flex items-center"
            >
              <MonitorHeart sx={{ fontSize: "3rem" }} />
            </motion.span>
            <span className="text-3xl font-semibold">Blood pressure</span>
          </div>
          <div className="my-16">
            <span className="text-7xl my-10 font-bold">{vitalData.sbp}</span>
            <span className="text-5xl font-semibold">/{vitalData.dbp}</span>
            <span className="text-2xl font-medium normal-case">mmhg</span>
          </div>
          <div className="mt-5 text-2xl font-medium bg-red-500 w-max py-1 px-5 rounded-sm">normal</div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
