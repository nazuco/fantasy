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

// Helper function to format class name for display
const formatClassName = (className: string) => {
  const year = className.charAt(0)
  const section = className.charAt(1) === "t" ? "ITI" : "IPI"
  const group = className.charAt(2)
  return `${year}${section}-${group.toUpperCase()}`
}

// Mock data - would come from your database
const players = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "GK",
    class: "1ta",
    grade: "9th",
    points: 43,
    price: 5.0,
    status: "active",
  },
  {
    id: 2,
    name: "Marcus Lee",
    position: "DEF",
    class: "1tb",
    grade: "10th",
    points: 37,
    price: 4.5,
    status: "active",
  },
  {
    id: 3,
    name: "Jacob Williams",
    position: "DEF",
    class: "2ta",
    grade: "11th",
    points: 28,
    price: 4.0,
    status: "injured",
  },
  {
    id: 4,
    name: "Ethan Brown",
    position: "DEF",
    class: "2tb",
    grade: "9th",
    points: 52,
    price: 5.5,
    status: "active",
  },
  {
    id: 5,
    name: "Noah Davis",
    position: "DEF",
    class: "3ta",
    grade: "12th",
    points: 31,
    price: 4.2,
    status: "active",
  },
  {
    id: 6,
    name: "Daniel Wilson",
    position: "MID",
    class: "3tb",
    grade: "10th",
    points: 63,
    price: 6.8,
    status: "active",
  },
  {
    id: 7,
    name: "Anthony Martinez",
    position: "MID",
    class: "1pa",
    grade: "11th",
    points: 42,
    price: 5.7,
    status: "suspended",
  },
  {
    id: 8,
    name: "Liam Garcia",
    position: "MID",
    class: "1pb",
    grade: "9th",
    points: 71,
    price: 7.2,
    status: "active",
  },
]

export default function PlayersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Players Management</h1>
        <Button className="bg-green-800 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Add Player
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Players</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search players..." className="pl-8 w-[250px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="GK">Goalkeeper</SelectItem>
                <SelectItem value="DEF">Defender</SelectItem>
                <SelectItem value="MID">Midfielder</SelectItem>
                <SelectItem value="FWD">Forward</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        player.position === "GK"
                          ? "bg-yellow-100 text-yellow-800"
                          : player.position === "DEF"
                            ? "bg-blue-100 text-blue-800"
                            : player.position === "MID"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                      } hover:bg-opacity-90`}
                    >
                      {player.position}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatClassName(player.class)}</TableCell>
                  <TableCell>{player.points}</TableCell>
                  <TableCell>${player.price.toFixed(1)}M</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        player.status === "active"
                          ? "default"
                          : player.status === "injured"
                            ? "destructive"
                            : "secondary"
                      }
                      className={
                        player.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : player.status === "injured"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                      }
                    >
                      {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
                    </Badge>
                  </TableCell>
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
                          <Link href={`/admin/players/${player.id}`} className="flex w-full items-center">
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/admin/players/${player.id}/edit`} className="flex w-full items-center">
                            <Edit className="mr-2 h-4 w-4" /> Edit Player
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Update Stats</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete Player</DropdownMenuItem>
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
