// Menu items.
"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import  AddProduct  from "./add-product";
import React from "react";

export interface HeaderProps {
  handleAddProduct: (data:{ product: string; amount: string; category: string; status: string }) => void;
  handleExportData: () => void;
}

export default function Header({ handleAddProduct,handleExportData }: HeaderProps) {
  return (
    <>
      <div className="w-full flex justify-between items-center gap-4 ">
        <div>
          <h1 className="font-public-sans text-[24px] font-semibold leading-[32px] tracking-[0.01em] text-left  decoration-skip-ink-none">
            Products
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleExportData} className="bg-lilyWhite-50 border-0 text-steelBlue-600 
          hover:bg-lilyWhite-50 
          hover:text-gray-600 hover:opacity-90">
            <DownloadIcon /> Export
          </Button>
          <AddProduct handleAddProduct={handleAddProduct} />
        
        </div>
      </div>
    </>
  );
}
