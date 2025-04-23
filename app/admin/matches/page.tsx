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
import { Edit, MoreHorizontal, Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - would come from your database
const matches = [
  {
    id: 1,
    homeTeam: "West High",
    awayTeam: "East High",
    date: "Feb 15, 2024",
    time: "3:30 PM",
    location: "West Field",
    status: "completed",
    score: "2-1",
  },
  {
    id: 2,
    homeTeam: "North Academy",
    awayTeam: "South High",
    date: "Feb 17, 2024",
    time: "4:00 PM",
    location: "North Stadium",
    status: "completed",
    score: "0-0",
  },
  {
    id: 3,
    homeTeam: "East High",
    awayTeam: "Central Prep",
    date: "Feb 22, 2024",
    time: "3:30 PM",
    location: "East Field",
    status: "upcoming",
    score: "-",
  },
  {
    id: 4,
    homeTeam: "South High",
    awayTeam: "West High",
    date: "Feb 24, 2024",
    time: "2:00 PM",
    location: "South Stadium",
    status: "upcoming",
    score: "-",
  },
  {
    id: 5,
    homeTeam: "Valley School",
    awayTeam: "Mountain View",
    date: "Feb 29, 2024",
    time: "3:45 PM",
    location: "Valley Field",
    status: "upcoming",
    score: "-",
  },
  {
    id: 6,
    homeTeam: "Central Prep",
    awayTeam: "North Academy",
    date: "Mar 2, 2024",
    time: "1:00 PM",
    location: "Central Stadium",
    status: "upcoming",
    score: "-",
  },
]

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Matches Management</h1>
        <Button className="bg-green-800 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Schedule Match
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Matches</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search matches..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Matches</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Teams</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matches.map((match) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">
                    {match.homeTeam} vs {match.awayTeam}
                  </TableCell>
                  <TableCell>{match.date}</TableCell>
                  <TableCell>{match.time}</TableCell>
                  <TableCell>{match.location}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        match.status === "completed"
                          ? "default"
                          : match.status === "upcoming"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        match.status === "completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : match.status === "upcoming"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{match.score}</TableCell>
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
                          <Link href={`/admin/matches/${match.id}`} className="flex w-full items-center">
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        {match.status === "upcoming" ? (
                          <>
                            <DropdownMenuItem>
                              <Link href={`/admin/matches/${match.id}/edit`} className="flex w-full items-center">
                                <Edit className="mr-2 h-4 w-4" /> Edit Match
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Record Results</DropdownMenuItem>
                          </>
                        ) : (
                          <DropdownMenuItem>Update Results</DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Cancel Match</DropdownMenuItem>
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
