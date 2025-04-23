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
import { Edit, MoreHorizontal, Plus, Search, Trophy, Users } from "lucide-react"

// Mock data - would come from your database
const leagues = [
  {
    id: 1,
    name: "9th Grade League",
    teams: 82,
    status: "active",
    startDate: "Sep 5, 2023",
    endDate: "May 15, 2024",
  },
  {
    id: 2,
    name: "10th Grade League",
    teams: 68,
    status: "active",
    startDate: "Sep 5, 2023",
    endDate: "May 15, 2024",
  },
  {
    id: 3,
    name: "11th-12th Grade League",
    teams: 94,
    status: "active",
    startDate: "Sep 5, 2023",
    endDate: "May 15, 2024",
  },
  {
    id: 4,
    name: "Teachers League",
    teams: 43,
    status: "active",
    startDate: "Sep 5, 2023",
    endDate: "May 15, 2024",
  },
  {
    id: 5,
    name: "Spring Tournament",
    teams: 32,
    status: "upcoming",
    startDate: "Mar 1, 2024",
    endDate: "Apr 30, 2024",
  },
  {
    id: 6,
    name: "Fall Cup",
    teams: 16,
    status: "completed",
    startDate: "Oct 10, 2023",
    endDate: "Nov 20, 2023",
  },
]

export default function LeaguesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leagues Management</h1>
        <Button className="bg-green-800 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Create League
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Leagues</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search leagues..." className="pl-8 w-[250px]" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>League Name</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leagues.map((league) => (
                <TableRow key={league.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4 text-green-800" />
                      {league.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-gray-500" />
                      {league.teams}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        league.status === "active" ? "default" : league.status === "upcoming" ? "secondary" : "outline"
                      }
                      className={
                        league.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : league.status === "upcoming"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : ""
                      }
                    >
                      {league.status.charAt(0).toUpperCase() + league.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{league.startDate}</TableCell>
                  <TableCell>{league.endDate}</TableCell>
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
                          <Link href={`/admin/leagues/${league.id}`} className="flex w-full items-center">
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/admin/leagues/${league.id}/edit`} className="flex w-full items-center">
                            <Edit className="mr-2 h-4 w-4" /> Edit League
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Manage Teams</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete League</DropdownMenuItem>
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
