"use client";

import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
} from "recharts";

type Props = {};

const data = [
  {
    "Offline Selling": 4000,
    "Web Sales": 2400,
    "amt": 2400,
  },
  {
    "Offline Selling": 3000,
    "Web Sales": 1398,
    "amt": 2210,
  },
  {
    "Offline Selling": 2000,
    "Web Sales": 9800,
    "amt": 2290,
  },
  {
    "Offline Selling": 2780,
    "Web Sales": 3908,
    "amt": 2000,
  },
  {
    "Offline Selling": 1890,
    "Web Sales": 4800,
    "amt": 2181,
  },
  {
    "Offline Selling": 2390,
    "Web Sales": 3800,
    "amt": 2500,
  },
  {
    "Offline Selling": 3490,
    "Web Sales": 4300,
    "amt": 2100,
  },
];

export default function LineChartStructure({}: Props) {
  return (
    <ResponsiveContainer width={"90%"} height={175}>
      <LineChart
        width={330}
        height={175}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickLine={false} fontSize={12} tick={false} axisLine={true} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} />
        <Legend />
        <Line
          type="monotone"
          dataKey="Web Sales"
          stroke="#8884d8"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Offline Selling"
          stroke="#82ca9d"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
