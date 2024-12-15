import {
    BookCheck,
    Calendar,
    ChevronDown,
    Contact,
    FolderClosed,
    Home,
    MessageSquareText,
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
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "./ui/collapsible";
  
  // Menu items.
  const items = [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
    },
    {
      title: "E-Commerce",
      url: "#",
      icon: ShoppingCart,
      type: "dropdown",
      options: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Orders",
          url: "#",
        },
        {
          title: "Customer",
          url: "#",
        },
      ],
    },
    {
      title: "Project",
      url: "#",
      icon: BookCheck,
    },
    {
      title: "Contact",
      url: "#",
      icon: Contact,
      type: "dropdown",
      options: [
        {
          title: "Contact me",
          url: "/products",
        },
        {
          title: "Email",
          url: "#",
        },
        {
          title: "Whatsapp",
          url: "#",
        },
      ],
    },
    {
      title: "File Manager",
      url: "#",
      icon: FolderClosed,
    },
    {
      title: "Chat",
      url: "#",
      icon: MessageSquareText,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
  ];
  
  export function AppSidebar() {
    return (
      <Sidebar className="bg-white">
        <SidebarContent>
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
                {items.map((item) =>
                  item.type === "dropdown" ? (
                    <Collapsible
                      key={item.title}
                      defaultOpen={false}
                      className="group/collapsible"
                    >
                      <SidebarGroup>
                        <SidebarGroupLabel asChild>
                          <CollapsibleTrigger>
                            <SidebarMenuItem
                              key={item.title}
                              className="   font-semibold hover:font-bold"
                            >
                              {/* <SidebarMenuButton asChild className=" "> */}
                                <a href={item.url} className=" text-mirage-900 flex items-center gap-2 text-sm">
                                  <item.icon className="text-manatee-600 h-4 w-4" />
                                  <span >{item.title}</span>
                                </a>
                              {/* </SidebarMenuButton> */}
                            </SidebarMenuItem>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                          <SidebarGroupContent>
                            {item.options.map((option) => (
                              <SidebarMenuItem
                                key={option.title}
                                className=" px-2 py-1 font-semibold hover:font-bold"
                              >
                                <SidebarMenuButton asChild className=" ">
                                  <a href={option.url} className=" ">
                                    <span>{option.title}</span>
                                  </a>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarGroupContent>
                        </CollapsibleContent>
                      </SidebarGroup>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem
                      key={item.title}
                      className=" px-2 py-1 font-semibold hover:font-bold"
                    >
                      <SidebarMenuButton asChild className=" ">
                        <a href={item.url} className=" ">
                          <item.icon className="text-manatee-600 h-6 w-6" />
                          <span>{item.title}</span>
                        </a>
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
  