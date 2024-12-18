// Menu items.
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

export interface Category {
  _id: string;
  category: string;
}

export interface HeaderProps {
  handleEditProduct: (data: {
    _id: string;
    product: string;
    amount: number;
    category: string;
    status: string;
  }) => void;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  openEdit: boolean;
  editData: {
    _id: string;
    product: string;
    amount: number;
    category: string;
    status: string;
  };
  category: Category[];
}

export default function EditProduct({
  handleEditProduct,
  setOpenEdit,
  openEdit,
  editData,
  category,
}: HeaderProps) {
  const [data, setData] = useState({
    _id: "",
    product: "",
    amount: 0,
    category: "",
    status: "",
  });

 

  useEffect(() => {
    if (openEdit && editData) {
      setData({
        _id: editData._id,
        product: editData.product,
        amount: editData.amount,
        category: editData.category,
        status: editData.status,
      });
    }
  }, [openEdit, editData]);

  const handleClickAddProduct = () => {
    handleEditProduct(data);
    document.getElementById("close")?.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent>
          <DialogHeader className="gap-2">
            <DialogTitle>Edit product</DialogTitle>
            <DialogDescription>
              Please enter the product details below. This information will be
              used to update the product in your store.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 ">
            {/* product name */}
            <Input
              placeholder="Enter Product Name"
              value={data.product}
              name="product"
              onChange={handleChange}
            />
            {/* product category */}
            <Select
              value={data.category}
              onValueChange={(value) =>
                setData((prevState) => ({ ...prevState, category: value }))
              }
            >
              <SelectTrigger className="w-full capitalize">
                <SelectValue placeholder="Select Product Category" />
              </SelectTrigger>
              <SelectContent>
                {category?.map((item) => (
                  <SelectItem
                    key={item._id}
                    className="capitalize"
                    value={item.category?.toLocaleLowerCase()}
                  >
                    {item.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* product price */}
            <Input
              type="number"
              placeholder="Price"
              value={data.amount}
              name="amount"
              onChange={handleChange}
            />
            {/* product status */}
            <Select
              value={data.status}
              onValueChange={(value) =>
                setData((prevState) => ({ ...prevState, status: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Product Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="old">Old</SelectItem>
                <SelectItem value="refurbish">Refurbish</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="flex justify-end">
                  
                </div> */}

          <DialogFooter className="sm:justify-end">
            <DialogClose asChild id="close">
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              disabled={
                data.product === "" &&
                data.amount === 0 &&
                data.category === "" &&
                data.status === ""
              }
              type="submit"
              className=""
              onClick={() => handleClickAddProduct()}
            >
              Update Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
