"use client";

import React from "react";
import SemicircleChart from "./charts/SemicircleChart";

type Props = {};

function Goals({}: Props) {
  return (
    <>
      <div className="flex justify-center absolute top-[1%] right-[28%] w-[50%] h-[17%]">
        <SemicircleChart />
      </div>
      <div className="flex absolute justify-center">
        <section className="flex  flex-col">
          <h2 className="text-2xl flex relative top-[100%] left-[170%]">78</h2>
          <p className="text-muted-foreground text-sm flex relative top-[90%] left-[145%]">
            of 100 points
          </p>
        </section>
      </div>
      <div className="w-full absolute top-[15%]">
        <div className="border w-[75%] h-0 left-[5%] relative"></div>
      </div>
      <div className="flex flex-row absolute">
        <section className="flex relative">
          <p className="text-bold text-xl w-full relative top-[190%] pt-2 pb-4">
            You're good!
          </p>
          <p className="text-muted-foreground text-sm text-wrap relative top-[280%] w-[115%] right-[47%] px-2">
            Your sales performance score is better than 80% other users
          </p>
        </section>
      </div>
    </>
  );
}

export default Goals;
