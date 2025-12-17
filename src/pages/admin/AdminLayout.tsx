import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Users, Calendar, BarChart2 } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <div className="flex h-full flex-col p-4 bg-white dark:bg-gray-800 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Admin Panel
            </h2>
            <nav className="flex flex-col gap-2">
              <Link to="/admin">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Disciples
                </Button>
              </Link>
              <Link to="/admin/schedule-training">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule Training
                </Button>
              </Link>
              <Link to="/admin/events">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full"
                >
                  <BarChart2 className="mr-3 h-5 w-5" />
                  Events
                </Button>
              </Link>
            </nav>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="h-full overflow-y-auto">
            <Outlet />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AdminLayout;
