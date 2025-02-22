import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "mon", health: 90 },
  { name: " tue", health: 10 },
  { name: " wed", health: 70 },
  { name: " thurs", health: 102 },
  { name: " fri", health: 14 },
  { name: " sat", health: 124 },
  { name: " sun", health: 11 },
];

const Chart = () => {
  return (
    <div style={{ width: "100%", color: "black", fontSize: "1.4rem", height: "100%", display: "flex", flexDirection: "column", gap: "5rem" }}>
      <div className="">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
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
            <Line type="monotone" dataKey="health" stroke="red" fill="black" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
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
      </div>
    </div>
  );
};

export default Chart;
