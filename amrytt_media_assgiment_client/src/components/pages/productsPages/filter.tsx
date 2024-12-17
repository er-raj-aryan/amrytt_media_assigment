// Menu items.
"use client";

import { Button } from "@/components/ui/button";
import { LayoutGridIcon, Search, XIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Category {
  _id: string;
  category: string;
}

export interface FilterProps {
  handleSearch: (data: string) => void;
  category: Category[];
}

export default function Filter({ handleSearch, category }: FilterProps) {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState(false);



  return (
    <div className="w-full flex justify-between items-center gap-4 flex-wrap ">
      <div>
        <Tabs
          onValueChange={(value) => handleSearch(value)}
          defaultValue=""
          className="w-[400px] capitalize"
        >
          <TabsList>
            <TabsTrigger value="">All Product</TabsTrigger>
            {category.map((cat) => (
              <TabsTrigger
                className="capitalize"
                key={cat._id}
                value={cat.category}
              >
                {cat.category}
              </TabsTrigger>
            ))}
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
        <div className="flex items-center gap-1">
        <Button variant={"outline"} className="border-0" onClick={() => setOpenFilter(!openFilter)}>
        <DropdownMenu open={openFilter} onOpenChange={setOpenFilter}>
          <DropdownMenuTrigger>Filter</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => {handleSearch("a-z"); setActiveFilter(true)}}>Product (A-Z)</DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem onClick={() => {handleSearch("0-10"); setActiveFilter(true)}}>Amount (high-low)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </Button>
          {activeFilter && 
          <Button variant={"destructive"} className="border-0 w-5" 
          onClick={() => {handleSearch("clear"); setActiveFilter(false)}}><XIcon /></Button>
          }
        </div>

        <Button variant={"outline"} className="border-0">
          <LayoutGridIcon /> Edit Column
        </Button>
      </div>
    </div>
  );
}
