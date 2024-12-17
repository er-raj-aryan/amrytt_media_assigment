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
import React, { useState } from "react";




export interface HeaderProps {
  handleAddCategory: (data: {
    category: string;
  }) => void;
}

export default function AddCategory({ handleAddCategory }: HeaderProps) {
  const [data, setData] = useState({
    category: "",
  });

  

  const handleClickAddCategory = () => {
    handleAddCategory(data);
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
            <PlusIcon /> Add Category
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="gap-2">
            <DialogTitle>Add a new category to your store</DialogTitle>
            <DialogDescription>
              Please enter the category details below. This information will be
              used to create a new product in your store.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 ">
            {/* product category */}
            <Input
              placeholder="Enter category name"
              value={data.category}
              name="category"
              onChange={handleChange}
            />
            </div>
           

          <DialogFooter className="sm:justify-end">
            <DialogClose asChild id="close">
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              disabled={
                data.category === "" 
              }
              type="submit"
              className=""
              onClick={() => handleClickAddCategory()}
            >
              Add Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
