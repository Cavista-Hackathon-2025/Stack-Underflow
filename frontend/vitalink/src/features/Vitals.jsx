import React, { useState, useEffect } from "react";
import { Favorite, MonitorHeart, ThermostatOutlined, WaterDrop } from "@mui/icons-material";
import { motion } from "framer-motion";

const Vitals = ({ vitalData }) => {
  const [heartStage, setHeartStage] = useState("");
  const [tempStage, setTempStage] = useState("");
  const [spo2Stage, setSpo2Stage] = useState("");
  const [bpStage, setBpStage] = useState("");

  // Heart Rate Classification
  useEffect(() => {
    if (vitalData.bpm >= 16 && vitalData.bpm <= 26) {
      setHeartStage("Severe Bradycardia");
    } else if (vitalData.bpm >= 50 && vitalData.bpm <= 80) {
      setHeartStage("Mild Bradycardia");
    } else if (vitalData.bpm > 80 && vitalData.bpm <= 120) {
      setHeartStage("Normal Resting");
    } else if (vitalData.bpm > 120 && vitalData.bpm <= 160) {
      setHeartStage("Elevated");
    } else if (vitalData.bpm > 160) {
      setHeartStage("High");
    } else {
      setHeartStage("Unknown");
    }
  }, [vitalData.bpm]);

  // Body Temperature Classification
  useEffect(() => {
    if (vitalData.temp < 35) {
      setTempStage("Hypothermia ");
    } else if (vitalData.temp >= 35 && vitalData.temp <= 37.5) {
      setTempStage("Normal ");
    } else if (vitalData.temp > 37.5 && vitalData.temp <= 39) {
      setTempStage("Fever ");
    } else if (vitalData.temp > 39) {
      setTempStage("High Fever 🔥");
    } else {
      setTempStage("Unknown");
    }
  }, [vitalData.temp]);

  // Oxygen Saturation Classification
  useEffect(() => {
    if (vitalData.spo2 < 90) {
      setSpo2Stage("Hypoxia  (Critical)");
    } else if (vitalData.spo2 >= 90 && vitalData.spo2 < 95) {
      setSpo2Stage("Low Oxygen ");
    } else if (vitalData.spo2 >= 95 && vitalData.spo2 <= 100) {
      setSpo2Stage("Normal ");
    }
  }, [vitalData.spo2]);

  // Blood Pressure Classification
  useEffect(() => {
    if (vitalData.sbp < 90 || vitalData.dbp < 60) {
      setBpStage("Hypotension ");
    } else if (vitalData.sbp >= 90 && vitalData.sbp <= 120 && vitalData.dbp >= 60 && vitalData.dbp <= 80) {
      setBpStage("Normal ");
    } else if ((vitalData.sbp > 120 && vitalData.sbp <= 139) || (vitalData.dbp > 80 && vitalData.dbp <= 89)) {
      setBpStage("Prehypertension");
    } else if (vitalData.sbp >= 140 || vitalData.dbp >= 90) {
      setBpStage("Hypertension ");
    } else {
      setBpStage("Unknown");
    }
  }, [vitalData.sbp, vitalData.dbp]);

  return (
    <div className="w-full h-full">
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2 w-full">
        {/* HEART RATE */}
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
          <div className="mt-5 text-2xl font-medium bg-red-600 w-max py-1 px-5 rounded-sm">{heartStage}</div>
        </div>

        {/* BLOOD PRESSURE */}
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
          <div className="mt-5 text-2xl font-medium bg-amber-600 w-max py-1 px-5 rounded-sm">{tempStage}</div>
        </div>

        {/* OXYGEN LEVEL */}
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
          <div className="mt-5 text-2xl font-medium bg-blue-600 w-max py-1 px-5 rounded-sm">{spo2Stage}</div>
        </div>

        {/* BLOOD PRESSURE */}
        <div data-aos="fade-right" className="bg-white border border-gray-600 relative shadow-[1px_1px_4px_rgba(0,0,0,0.9)] p-8 rounded-2xl">
          <div className="absolute flex items-center top-1 right-2">
            <img src="/ai_logo.png" alt="ai image" className="w-[2rem] h-[2rem] object-cover" />
            <span className="text-xl font-medium">AI generated</span>
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
          <div className="mt-5 text-2xl font-medium bg-red-500 w-max py-1 px-5 rounded-sm">{bpStage}</div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
