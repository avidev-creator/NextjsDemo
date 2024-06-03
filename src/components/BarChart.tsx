"use client";

import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    thisYear: 5000,
    lastYear: 6000,
  },
  {
    name: "Feb",
    thisYear: 10000,
    lastYear: 2000,
  },
  {
    name: "Mar",
    thisYear: 40000,
    lastYear: 20000,
  },
  {
    name: "Apr",
    thisYear: 32000,
    lastYear: 21000,
  },
  {
    name: "May",
    thisYear: 12000,
    lastYear: 9200,
  },
  {
    name: "Jun",
    thisYear: 13000,
    lastYear: 8700,
  },
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"90%"} height={250}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          label={{ fill: "blue", fontSize: 20 }}
        />
        <YAxis
          dataKey={"thisYear"}
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Bar
          dataKey={"thisYear"}
          radius={[4, 4, 0, 0]}
          fill="#7E8EF1"
          barSize={30}
        />
        <Bar
          dataKey={"lastYear"}
          radius={[4, 4, 0, 0]}
          fill="#6FDCE3"
          barSize={30}
        />
      </BarGraph>
    </ResponsiveContainer>
  );
}
