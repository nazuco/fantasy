import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Edit, MoreHorizontal, Plus, Search, Shield, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - would come from your database
const users = [
  {
    id: 1,
    name: "Michael Brown",
    email: "michael.brown@school.edu",
    role: "student",
    grade: "9th",
    teamName: "Dream Team FC",
    status: "active",
    lastActive: "Today, 2:30 PM",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@school.edu",
    role: "student",
    grade: "10th",
    teamName: "Golden Boots United",
    status: "active",
    lastActive: "Today, 10:15 AM",
  },
  {
    id: 3,
    name: "David Garcia",
    email: "david.garcia@school.edu",
    role: "student",
    grade: "9th",
    teamName: "Freshman Phenoms",
    status: "active",
    lastActive: "Yesterday, 4:45 PM",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@school.edu",
    role: "student",
    grade: "11th",
    teamName: "Mighty Midfielders",
    status: "inactive",
    lastActive: "Feb 10, 2024",
  },
  {
    id: 5,
    name: "Mr. Thomas",
    email: "thomas@school.edu",
    role: "teacher",
    grade: "-",
    teamName: "Faculty Footballers",
    status: "active",
    lastActive: "Today, 1:20 PM",
  },
  {
    id: 6,
    name: "Ms. Johnson",
    email: "johnson@school.edu",
    role: "teacher",
    grade: "-",
    teamName: "Teacher's Pets",
    status: "active",
    lastActive: "Today, 11:05 AM",
  },
  {
    id: 7,
    name: "Principal Davis",
    email: "principal@school.edu",
    role: "admin",
    grade: "-",
    teamName: "Admin All-Stars",
    status: "active",
    lastActive: "Yesterday, 9:30 AM",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users Management</h1>
        <Button className="bg-green-800 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Users</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search users..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="student">Students</SelectItem>
                <SelectItem value="teacher">Teachers</SelectItem>
                <SelectItem value="admin">Admins</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-green-100 text-green-800">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "teacher"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      } hover:bg-opacity-90`}
                    >
                      <div className="flex items-center gap-1">
                        {user.role === "admin" ? (
                          <Shield className="h-3 w-3" />
                        ) : user.role === "teacher" ? (
                          <User className="h-3 w-3" />
                        ) : null}
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>{user.grade}</TableCell>
                  <TableCell>{user.teamName}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "active" ? "default" : "secondary"}
                      className={
                        user.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href={`/admin/users/${user.id}`} className="flex w-full items-center">
                            View Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/admin/users/${user.id}/edit`} className="flex w-full items-center">
                            <Edit className="mr-2 h-4 w-4" /> Edit User
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Team</DropdownMenuItem>
                        {user.role !== "admin" && (
                          <DropdownMenuItem>
                            {user.role === "teacher" ? "Remove Admin Access" : "Grant Admin Access"}
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Suspend User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
