import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy data for users
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
];

const HomeAdmin = () => {
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
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.number}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeAdmin;