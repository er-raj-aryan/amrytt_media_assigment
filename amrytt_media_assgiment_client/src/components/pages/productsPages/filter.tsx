// Menu items.
"use client";

import { Button } from "@/components/ui/button";
import { LayoutGridIcon, Search, SlidersHorizontalIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import React from "react";

export interface FilterProps {
  handleSearch: (data:string) => void;
}

export default function Filter({ handleSearch }: FilterProps) {
  return (
    <div className="w-full flex justify-between items-center gap-4 ">
      <div>
        <Tabs onValueChange={(value) => handleSearch(value)} defaultValue="" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="">All Product</TabsTrigger>
            <TabsTrigger value="electronic">Electronics</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="clothing">Clothing</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
      </div>

      <div className="flex items-center gap-2">
        {/* Search bar */}
      <div className="flex w-full  items-center shadow-sm  rounded-md bg-white border-0">
        <div className="h-6 w-6">
          <Search className="text-manatee-600 h-full w-full p-1" />
        </div>
        <Input
          placeholder="Search Product.."
          className="border-0  "
          style={{ boxShadow: "none" }}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
      <Button variant={"outline"} className="border-0"><SlidersHorizontalIcon /> Filter</Button>
      <Button variant={"outline"} className="border-0"><LayoutGridIcon /> Edit Column</Button>
       
      </div>
    </div>
  );
}
