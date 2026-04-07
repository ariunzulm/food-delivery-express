import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { UserProfile } from "../_components/UserProfile";
import { ModeToggle } from "../_components/ModeToggle";

export default function DashboatdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="w-full justify-end items-center flex p-4 gap-2">
          <SidebarTrigger />
          <ModeToggle />
          <UserProfile />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
