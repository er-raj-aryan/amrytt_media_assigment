// Menu items.
"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export interface HeaderProps {
  handleAddProduct: (data: {
    product: string;
    amount: string;
    category: string;
    status: string;
  }) => void;
}

export default function AddProduct({ handleAddProduct }: HeaderProps) {
  const [data, setData] = useState({
    product: "",
    amount: "",
    category: "",
    status: "",
  });

  const handleClickAddProduct = () => {
    handleAddProduct(data);
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
      <Dialog>
        <DialogTrigger >
          <Button className="bg-steelBlue-600 text-white hover:opacity-90 hover:bg-steelBlue-600">
            <PlusIcon /> Add Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="gap-2">
            <DialogTitle>Add a new product to your store</DialogTitle>
            <DialogDescription>
              Please enter the product details below. This information will be
              used to create a new product in your store.
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
              onValueChange={(value) =>
                setData((prevState) => ({ ...prevState, category: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Product Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronic">Electronic</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
              </SelectContent>
            </Select>
            {/* product price */}
            <Input
              placeholder="Price"
              value={data.amount}
              name="amount"
              onChange={handleChange}
            />
            {/* product status */}
            <Select
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
                data.amount === "" &&
                data.category === "" &&
                data.status === ""
              }
              type="submit"
              className=""
              onClick={() => handleClickAddProduct()}
            >
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
