"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Payment } from "@/utils/model/datatable";
import { DeleteIcon, Edit3Icon, PhoneCallIcon, ShoppingBagIcon } from "lucide-react";
import moment from "moment";

export interface TopCategoryCardProps {
  data: Payment[];
  handleEdit: (data: { _id: string; category: string;}) => void;
  handleDelete: (data: { _id: string; category: string; }) => void;
}
export default function TopCategoryCard({ data, handleEdit, handleDelete }: TopCategoryCardProps) {
  return (
    <Card className=" rounded-lg shadow-lg p-3 bg-white border-0 w-full ">
      <CardHeader>
        <CardTitle>Top Category</CardTitle>
        <CardDescription>Top Category in This Month</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-none flex gap-4 flex-col">
          {data &&
            data.length > 0 &&
            data.map((product) => (
              <li
                key={product._id}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-300 w-10 h-10  mr-3 rounded-lg flex justify-center items-center">
                    {product.category === "electronic" ? (
                      <PhoneCallIcon />
                    ) : (
                      <ShoppingBagIcon />
                    )}
                  </div>
                  <div>
                  <p className="text-sm font-semibold capitalize">
                    {product.category}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">{moment(product.created).format("MMMM Do, YYYY")}</p>
                  </div>
                  
                </div>
                <div className="flex items-end gap-2 flex-col">
                  <div className="flex gap-2 justify-end">
                    <Button variant={'secondary'} className="w-5 " onClick={() => handleEdit(product)}>
                    <Edit3Icon />
                    </Button>
                    <Button variant={'destructive'} className="w-5 " onClick={() => handleDelete(product)}>
                    <DeleteIcon />
                    </Button>
                  </div>
                
                </div>

              </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
