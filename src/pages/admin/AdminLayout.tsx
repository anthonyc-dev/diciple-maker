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
    <div className="flex h-screen bg-blue-50 dark:bg-gray-900">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <div className="flex h-full flex-col p-4 bg-gradient-to-b from-blue-700 to-blue-900 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Admin Panel
            </h2>
            <nav className="flex flex-col gap-2">
              <Link to="/admin">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full text-blue-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Users className="mr-3 h-5 w-5 text-blue-200" />
                  Disciples
                </Button>
              </Link>
              <Link to="/admin/schedule-training">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full text-blue-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Calendar className="mr-3 h-5 w-5 text-blue-200" />
                  Schedule Training
                </Button>
              </Link>
              <Link to="/admin/events">
                <Button
                  variant="ghost"
                  className="justify-start text-lg px-4 py-3 w-full text-blue-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <BarChart2 className="mr-3 h-5 w-5 text-blue-200" />
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
