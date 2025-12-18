import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Users, Calendar, BarChart2, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = async () => {
    // In a real application, you would clear authentication tokens here
    // await supabase.auth.signOut(); // Example with Supabase
    navigate("/auth");
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col p-4 bg-hero text-white shadow-xl">
      <div className="mb-4 ml-4 gap-2">
        <img
          src="/discipling logo.png"
          alt="Discipling Logo"
          className="h-8 w-auto inline-block align-middle"
          style={{ verticalAlign: "middle" }}
        />
      </div>

      <nav className="flex flex-col gap-2 flex-1 mt-5">
        <Link to="/admin" onClick={() => setIsMobileSidebarOpen(false)}>
          <Button
            variant="ghost"
            className="justify-start text-lg px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Users className="mr-3 h-5 w-5 text-white" />
            Disciples
          </Button>
        </Link>
        <Link
          to="/admin/schedule-training"
          onClick={() => setIsMobileSidebarOpen(false)}
        >
          <Button
            variant="ghost"
            className="justify-start text-lg px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Calendar className="mr-3 h-5 w-5 text-white" />
            Schedule Training
          </Button>
        </Link>
        <Link to="/admin/events" onClick={() => setIsMobileSidebarOpen(false)}>
          <Button
            variant="ghost"
            className="justify-start text-lg px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <BarChart2 className="mr-3 h-5 w-5 text-white" />
            Events
          </Button>
        </Link>
      </nav>
      <div className="mt-8">
        <Button
          variant="ghost"
          className="justify-start text-lg px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={() => {
            handleLogout();
            setIsMobileSidebarOpen(false);
          }}
        >
          <LogOut className="mr-3 h-5 w-5 text-white" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-blue-50 dark:bg-gray-900">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-1 h-screen">
        {" "}
        {/* Ensure full height on desktop */}
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
            <SidebarContent />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="h-full overflow-y-auto">
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Content Area for Mobile - only Outlet */}
      <div className="lg:hidden flex-1 flex flex-col pt-16">
        {" "}
        {/* Adjust padding for mobile header */}
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
