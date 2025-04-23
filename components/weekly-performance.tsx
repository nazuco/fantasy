import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WeeklyPerformance() {
  // Mock data - would come from your database
  const weeklyPoints = [
    { week: 1, points: 42 },
    { week: 2, points: 31 },
    { week: 3, points: 38 },
    { week: 4, points: 45 },
    { week: 5, points: 29 },
    { week: 6, points: 36 },
  ]

  const currentWeek = 6
  const totalPoints = weeklyPoints.reduce((sum, week) => sum + week.points, 0)
  const averagePoints = Math.round(totalPoints / weeklyPoints.length)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm text-gray-500">Current Week</div>
            <div className="text-2xl font-bold">Week {currentWeek}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Weekly Average</div>
            <div className="text-2xl font-bold">{averagePoints} pts</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Points</div>
            <div className="text-2xl font-bold">{totalPoints} pts</div>
          </div>
        </div>

        {/* Simple bar chart visualization */}
        <div className="mt-6 space-y-2">
          {weeklyPoints.map((week) => (
            <div key={week.week} className="flex items-center">
              <div className="w-12 text-sm text-gray-500">Week {week.week}</div>
              <div className="flex-1">
                <div
                  className="h-6 bg-green-600 rounded-md text-white text-xs flex items-center pl-2"
                  style={{ width: `${Math.min(100, (week.points / 100) * 100)}%` }}
                >
                  {week.points} pts
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-500">
          {currentWeek === weeklyPoints.length
            ? "Current gameweek in progress"
            : `Next update: Week ${weeklyPoints.length + 1}`}
        </div>
      </CardContent>
    </Card>
  )
}
