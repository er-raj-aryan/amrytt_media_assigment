"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Payment } from "@/utils/model/datatable";
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
interface ProductCardData {
  id: number;
  title: string;
  value: number;
  percentage: number;
  isIncrease: boolean;
  increaseValue: number;
  icon: JSX.Element;
}

interface ProductCardProps {
  data: ProductCardData;
  productData: Payment[];
  categoryData: Payment[];
}

export default function ProductCard({ data, productData, categoryData }: ProductCardProps) {
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
      {data.title === "Total Amount" ? (
        <p className="text-4xl font-bold text-gray-900">
          ₹ {productData.reduce((prev, curr) => prev + curr.amount, 0)}
        </p>
      ) : data.title === "Total Category" ? (
        <p className="text-4xl font-bold text-gray-900">{categoryData.length}</p>
      ) : data.title === "Total Product" ? (
        <p className="text-4xl font-bold text-gray-900">{productData.length}</p>
      ) : (
        <p className="text-4xl font-bold text-gray-900">{data.value}</p>
      )}
    </CardContent>

    {/* Footer Section */}
    <CardFooter className="flex items-center gap-2">
      <span className={`${data.isIncrease ? 'text-green-500' : 'text-red-500'} text-sm font-medium flex items-center gap-1`}>
        {data.percentage}% {data.isIncrease ? <span>&#9650;</span> : <span>&#9660;</span>}
      </span>
      <span className="text-gray-500 text-sm">
        + 
        {/* @ts-expect-error: createdAt may not exist */}
        {(data.title === "Total Category" ? categoryData : productData).filter((item: Payment) => new Date(item.created).toDateString() === new Date().toDateString()).length}&nbsp;
        today
      </span>
    </CardFooter>
  </Card>
  );
}
