"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JSX } from "react";

interface ProductCardData {
  id: number;
  title: string;
  value: number;
  percentage: number;
  isIncrease: boolean;
  increaseValue: number;
  icon: JSX.Element;
}

export default function ProductCard({ data }: { data: ProductCardData }) {
  return (
    <Card className="rounded-lg shadow-lg p-3 bg-white border-0 w-full md:w-[264px]">
    {/* Header Section */}
    <CardHeader className="flex items-center justify-between flex-row">
      <div>
        <CardTitle className="text-sm text-gray-500 font-medium">{data.title}</CardTitle>
      </div>
      <div className="bg-blue-100 rounded-full p-2">
        {data.icon}
      </div>
    </CardHeader>

    {/* Content Section */}
    <CardContent>
      <p className="text-4xl font-bold text-gray-900">{data.value}</p>
    </CardContent>

    {/* Footer Section */}
    <CardFooter className="flex items-center gap-2">
      <span className={`${data.isIncrease ? 'text-green-500' : 'text-red-500'} text-sm font-medium flex items-center gap-1`}>
        {data.percentage}% {data.isIncrease ? <span>&#9650;</span> : <span>&#9660;</span>}
      </span>
      <span className="text-gray-500 text-sm">+ ${data.increaseValue} today</span>
    </CardFooter>
  </Card>
  );
}
