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
import { getCategories } from "@/api/category";
import { PhoneCallIcon, ShoppingBagIcon } from "lucide-react";


export interface TopCategoryCardProps {
  productData: Payment[]
}
export interface TopCategoryCardProps {
  productData: Payment[]
  setCategoryData: React.Dispatch<React.SetStateAction<Payment[]>>
}
export default function TopCategoryCard({productData,setCategoryData}: TopCategoryCardProps) {
   const [data,setData] = useState<Payment[]>([]);
  
    useEffect(() => {
            async function getData() {
              // Fetch data from your API here.
              try {
                const response = await getCategories();
                console.log(response);
                setData(response)
                setCategoryData(response)
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
    <CardTitle>Top Category</CardTitle>
    <CardDescription>Top Category in This Month</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-none flex gap-4 flex-col">
      {data && data.length > 0 &&   data.map((product) => (
        <li key={product._id} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
          <div className="bg-gray-300 w-10 h-10  mr-3 rounded-lg flex justify-center items-center" >
              {product.category === "electronic" ? <PhoneCallIcon /> : <ShoppingBagIcon />}
            </div>
          <p className="text-sm text-gray-500 font-medium capitalize">{product.category}
          </p>
            </div>
            <p>{productData.filter(item => item.category === product.category).length}</p>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

  );
}
