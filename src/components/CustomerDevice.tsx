import React from "react";
import LineChartStructure from "./LineChart";

type Props = {};

function CustomerDevice({}: Props) {
  return (
    <>
      <div>
        <section>
          <h2>Customers by device</h2>
        </section>
        <section>
          <LineChartStructure />
        </section>
      </div>
    </>
  );
}

export default CustomerDevice;
