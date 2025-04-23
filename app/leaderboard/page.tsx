import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock league data - would come from your database
const mockLeagues = [
  {
    id: 1,
    name: "1ITI-A League",
    teams: [
      { id: 101, rank: 1, name: "Dream Team FC", manager: "Michael Brown", points: 347, avatar: "MB" },
      { id: 102, rank: 2, name: "Golden Boots United", manager: "Sarah Johnson", points: 331, avatar: "SJ" },
      { id: 103, rank: 3, name: "Freshman Phenoms", manager: "David Garcia", points: 322, avatar: "DG" },
      { id: 104, rank: 4, name: "Mighty Midfielders", manager: "Emma Wilson", points: 318, avatar: "EW" },
      { id: 105, rank: 5, name: "Goal Getters", manager: "James Martinez", points: 305, avatar: "JM" },
      { id: 106, rank: 6, name: "The Strikers", manager: "Olivia Smith", points: 298, avatar: "OS" },
      { id: 107, rank: 7, name: "Passing Pros", manager: "Daniel Thompson", points: 276, avatar: "DT" },
      { id: 108, rank: 8, name: "Soccer Stars", manager: "Sophia Anderson", points: 267, avatar: "SA" },
    ],
  },
  {
    id: 2,
    name: "1IPI-B League",
    teams: [
      { id: 201, rank: 1, name: "Sophomore Superstars", manager: "Noah Parker", points: 371, avatar: "NP" },
      { id: 202, rank: 2, name: "Free Kick Kings", manager: "Ava Roberts", points: 359, avatar: "AR" },
      { id: 203, rank: 3, name: "Ball Wizards", manager: "Ethan Chen", points: 342, avatar: "EC" },
      { id: 204, rank: 4, name: "Top Tacklers", manager: "Isabella Kim", points: 336, avatar: "IK" },
      { id: 205, rank: 5, name: "Goal Rush", manager: "Mason Nguyen", points: 329, avatar: "MN" },
      { id: 206, rank: 6, name: "Midfield Masters", manager: "Sofia Lopez", points: 312, avatar: "SL" },
      { id: 207, rank: 7, name: "Defenders United", manager: "Liam Robinson", points: 298, avatar: "LR" },
      { id: 208, rank: 8, name: "Clean Sheet Crew", manager: "Zoe Williams", points: 284, avatar: "ZW" },
    ],
  },
  {
    id: 3,
    name: "2ITI-A League",
    teams: [
      { id: 301, rank: 1, name: "Senior Strikers", manager: "Jackson Davis", points: 402, avatar: "JD" },
      { id: 302, rank: 2, name: "Upper Classmen FC", manager: "Mia Thompson", points: 387, avatar: "MT" },
      { id: 303, rank: 3, name: "Goal Machine", manager: "Aiden Rodriguez", points: 371, avatar: "AR" },
      { id: 304, rank: 4, name: "Victory XI", manager: "Chloe Martin", points: 356, avatar: "CM" },
      { id: 305, rank: 5, name: "Elite Eleven", manager: "Lucas Garcia", points: 344, avatar: "LG" },
      { id: 306, rank: 6, name: "Champions United", manager: "Emily Wilson", points: 331, avatar: "EW" },
      { id: 307, rank: 7, name: "Star Shooters", manager: "Caleb Jones", points: 319, avatar: "CJ" },
      { id: 308, rank: 8, name: "Premier Passers", manager: "Hannah Smith", points: 302, avatar: "HS" },
    ],
  },
  {
    id: 4,
    name: "3IPI-C League",
    teams: [
      { id: 401, rank: 1, name: "Faculty Footballers", manager: "Mr. Thomas", points: 378, avatar: "MT" },
      { id: 402, rank: 2, name: "Teacher's Pets", manager: "Ms. Johnson", points: 362, avatar: "MJ" },
      { id: 403, rank: 3, name: "Staff United", manager: "Mr. Rodriguez", points: 345, avatar: "MR" },
      { id: 404, rank: 4, name: "Math Magicians", manager: "Ms. Zhang", points: 331, avatar: "MZ" },
      { id: 405, rank: 5, name: "Science Strikers", manager: "Mr. Patel", points: 324, avatar: "MP" },
      { id: 406, rank: 6, name: "History Heroes", manager: "Ms. Garcia", points: 309, avatar: "MG" },
      { id: 407, rank: 7, name: "English Excellence", manager: "Mr. Williams", points: 293, avatar: "MW" },
      { id: 408, rank: 8, name: "Admin All-Stars", manager: "Principal Davis", points: 278, avatar: "PD" },
    ],
  },
]

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Class Leagues</h1>

      <Tabs defaultValue={mockLeagues[0].id.toString()} className="space-y-4">
        <TabsList className="flex flex-wrap">
          {mockLeagues.map((league) => (
            <TabsTrigger key={league.id} value={league.id.toString()}>
              {league.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {mockLeagues.map((league) => (
          <TabsContent key={league.id} value={league.id.toString()}>
            <Card>
              <CardHeader>
                <CardTitle>{league.name} Standings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-sm">
                        <th className="text-left font-medium py-3 pl-4 pr-2">Rank</th>
                        <th className="text-left font-medium py-3 px-2">Team</th>
                        <th className="text-left font-medium py-3 px-2">Manager</th>
                        <th className="text-right font-medium py-3 pr-4 pl-2">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {league.teams.map((team) => (
                        <tr
                          key={team.id}
                          className={`border-b last:border-0 hover:bg-gray-50 ${
                            team.rank <= 3 ? "bg-green-50/50" : ""
                          }`}
                        >
                          <td className="py-4 pl-4 pr-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                team.rank === 1
                                  ? "bg-yellow-100 text-yellow-800"
                                  : team.rank === 2
                                    ? "bg-gray-200 text-gray-800"
                                    : team.rank === 3
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {team.rank}
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarFallback className="bg-green-100 text-green-800">
                                  {team.name.charAt(0)}
                                  {team.name.split(" ")[1]?.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <Link href={`/teams/${team.id}`} className="font-medium hover:underline">
                                {team.name}
                              </Link>
                            </div>
                          </td>
                          <td className="py-4 px-2">{team.manager}</td>
                          <td className="py-4 pr-4 pl-2 text-right font-bold">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-100"></div>
                    <span>Top 3 teams qualify for inter-class tournament</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
