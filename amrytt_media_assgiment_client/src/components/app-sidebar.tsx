import {
  Home,
  Layers2Icon,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: Layers2Icon,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBasketIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="h-20 px-4 py-5 gap-3">
            <Image
              src="/images/Logo.svg"
              alt="Amrytt Media"
              width={34}
              height={34}
            />
            <h1 className="text-2xl text-mirage-900">Amrytt</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="px-2 py-1 font-medium hover:bg-lilyWhite-50 hover:outline-l-2 hover:outline-steelBlue-600 hover:text-steelBlue-600"
                  >
                    <SidebarMenuButton asChild className="text-manatee-600  hover:bg-transparent hover:text-steelBlue-600">
                      <Link href={item.url} className=" ">
                        <item.icon className=" h-6 w-6" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
