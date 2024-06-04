import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SmallCard, {
  Props,
  CardStructure,
  GraphCardStructure,
} from "./SmallCard";

import BarChart from "./charts/BarChart";
import Goals from "./Goals";
import CustomerDevice from "./CustomerDevice";
import Feedback from "./Feedback";
import TopChart from "./TopChart";

export default function MainCard() {
  const cardData: Props[] = [
    {
      label: "Purchases",
      amount: "4,294",
      description: "+32%",
    },
    {
      label: "Revenue",
      amount: "$322,3k",
      description: "+49%",
    },
    {
      label: "Refunds",
      amount: "$8,2k",
      description: "+7%",
    },
  ];

  return (
    <>
      <Card className="w-full min-h-screen px-[18px] shadow-md justify-around">
        <CardHeader>
          <CardTitle>
            <div className="text-2xl m-1">Dashboard</div>
          </CardTitle>
          <section className="w-[700px] gap-4 grid grid-cols-3">
            {cardData.map((d, i) => (
              <SmallCard
                key={i}
                label={d.label}
                amount={d.amount}
                description={d.description}
              />
            ))}
          </section>
        </CardHeader>
        <section>
          <GraphCardStructure>
            <div className="w-full h-[15%] gap-2">
              <p className="my-2 font-semibold gap-2">Comparison</p>
              <BarChart />
            </div>
            <section className="flex gap-10 justify-center">
              <ul className=" gap-[45px] flex">
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    className="inline"
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#7E8EF1"
                      d="M0,4h32v24h-32z"
                    ></path>
                  </svg>
                  <span className="inline p-2 text-sm">This Year</span>
                </li>
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    className="inline"
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#6FDCE3"
                      d="M0,4h32v24h-32z"
                    ></path>
                  </svg>
                  <span className="inline p-2 text-sm">Last Year</span>
                </li>
              </ul>
            </section>
          </GraphCardStructure>
        </section>
        <section>
          <GraphCardStructure>
            <TopChart />
          </GraphCardStructure>
        </section>
      </Card>
      <div className="grid absolute right-[12%] w-[25%] h-[1000px]">
        <div className="grid grid-rows-3 gap-[2%]">
          <CardStructure className="w-[400px] h-[285px]">
            <Goals />
          </CardStructure>
          <CardStructure className="w-[400px] h-[285px]">
            <CustomerDevice />
          </CardStructure>
          <CardStructure className="w-[400px] h-[250px]">
            <Feedback />
          </CardStructure>
        </div>
      </div>
    </>
  );
}
