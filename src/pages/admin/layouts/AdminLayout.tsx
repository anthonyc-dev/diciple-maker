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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  // If your library has one, import VisuallyHidden here if you ever want to hide DialogTitle
} from "@/components/ui/dialog";
import { supabase } from "../../../supabaseClient";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setIsLogoutLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // Could optionally display error
    }
    setIsLogoutLoading(false);
    setIsLogoutModalOpen(false);
    setIsMobileSidebarOpen(false);
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
            className="justify-start  px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
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
            className="justify-start  px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Calendar className="mr-3 h-5 w-5 text-white" />
            Schedule Training
          </Button>
        </Link>
        <Link to="/admin/events" onClick={() => setIsMobileSidebarOpen(false)}>
          <Button
            variant="ghost"
            className="justify-start  px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <BarChart2 className="mr-3 h-5 w-5 text-white" />
            Events
          </Button>
        </Link>
      </nav>
      <div className="mt-8">
        <Button
          variant="ghost"
          className="justify-start  px-4 py-3 w-full text-white hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsLogoutModalOpen(true)}
        >
          <LogOut className="mr-3 h-5 w-5 text-white" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Logout Confirmation Modal */}
      <Dialog open={isLogoutModalOpen} onOpenChange={setIsLogoutModalOpen}>
        <DialogContent>
          <DialogTitle>Confirm Logout</DialogTitle>
          <div id="logout-dialog-description">
            Are you sure you want to logout?
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              className="mr-2"
              disabled={isLogoutLoading}
              onClick={() => setIsLogoutModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={isLogoutLoading}
              onClick={handleLogout}
            >
              {isLogoutLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin mr-2 h-4 w-4 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"
                    ></path>
                  </svg>
                  Logging out...
                </span>
              ) : (
                "Logout"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex h-screen bg-blue-50 dark:bg-gray-900">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden absolute top-4 left-4 z-50">
          <Sheet
            open={isMobileSidebarOpen}
            onOpenChange={setIsMobileSidebarOpen}
          >
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[250px]">
              <DialogTitle></DialogTitle>
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 h-screen">
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
          <div className="h-full overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
