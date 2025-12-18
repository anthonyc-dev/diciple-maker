import React, { useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  FileSpreadsheet,
  Loader2,
  Trash2,
} from "lucide-react";
import * as XLSX from "xlsx";

import { supabase } from "../../supabaseClient";

const USERS_PER_PAGE = 10;

interface UserType {
  id: number;
  name: string;
  lastname: string;
  number: string;
  email: string;
}

const HomeAdmin = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  // Fetch all users for search and export
  const fetchAllUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      setAllUsers([]);
      setTotalUsers(0);
    } else {
      setAllUsers(data || []);
      setTotalUsers(data?.length || 0);
    }
    setLoading(false);
  };

  useEffect(() => {
    let ignore = false;
    const fetchUsers = async () => {
      await fetchAllUsers();
    };
    fetchUsers();
    return () => {
      ignore = true;
    };
  }, []);

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return allUsers;
    }
    const query = searchQuery.toLowerCase();
    return allUsers.filter(
      (user) =>
        user.name?.toLowerCase().includes(query) ||
        user.lastname?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query) ||
        user.number?.toLowerCase().includes(query)
    );
  }, [allUsers, searchQuery]);

  // Paginate filtered users
  const paginatedUsers = useMemo(() => {
    const from = (page - 1) * USERS_PER_PAGE;
    const to = from + USERS_PER_PAGE;
    return filteredUsers.slice(from, to);
  }, [filteredUsers, page]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  // Update displayed users when pagination changes
  useEffect(() => {
    setUsers(paginatedUsers);
  }, [paginatedUsers]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const displayTotal = filteredUsers.length;

  const goToPrev = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // Export to Excel
  const exportToExcel = () => {
    const dataToExport = searchQuery.trim() ? filteredUsers : allUsers;

    if (dataToExport.length === 0) {
      return;
    }

    // Prepare data for Excel
    const worksheetData = dataToExport.map((user) => ({
      ID: user.id,
      "First Name": user.name,
      "Last Name": user.lastname,
      "Phone Number": user.number,
      Email: user.email,
    }));

    // Create workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Disciples");

    // Set column widths
    const columnWidths = [
      { wch: 8 }, // ID
      { wch: 15 }, // First Name
      { wch: 15 }, // Last Name
      { wch: 15 }, // Phone Number
      { wch: 30 }, // Email
    ];
    worksheet["!cols"] = columnWidths;

    // Generate Excel file and download
    const fileName = `disciples_${new Date().toISOString().split("T")[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // Delete user
  const handleDeleteUser = async (userId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user? This action cannot be undone."
    );
    if (!confirmed) return;

    setDeletingUserId(userId);
    const { error } = await supabase.from("users").delete().eq("id", userId);

    if (error) {
      alert("Failed to delete. Try again.");
    } else {
      // After delete, re-fetch list
      await fetchAllUsers();
    }
    setDeletingUserId(null);
  };

  return (
    <div className="flex flex-col h-full p-6 space-y-6">
      <Card className="flex-1 shadow-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-hero dark:from-gray-800 dark:to-gray-800 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-black/20 dark:bg-blue-900 rounded-lg">
                <Users className="h-6 w-6 text-hero-accent dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-3xl text-white dark:text-gray-100">
                  Disciples
                </CardTitle>
                <p className="text-sm text-gray-400 dark:text-gray-400 mt-1">
                  {displayTotal} {displayTotal === 1 ? "disciple" : "disciples"}
                  {searchQuery.trim() && ` found`}
                </p>
              </div>
            </div>
            <Button
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white shadow-md"
              disabled={allUsers.length === 0}
            >
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export to Excel
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name, email, or phone number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <Table>
              <TableHeader className="bg-gray-50 dark:bg-gray-800">
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">
                    First Name
                  </TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">
                    Last Name
                  </TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">
                    Phone Number
                  </TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  // Show only one loading row with spinner, not every row
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <Loader2 className="h-6 w-6 mr-2 animate-spin text-gray-500" />
                        <span className="text-gray-500 text-lg">
                          Loading... 🙌
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Users className="h-8 w-8 text-gray-400" />
                        <span className="text-gray-500 dark:text-gray-400">
                          {searchQuery.trim()
                            ? "No disciples found matching your search."
                            : "No disciples found."}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow
                      key={user.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-700"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {user.name || "-"}
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {user.lastname || "-"}
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {user.number || "-"}
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {user.email || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="destructive"
                          size="icon"
                          className="mx-auto"
                          onClick={() => handleDeleteUser(user.id)}
                          disabled={deletingUserId === user.id}
                          title="Delete user"
                        >
                          {deletingUserId === user.id ? (
                            <Loader2 className="animate-spin w-4 h-4" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {!loading && filteredUsers.length > 0 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={goToPrev}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredUsers.length === 0
                      ? 0
                      : (page - 1) * USERS_PER_PAGE + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold">
                    {Math.min(page * USERS_PER_PAGE, filteredUsers.length)}
                  </span>{" "}
                  of <span className="font-semibold">{displayTotal}</span>{" "}
                  disciples
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Page {page} of {totalPages || 1}
                </span>
              </div>
              <Button
                variant="outline"
                disabled={page === totalPages || totalPages === 0}
                onClick={goToNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeAdmin;
