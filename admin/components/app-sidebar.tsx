"use client";

import { usePathname } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { NomNomLogo } from "@/app/components/OrdersInfo";

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <NomNomLogo />

        <Tabs defaultValue="menu" className="flex flex-col p-4 gap-4">
          <TabsList>
            <Link href={`/dashboard/foods`}>
              <TabsTrigger
                value="menu"
                className={`${pathName === "/dashboard/dfoos"}`}
              >
                <PanelsTopLeft />
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

          <TabsContent value="menu">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="orders">Change your password here.</TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  );
}
