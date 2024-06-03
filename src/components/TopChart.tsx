import React from "react";
import { Camera } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableData = [
  {
    imageIcon: <Camera className="w-[15px]" />,
    productName: "Camera Mi 360",
    soldAmount: "432",
    unitPrice: "$120",
    revenue: "$51,840",
    rating: "4.81",
  },
  {
    imageIcon: <Camera className="w-[15px]" />,
    productName: "Massage Gun",
    soldAmount: "120",
    unitPrice: "$112",
    revenue: "$25,440",
    rating: "3.44",
  },
  {
    imageIcon: <Camera className="w-[15px]" />,
    productName: "Vacumm-Mop 2 Pro",
    soldAmount: "221",
    unitPrice: "$320",
    revenue: "$15,123",
    rating: "3.22",
  },
  {
    imageIcon: <Camera className="w-[15px]" />,
    productName: "Vacumm-Mop 2",
    soldAmount: "223",
    unitPrice: "$234",
    revenue: "$32,812",
    rating: "3.00",
  },
];

export function TopChart() {
  return (
    <div>
      <section>
        <p>Top Products</p>
      </section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%]">Product</TableHead>
            <TableHead className="text-center">Sold amount</TableHead>
            <TableHead className="text-center">Unit price</TableHead>
            <TableHead className="text-center">Revenue</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.productName}>
              <TableCell className="font-small">
                <div className="flex gap-1">
                  {data.imageIcon}
                  {data.productName}
                </div>
              </TableCell>
              <TableCell className="text-center">{data.soldAmount}</TableCell>
              <TableCell className="text-center">{data.unitPrice}</TableCell>
              <TableCell className="text-center">{data.revenue}</TableCell>
              <TableCell className="text-right">{data.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TopChart;
