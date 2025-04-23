import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingMatches() {
  // Mock data - would come from your database
  const matches = [
    { id: 1, home: "West High", away: "East High", time: "Tomorrow, 3:00 PM" },
    { id: 2, home: "North Academy", away: "South High", time: "Tomorrow, 4:30 PM" },
    { id: 3, home: "Central Prep", away: "Valley School", time: "Saturday, 1:00 PM" },
    { id: 4, home: "Riverside HS", away: "Mountain View", time: "Saturday, 3:30 PM" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="border-b last:border-b-0 pb-3 last:pb-0">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{match.home}</span>
                <span className="text-sm text-gray-500">vs</span>
                <span className="font-medium">{match.away}</span>
              </div>
              <div className="text-sm text-gray-500">{match.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
