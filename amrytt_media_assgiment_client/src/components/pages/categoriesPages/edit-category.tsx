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
import React, { useEffect, useState } from "react";




export interface HeaderProps {
    handleEditCategory: (data: {
    _id: string;    
    category: string;
  }) => void;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
    openEdit: boolean;
    editData: {
    _id: string;
    category: string;
  }
}

export default function EditCategory({ handleEditCategory ,setOpenEdit, openEdit,editData}: HeaderProps) {
  const [data, setData] = useState({
    _id: "",
    category: "",
  });

  useEffect(() => {
    if (editData) {
      setData(editData);
    }
  }, [editData]);

  

  const handleClickEditCategory = () => {
    handleEditCategory(data);
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
            <DialogTitle>Edit a new category to your store</DialogTitle>
            <DialogDescription>
              Please enter the category details below. This information will be
              used to create a new product in your store.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 ">
            {/* product category */}
            <Input
              type="text"
              className="capitalize"
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
              onClick={() => handleClickEditCategory()}
            >
              Edit Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
