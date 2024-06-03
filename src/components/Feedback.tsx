import React from "react";

type Props = {};

function Feedback({}: Props) {
  return (
    <>
      <div>
        <p className="text-muted-foreground text-sm">Community Feedback</p>
        <h2 className="text-xl font-bold pb-3 pt-4">Mostly Positive</h2>
      </div>
      <div>
        <div className="w-full absolute left-3 bottom-[17%]">
          <div className="border w-[22%] h-3 rounded-sm inline-block bg-red-500"></div>
          <div className="border w-[28%] h-3 rounded-sm  inline-block bg-orange-500"></div>
          <div className="border w-[30%] h-3 rounded-sm  inline-block bg-green-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <section>
          <p className="text-sm text-muted-foreground pt-6 pb-4">Negative</p>
          <p className="font-bold px-4">12</p>
        </section>
        <section>
          <p className="text-sm text-muted-foreground pt-6 pb-4">Neutral</p>
          <p className="font-bold px-4">34</p>
        </section>
        <section>
          <p className="text-sm text-muted-foreground pt-6 pb-4">Positive</p>
          <p className="font-bold px-4">134</p>
        </section>
      </div>
    </>
  );
}

export default Feedback;
