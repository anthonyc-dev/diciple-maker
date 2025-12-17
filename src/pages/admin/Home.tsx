import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);

  // Fetch user count for pagination
  useEffect(() => {
    let ignore = false;
    async function fetchCount() {
      const { count, error } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true });
      if (!ignore) {
        if (error) {
          setTotalUsers(0);
        } else {
          setTotalUsers(count || 0);
        }
      }
    }
    fetchCount();
    return () => {
      ignore = true;
    };
  }, []);

  // Fetch users for current page
  useEffect(() => {
    let ignore = false;
    setLoading(true);
    async function fetchUsers() {
      const from = (page - 1) * USERS_PER_PAGE;
      const to = from + USERS_PER_PAGE - 1;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("id", { ascending: true })
        .range(from, to);
      if (!ignore) {
        if (error) {
          setUsers([]);
        } else {
          setUsers(data || []);
        }
        setLoading(false);
      }
    }
    fetchUsers();
    return () => {
      ignore = true;
    };
  }, [page]);

  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);

  const goToPrev = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-1 shadow-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
          <CardTitle className="text-3xl text-gray-900 dark:text-gray-100">Disciples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-100 dark:bg-gray-700">
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300">Name</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Last Name</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Number</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.lastname}</TableCell>
                      <TableCell>{user.number}</TableCell>
                      <TableCell>{user.email}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-6 space-x-2">
            <Button variant="outline" disabled={page === 1} onClick={goToPrev}>
              Previous
            </Button>
            <span className="text-gray-700 dark:text-gray-300">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={page === totalPages || totalPages === 0}
              onClick={goToNext}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeAdmin;
