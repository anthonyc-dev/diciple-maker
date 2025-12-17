import React, { useState } from "react";
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

// Dummy data for users (extended to more than 10 for testing pagination)
const users = [
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    number: "123-456-7890",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane",
    lastName: "Smith",
    number: "098-765-4321",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "Peter",
    lastName: "Jones",
    number: "111-222-3333",
    email: "peter.jones@example.com",
  },
  {
    id: "4",
    name: "Mary",
    lastName: "Brown",
    number: "444-555-6666",
    email: "mary.brown@example.com",
  },
  {
    id: "5",
    name: "Alice",
    lastName: "Johnson",
    number: "777-888-9999",
    email: "alice.johnson@example.com",
  },
  {
    id: "6",
    name: "Sam",
    lastName: "Miller",
    number: "123-987-6543",
    email: "sam.miller@example.com",
  },
  {
    id: "7",
    name: "Laura",
    lastName: "Wilson",
    number: "888-111-2222",
    email: "laura.wilson@example.com",
  },
  {
    id: "8",
    name: "David",
    lastName: "Clark",
    number: "555-666-7777",
    email: "david.clark@example.com",
  },
  {
    id: "9",
    name: "Emma",
    lastName: "Martinez",
    number: "111-333-5555",
    email: "emma.martinez@example.com",
  },
  {
    id: "10",
    name: "Olivia",
    lastName: "Garcia",
    number: "222-444-6666",
    email: "olivia.garcia@example.com",
  },
  {
    id: "11",
    name: "Henry",
    lastName: "Lee",
    number: "333-555-7777",
    email: "henry.lee@example.com",
  },
  {
    id: "12",
    name: "Isabella",
    lastName: "Walker",
    number: "444-888-0000",
    email: "isabella.walker@example.com",
  },
];

const USERS_PER_PAGE = 10;

const HomeAdmin = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const paginatedUsers = users.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  const goToPrev = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-3xl">Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.number}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-6 space-x-2">
            <Button variant="outline" disabled={page === 1} onClick={goToPrev}>
              Previous
            </Button>
            <span>
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={page === totalPages}
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
