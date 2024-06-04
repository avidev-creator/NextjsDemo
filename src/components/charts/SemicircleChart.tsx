import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {};

function SemicircleChart({}: Props) {
  const data: any = {
    datasets: [
      {
        data: [78, 22],
        cutout: "88%",
        backgroundColor: ["#7E8EF1", "#F9F4F3"],
        borderColor: ["#7E8EF1", "#F9F4F3"],
        circumference: 180,
        rotation: 270,
        weight: 1 / 2,
      },
    ],
  };

  const options: any = {};

  return (
    <>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}

export default SemicircleChart;
