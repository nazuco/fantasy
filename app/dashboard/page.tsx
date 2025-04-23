import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserFantasyTeam } from "@/components/user-fantasy-team"
import { WeeklyPerformance } from "@/components/weekly-performance"
import { UpcomingMatches } from "@/components/upcoming-matches"

export default function Dashboard() {
  // This would normally check for authentication
  const isNewUser = true

  if (isNewUser) {
    return <NewUserDashboard />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UserFantasyTeam />
          <div className="mt-6">
            <WeeklyPerformance />
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Team Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Points:</span>
                  <span className="font-medium">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">League Rank:</span>
                  <span className="font-medium">6th</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Weekly Points:</span>
                  <span className="font-medium">32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Transfers Available:</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Budget Remaining:</span>
                  <span className="font-medium">$3.5M</span>
                </div>
              </div>

              <div className="mt-4">
                <Button asChild className="w-full">
                  <Link href="/transfers">Make Transfers</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <UpcomingMatches />
          </div>
        </div>
      </div>
    </div>
  )
}

function NewUserDashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Fantasy Soccer!</h1>
        <p className="text-gray-600 mb-8">To get started, you'll need to create your fantasy team.</p>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Team</CardTitle>
            <CardDescription>Start your journey by setting up your fantasy soccer team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">With your fantasy team, you'll:</p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Select players from our school soccer league</li>
              <li>Earn points based on real-game performance</li>
              <li>Compete against other students in your league</li>
              <li>Make weekly transfers to optimize your squad</li>
            </ul>
            <Button asChild className="w-full bg-green-800 hover:bg-green-700 mt-4">
              <Link href="/create-team">Create Your Team Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
