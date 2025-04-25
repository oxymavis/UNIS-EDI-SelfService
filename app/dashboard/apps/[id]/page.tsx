"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Trash2, TestTube, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AppDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)

  // Sample app data - in a real app, you would fetch this based on the ID
  const app = {
    id: params.id,
    name: params.id === "app-1" ? "Order Processor" : "Inventory Manager",
    code: params.id === "app-1" ? "ORD-PROC" : "INV-MGR",
    description:
      params.id === "app-1"
        ? "Processes order EDI messages (940)"
        : "Manages inventory updates and shipment confirmations",
    protocol: "AS2",
    interfaces: params.id === "app-1" ? ["940", "997"] : ["945", "997"],
    status: "active",
    createdAt: params.id === "app-1" ? "2023-10-15" : "2023-11-02",
    lastModified: params.id === "app-1" ? "2023-12-01" : "2023-12-05",
    certificates: [
      {
        id: "cert-1",
        name: "Partner AS2 Certificate",
        expiresAt: "2024-01-15",
      },
    ],
    testResults: [
      {
        id: "test-1",
        interface: params.id === "app-1" ? "940" : "945",
        status: "success",
        timestamp: "2023-12-10T14:30:00Z",
      },
      {
        id: "test-2",
        interface: "997",
        status: "success",
        timestamp: "2023-12-09T10:15:00Z",
      },
    ],
  }

  const handleDelete = () => {
    setIsDeleting(true)

    // Simulate deletion
    setTimeout(() => {
      toast({
        title: "Application deleted",
        description: `${app.name} has been deleted successfully.`,
      })

      // Redirect to apps page
      router.push("/dashboard/apps")
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/dashboard/apps">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <h1 className="text-3xl font-normal text-gray-900">{app.name}</h1>
          </div>
          <div className="flex items-center ml-10">
            <p className="text-gray-600 mr-3">{app.code}</p>
            <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">
              {app.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Link href={`/dashboard/apps/${app.id}/edit`} className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full md:w-auto rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Application
            </Button>
          </Link>
          <Link href={`/dashboard/testing?app=${app.id}`} className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full md:w-auto rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <TestTube className="mr-2 h-4 w-4" />
              Run Tests
            </Button>
          </Link>
          <Link href="/dashboard/deployment" className="flex-1 md:flex-none">
            <Button className="w-full md:w-auto rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              <Upload className="mr-2 h-4 w-4" />
              Request Deployment
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-full md:w-auto rounded-full border border-google-red/30 text-google-red hover:bg-google-red/5"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            {isDeleting ? "Deleting..." : "Delete Application"}
          </Button>
        </div>

        <Tabs defaultValue="details">
          <TabsList className="mb-6 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="details"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Certificates
            </TabsTrigger>
            <TabsTrigger
              value="tests"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Test Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Application Details</h2>
                <p className="text-sm text-gray-600">Basic information about this application</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-4">General Information</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Application Name:</div>
                        <div>{app.name}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Application Code:</div>
                        <div>{app.code}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Status:</div>
                        <div>{app.status === "active" ? "Active" : "Inactive"}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Created:</div>
                        <div>{app.createdAt}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Last Modified:</div>
                        <div>{app.lastModified}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-4">Technical Configuration</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Protocol:</div>
                        <div>{app.protocol}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-500">Interfaces:</div>
                        <div className="flex gap-1">
                          {app.interfaces.map((intf) => (
                            <Badge key={intf} variant="outline" className="rounded-full">
                              {intf}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Associated Certificates</h2>
                <p className="text-sm text-gray-600">Certificates used by this application</p>
              </div>

              <div className="p-6">
                {app.certificates.length > 0 ? (
                  <div className="space-y-4">
                    {app.certificates.map((cert) => (
                      <div key={cert.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-medium text-gray-900">{cert.name}</h3>
                          <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">
                            Active
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Expires on: {cert.expiresAt}</p>
                        <Link href="/dashboard/certificates">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                          >
                            View Certificate
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No certificates associated with this application.</p>
                    <Link href="/dashboard/certificates/upload">
                      <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                        Upload Certificate
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              <div className="p-6 border-t">
                <Link href="/dashboard/certificates">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Manage All Certificates
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tests">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Test Results</h2>
                <p className="text-sm text-gray-600">Recent test results for this application</p>
              </div>

              <div className="p-6">
                {app.testResults.length > 0 ? (
                  <div className="space-y-4">
                    {app.testResults.map((test) => (
                      <div key={test.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-medium text-gray-900">Interface: {test.interface}</h3>
                          <Badge
                            className={`rounded-full border-0 px-3 ${
                              test.status === "success"
                                ? "bg-google-green/10 text-google-green"
                                : "bg-google-red/10 text-google-red"
                            }`}
                          >
                            {test.status === "success" ? "Success" : "Failed"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Run on: {new Date(test.timestamp).toLocaleString()}
                        </p>
                        <Link href="/dashboard/testing/results">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No test results available for this application.</p>
                    <Link href={`/dashboard/testing?app=${app.id}`}>
                      <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                        Run Tests
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              <div className="p-6 border-t">
                <Link href="/dashboard/testing">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Go to Testing Center
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
