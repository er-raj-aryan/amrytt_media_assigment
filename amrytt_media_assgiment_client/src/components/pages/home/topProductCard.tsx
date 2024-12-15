"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productDefault } from "@/data/products";



export default function TopProductCard() {
  return (
    <Card className=" rounded-lg shadow-lg p-3 bg-white border-0 w-full ">
  <CardHeader>
    <CardTitle>Top Product</CardTitle>
    <CardDescription>Top Product in This Month</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-none flex gap-4 flex-col">
      {productDefault.map((product) => (
        <li key={product.id} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gray-300 w-10 h-10 inline-block mr-3 rounded-lg" />
          <div>
          <p>{product.product}
          </p>
          <CardDescription className="capitalize">{product.category}</CardDescription>
            </div>
            </div>
            <p>${product.amount}</p>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

  );
}
