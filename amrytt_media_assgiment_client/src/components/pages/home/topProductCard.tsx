"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Payment } from "@/utils/model/datatable";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/product";

export interface TopProductCardProps {
  setProductData: (data: Payment[]) => void
}

export default function TopProductCard({ setProductData }: TopProductCardProps) {
   const [data,setData] = useState<Payment[]>([]);
  
    useEffect(() => {
            async function getData() {
              // Fetch data from your API here.
              try {
                const response = await getProducts();
                console.log(response);
                setData(response);
                setProductData(response);
              } catch (error) {
                console.log("Error",error)
              }
              // active json products
              // setData(productDefault)
            }
    
             getData()
        }, [])

  return (
    <Card className=" rounded-lg shadow-lg p-3 bg-white border-0 w-full ">
  <CardHeader>
    <CardTitle>Top Product</CardTitle>
    <CardDescription>Top Product in This Month</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-none flex gap-4 flex-col">
      {data
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5)
        .map((product) => (
        <li key={product._id} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gray-300 w-10 h-10 inline-block mr-3 rounded-lg" />
          <div>
          <p>{product.product}
          </p>
          <CardDescription className="capitalize">{product.category}</CardDescription>
            </div>
            </div>
            <p>₹ {new Intl.NumberFormat('en-IN').format(product.amount)}</p>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

  );
}
