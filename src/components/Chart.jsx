import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "3월",
    score: 88,
  },
  {
    name: "4월",
    score: 80,
  },
  {
    name: "6월",
    score: 92,
  },
  {
    name: "7월",
    score: 90,
  },
  {
    name: "9월",
    score: 76,
  },
  {
    name: "10월",
    score: 96,
  },
];

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="0" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="score" stroke="#82ca9d" />
    </LineChart>
  );
}
