import React from "react";
import { LineChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ vitalData }) => {
  const chartData = [
    {
      name: "Current Reading",
      name: "future Reading",
      name: "Current Reading",
      bpm: vitalData?.bpm || 0,
      spo2: vitalData?.spo2 || 0,
      temp: vitalData?.temp || 0,
      sbp: vitalData?.sbp || 0,
      dbp: vitalData?.dbp || 0,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        color: "black",
        fontSize: "1.4rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
      }}
    >
      <div className="">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0 10" stroke="black" />
            <XAxis dataKey="name" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip contentStyle={{ color: "black" }} />
            {/* <Area type="monotone" dataKey="sbp" stroke="#8884d8" fill="#8884d8" /> */}
            {/* <Area type="monotone" dataKey="dbp" stroke="#8884d8" fill="#8884d8" /> */}
            <Line type="monotone" dataKey="bpm" stroke="red" name="Heart Rate" />
            <Line type="monotone" dataKey="spo2" stroke="blue" name="SpO2" />
            <Line type="monotone" dataKey="temp" stroke="green" name="Temperature" />
            <Line type="monotone" dataKey="sbp" stroke="purple" name="Systolic BP" />
            <Line type="monotone" dataKey="dbp" stroke="orange" name="Diastolic BP" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <div className="">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0 10" stroke="black" />
            <XAxis dataKey="name" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip contentStyle={{ color: "black" }} />
            <Line connectNulls type="monotone" dataKey="health" stroke="red" fill="black" />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default Chart;
