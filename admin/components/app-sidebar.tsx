"use client";

import { usePathname } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { NomNomLogo } from "@/app/_components/NomNomLogo";

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar variant="floating">
      <SidebarContent className="p-4">
        <NomNomLogo />

        <Tabs defaultValue="menu" className="flex flex-col gap-4">
          <TabsList>
            <Link href={`/dashboard/foods`}>
              <TabsTrigger
                value="menu"
                className={`${pathName === "/dashboard/foods"}`}
              >
                Food menu
              </TabsTrigger>
            </Link>
            <Link href={`/dashboard/orders`}>
              <TabsTrigger
                value="orders"
                className={`${pathName === "/dashboard/orders"}`}
              >
                Orders
              </TabsTrigger>
            </Link>
          </TabsList>

          <TabsContent value="menu">Food Menu</TabsContent>
          <TabsContent value="orders">Food Orders</TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  );
}
