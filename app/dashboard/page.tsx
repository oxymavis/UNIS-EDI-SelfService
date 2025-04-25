import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { AppWindow, BadgeIcon as Certificate, FileText, TestTube, Upload } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to the UNIS EDI Self-Service Platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-normal text-gray-900">Total Applications</h2>
              <div className="rounded-full bg-google-blue/10 p-2">
                <AppWindow className="w-5 h-5 text-google-blue" />
              </div>
            </div>
            <div className="mb-4">
              <div className="text-3xl font-normal">2</div>
              <p className="text-sm text-gray-600">2 active, 0 pending</p>
            </div>
            <Link href="/dashboard/apps">
              <Button
                variant="outline"
                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
              >
                View Apps
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-normal text-gray-900">Certificates</h2>
              <div className="rounded-full bg-google-green/10 p-2">
                <Certificate className="w-5 h-5 text-google-green" />
              </div>
            </div>
            <div className="mb-4">
              <div className="text-3xl font-normal">1</div>
              <p className="text-sm text-gray-600">1 active, 0 expiring soon</p>
            </div>
            <Link href="/dashboard/certificates">
              <Button
                variant="outline"
                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
              >
                Manage Certificates
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-normal text-gray-900">Test Results</h2>
              <div className="rounded-full bg-google-yellow/10 p-2">
                <TestTube className="w-5 h-5 text-google-yellow" />
              </div>
            </div>
            <div className="mb-4">
              <div className="text-3xl font-normal">8</div>
              <p className="text-sm text-gray-600">6 passed, 2 failed</p>
            </div>
            <Link href="/dashboard/testing/results">
              <Button
                variant="outline"
                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
              >
                View Results
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Quick Actions</h2>
              <p className="text-sm text-gray-600">Common tasks and actions</p>
            </div>
            <div className="p-6 space-y-3">
              <Link href="/dashboard/apps/create">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <AppWindow className="mr-3 h-5 w-5 text-google-blue" />
                  Create New App
                </Button>
              </Link>
              <Link href="/dashboard/testing">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <TestTube className="mr-3 h-5 w-5 text-google-yellow" />
                  Run Test Connection
                </Button>
              </Link>
              <Link href="/dashboard/certificates">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <Certificate className="mr-3 h-5 w-5 text-google-green" />
                  Manage Certificates
                </Button>
              </Link>
              <Link href="/dashboard/deployment">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <Upload className="mr-3 h-5 w-5 text-google-red" />
                  Request Production Deployment
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Documentation</h2>
              <p className="text-sm text-gray-600">UNIS EDI specifications and guides</p>
            </div>
            <div className="p-6 space-y-3">
              <Link href="/dashboard/docs/edi">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <FileText className="mr-3 h-5 w-5 text-google-blue" />
                  EDI Message Formats (940/945/997)
                </Button>
              </Link>
              <Link href="/dashboard/docs/as2">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <FileText className="mr-3 h-5 w-5 text-google-green" />
                  AS2 Configuration Guide
                </Button>
              </Link>
              <Link href="/dashboard/docs/test-cases">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <FileText className="mr-3 h-5 w-5 text-google-yellow" />
                  Test Case Definitions
                </Button>
              </Link>
              <Link href="/dashboard/docs/integration">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100 w-full justify-start">
                  <FileText className="mr-3 h-5 w-5 text-google-red" />
                  System Integration Manual
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Recent Activity</h2>
              <p className="text-sm text-gray-600">Your recent platform activity</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="rounded-full bg-google-blue/10 p-2 flex-shrink-0">
                    <TestTube className="h-5 w-5 text-google-blue" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Test Connection Completed</h4>
                    <p className="text-sm text-gray-600">
                      Test connection for App "Inventory Manager" completed successfully
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="rounded-full bg-google-green/10 p-2 flex-shrink-0">
                    <Certificate className="h-5 w-5 text-google-green" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Certificate Uploaded</h4>
                    <p className="text-sm text-gray-600">New AS2 certificate uploaded for App "Order Processor"</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="rounded-full bg-google-red/10 p-2 flex-shrink-0">
                    <AppWindow className="h-5 w-5 text-google-red" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">App Created</h4>
                    <p className="text-sm text-gray-600">New application "Order Processor" created</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
