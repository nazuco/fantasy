import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data - would come from your database
const activities = [
  {
    id: 1,
    user: { name: "Ms. Johnson", avatar: "MJ" },
    action: "added match results",
    target: "West High vs East High",
    time: "10 minutes ago",
  },
  {
    id: 2,
    user: { name: "Mr. Rodriguez", avatar: "MR" },
    action: "created new player",
    target: "Carlos Mendez",
    time: "1 hour ago",
  },
  {
    id: 3,
    user: { name: "Principal Davis", avatar: "PD" },
    action: "approved team",
    target: "Golden Eagles FC",
    time: "2 hours ago",
  },
  {
    id: 4,
    user: { name: "Ms. Zhang", avatar: "MZ" },
    action: "updated league settings",
    target: "9th Grade League",
    time: "3 hours ago",
  },
  {
    id: 5,
    user: { name: "Mr. Thomas", avatar: "MT" },
    action: "resolved issue",
    target: "Score discrepancy",
    time: "5 hours ago",
  },
]

export function AdminActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-green-100 text-green-800 text-xs">{activity.user.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
