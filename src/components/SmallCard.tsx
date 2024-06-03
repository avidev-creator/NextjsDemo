import { cn } from "@/lib/utils";
import React from "react";

export type Props = {
  label: string;
  amount: string;
  description: string;
};

export default function SmallCard(props: Props) {
  return (
    <CardStructure>
      <section className="flex">
        <p className="text-sm text-muted-foreground">{props.label}</p>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs border rounded-xl bg-green-400 text-green-700 w-[50px]">
          {props.description}
        </p>
      </section>
    </CardStructure>
  );
}

export function CardStructure(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow-md",
        props.className
      )}
    ></div>
  );
}

export function GraphCardStructure(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl p-5",
        props.className
      )}
    ></div>
  );
}
