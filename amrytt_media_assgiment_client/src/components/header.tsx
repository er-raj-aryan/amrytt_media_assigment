// Menu items.
"use client";
import { Bell, Calendar, Mail, Search } from "lucide-react";
import { Input } from "./ui/input";
import Badge from "@mui/material/Badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <div className="w-full flex justify-between items-center gap-4 ">
      {/* Search bar */}
      <div className="flex w-full  items-center shadow-sm border-0 rounded-md bg-white">
        <div className="h-6 w-6">
          <Search className="text-manatee-600 h-full w-full p-1" />
        </div>
        <Input
          placeholder="Search"
          className="border-0  "
          style={{ boxShadow: "none" }}
        />
      </div>
      {/* Menu */}
      <div className="flex items-center gap-4">
        <Button variant={"ghost"} className="">
          <Calendar className="text-manatee-600 " />
        </Button>

        <Button variant={"ghost"}>
          <Badge badgeContent={2} color="primary">
            <Bell className="text-manatee-600 " />
          </Badge>
        </Button>

        <Button variant={"ghost"}>
          <Badge badgeContent={4} color="primary">
            <Mail className="text-manatee-600 " />
          </Badge>
        </Button>
      </div>
      {/* Profile */}
      <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm text-nowrap">John Doe</span>
          <span className="text-xs text-manatee-600">Admin</span>
        </div>
      </div>
      </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      
    </div>
  );
}
