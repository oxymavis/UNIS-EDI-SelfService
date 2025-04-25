import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AppWindow, Plus, Settings } from "lucide-react"

export default function AppsPage() {
  const apps = [
    {
      id: "app-1",
      name: "Inventory Management",
      description: "EDI integration for inventory management system",
      status: "Active",
      lastUpdated: "2023-10-15",
    },
    {
      id: "app-2",
      name: "Order Processing",
      description: "Order processing and fulfillment integration",
      status: "Active",
      lastUpdated: "2023-10-10",
    },
    {
      id: "app-3",
      name: "Shipping Integration",
      description: "Integration with shipping carriers and logistics",
      status: "Inactive",
      lastUpdated: "2023-09-28",
    },
    {
      id: "app-4",
      name: "Invoice Processing",
      description: "Automated invoice processing and payment system",
      status: "Pending",
      lastUpdated: "2023-10-18",
    },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium text-gray-900">My Applications</h1>
          <Button asChild className="rounded-full">
            <Link href="/dashboard/apps/create">
              <Plus className="mr-2 h-4 w-4" />
              Create New App
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge
                    className={`${
                      app.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : app.status === "Inactive"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-yellow-100 text-yellow-800"
                    } rounded-full px-3 py-1 text-xs font-medium`}
                  >
                    {app.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="rounded-full" asChild>
                    <Link href={`/dashboard/apps/${app.id}/edit`}>
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <AppWindow className="h-5 w-5 text-google-blue" />
                  <CardTitle>{app.name}</CardTitle>
                </div>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-sm text-gray-500">Last updated: {app.lastUpdated}</div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href={`/dashboard/apps/${app.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
