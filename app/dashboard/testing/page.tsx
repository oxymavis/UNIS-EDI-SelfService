"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Clock, FileText, Play, TestTube, XCircle } from "lucide-react"

export default function TestingPage() {
  const { toast } = useToast()
  const [selectedApp, setSelectedApp] = useState("")
  const [selectedInterface, setSelectedInterface] = useState("")
  const [testStatus, setTestStatus] = useState<"idle" | "running" | "success" | "failed">("idle")
  const [testResults, setTestResults] = useState<any[]>([])

  // Sample apps data
  const apps = [
    { id: "app-1", name: "Order Processor", interfaces: ["940", "997"] },
    { id: "app-2", name: "Inventory Manager", interfaces: ["945", "997"] },
  ]

  const handleRunTest = () => {
    if (!selectedApp || !selectedInterface) {
      toast({
        title: "Missing selection",
        description: "Please select an app and interface to test.",
        variant: "destructive",
      })
      return
    }

    setTestStatus("running")
    toast({
      title: "Test started",
      description: "Running test for selected interface...",
    })

    // Simulate test running
    setTimeout(() => {
      const success = Math.random() > 0.3 // 70% chance of success for demo
      setTestStatus(success ? "success" : "failed")

      const newResult = {
        id: `test-${Date.now()}`,
        timestamp: new Date().toISOString(),
        app: apps.find((a) => a.id === selectedApp)?.name,
        interface: selectedInterface,
        status: success ? "success" : "failed",
        message: success
          ? "Test completed successfully. All validation checks passed."
          : "Test failed. Invalid EDI format in segment ST01.",
      }

      setTestResults([newResult, ...testResults])

      toast({
        title: success ? "Test successful" : "Test failed",
        description: newResult.message,
        variant: success ? "default" : "destructive",
      })
    }, 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "bg-google-blue/10 text-google-blue"
      case "success":
        return "bg-google-green/10 text-google-green"
      case "failed":
        return "bg-google-red/10 text-google-red"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900">Testing & Integration</h1>
          <p className="text-gray-600">Test your EDI connections and message flows</p>
        </div>

        <Tabs defaultValue="connection">
          <TabsList className="mb-6 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="connection"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Connection Testing
            </TabsTrigger>
            <TabsTrigger
              value="scenarios"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Test Scenarios
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Test Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="connection">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-normal text-gray-900">Test Connection</h2>
                  <p className="text-sm text-gray-600">Test your AS2 connection and EDI message format</p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="app">Select Application</Label>
                      <Select onValueChange={setSelectedApp} defaultValue={selectedApp}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select application" />
                        </SelectTrigger>
                        <SelectContent>
                          {apps.map((app) => (
                            <SelectItem key={app.id} value={app.id}>
                              {app.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interface">Select Interface</Label>
                      <Select
                        onValueChange={setSelectedInterface}
                        defaultValue={selectedInterface}
                        disabled={!selectedApp}
                      >
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select interface" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedApp &&
                            apps
                              .find((a) => a.id === selectedApp)
                              ?.interfaces.map((intf) => (
                                <SelectItem key={intf} value={intf}>
                                  {intf}
                                </SelectItem>
                              ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="test-data">Test Data (Optional)</Label>
                      <Textarea
                        id="test-data"
                        placeholder="Paste EDI message for testing or leave empty to use sample data"
                        rows={6}
                        className="rounded-lg"
                      />
                      <p className="text-xs text-gray-500">
                        Leave empty to use platform-provided test data for the selected interface
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t">
                  <Button
                    onClick={handleRunTest}
                    disabled={testStatus === "running" || !selectedApp || !selectedInterface}
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                  >
                    {testStatus === "running" ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Running Test...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Run Test
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-normal text-gray-900">Test Results</h2>
                  <p className="text-sm text-gray-600">View the results of your most recent tests</p>
                </div>

                <div className="p-6">
                  {testStatus !== "idle" ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {testStatus === "running" && (
                            <div className="rounded-full bg-google-blue/10 p-2 mr-3">
                              <Clock className="h-5 w-5 text-google-blue animate-spin" />
                            </div>
                          )}
                          {testStatus === "success" && (
                            <div className="rounded-full bg-google-green/10 p-2 mr-3">
                              <CheckCircle className="h-5 w-5 text-google-green" />
                            </div>
                          )}
                          {testStatus === "failed" && (
                            <div className="rounded-full bg-google-red/10 p-2 mr-3">
                              <XCircle className="h-5 w-5 text-google-red" />
                            </div>
                          )}
                          <h3 className="text-lg font-normal text-gray-900">
                            {testStatus === "running" && "Test in progress..."}
                            {testStatus === "success" && "Test successful"}
                            {testStatus === "failed" && "Test failed"}
                          </h3>
                        </div>
                        <Badge className={`rounded-full border-0 px-3 ${getStatusColor(testStatus)}`}>
                          {testStatus.toUpperCase()}
                        </Badge>
                      </div>

                      {testStatus !== "running" && testResults.length > 0 && (
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                            <div>
                              <span className="text-gray-500">Application:</span> {testResults[0].app}
                            </div>
                            <div>
                              <span className="text-gray-500">Interface:</span> {testResults[0].interface}
                            </div>
                            <div>
                              <span className="text-gray-500">Timestamp:</span>{" "}
                              {new Date(testResults[0].timestamp).toLocaleString()}
                            </div>
                            <div>
                              <span className="text-gray-500">Status:</span>{" "}
                              <span
                                className={
                                  testResults[0].status === "success" ? "text-google-green" : "text-google-red"
                                }
                              >
                                {testResults[0].status === "success" ? "Success" : "Failed"}
                              </span>
                            </div>
                          </div>
                          <div className="mb-4">
                            <span className="text-gray-500 text-sm">Message:</span>
                            <p className="text-sm mt-1">{testResults[0].message}</p>
                          </div>
                          <Button
                            variant="outline"
                            className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Log
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="rounded-full bg-gray-100 p-4 inline-flex mb-4">
                        <TestTube className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-normal text-gray-900 mb-2">No Tests Run</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Select an application and interface, then run a test to see results
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t">
                  <Link href="/dashboard/testing/results" className="w-full block">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      View All Test Results
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Testing Guidelines</h2>
                <p className="text-sm text-gray-600">Best practices for testing your EDI connections</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2">Before You Begin</h3>
                    <ul className="space-y-2 text-gray-600 pl-5">
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        Ensure your AS2 certificate is uploaded and valid
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        Configure your AS2 software with the UNIS certificate
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        Verify your firewall allows connections on the required ports
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2">Testing Process</h3>
                    <ol className="space-y-2 text-gray-600 pl-5 list-decimal">
                      <li>Select the application and interface to test</li>
                      <li>Run the connection test to verify connectivity</li>
                      <li>Complete all required test scenarios for each interface</li>
                      <li>Verify test results and fix any issues</li>
                      <li>Once all tests pass, apply for production deployment</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Test Scenarios</h2>
                <p className="text-sm text-gray-600">
                  Complete these required test scenarios before applying for production deployment
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-4">940 Warehouse Shipping Order</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start">
                          <Badge
                            variant="outline"
                            className="rounded-full border-google-blue text-google-blue mr-4 mt-1 flex-shrink-0"
                          >
                            Required
                          </Badge>
                          <div>
                            <h4 className="text-base font-medium text-gray-900 mb-2">Standard Order Processing</h4>
                            <p className="text-sm text-gray-600 mb-4">
                              Test the processing of a standard warehouse shipping order with multiple line items.
                            </p>
                            <div className="flex gap-3">
                              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                                Run Test
                              </Button>
                              <Button
                                variant="outline"
                                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start">
                          <Badge
                            variant="outline"
                            className="rounded-full border-google-blue text-google-blue mr-4 mt-1 flex-shrink-0"
                          >
                            Required
                          </Badge>
                          <div>
                            <h4 className="text-base font-medium text-gray-900 mb-2">
                              Order with Special Instructions
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                              Test the processing of an order with special handling instructions and shipping
                              requirements.
                            </p>
                            <div className="flex gap-3">
                              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                                Run Test
                              </Button>
                              <Button
                                variant="outline"
                                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-4">945 Warehouse Shipping Advice</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start">
                          <Badge
                            variant="outline"
                            className="rounded-full border-google-blue text-google-blue mr-4 mt-1 flex-shrink-0"
                          >
                            Required
                          </Badge>
                          <div>
                            <h4 className="text-base font-medium text-gray-900 mb-2">Complete Shipment</h4>
                            <p className="text-sm text-gray-600 mb-4">
                              Test the processing of a shipping advice for a completely fulfilled order.
                            </p>
                            <div className="flex gap-3">
                              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                                Run Test
                              </Button>
                              <Button
                                variant="outline"
                                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start">
                          <Badge
                            variant="outline"
                            className="rounded-full border-google-blue text-google-blue mr-4 mt-1 flex-shrink-0"
                          >
                            Required
                          </Badge>
                          <div>
                            <h4 className="text-base font-medium text-gray-900 mb-2">Partial Shipment</h4>
                            <p className="text-sm text-gray-600 mb-4">
                              Test the processing of a shipping advice for a partially fulfilled order.
                            </p>
                            <div className="flex gap-3">
                              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                                Run Test
                              </Button>
                              <Button
                                variant="outline"
                                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> All required test scenarios must be successfully completed before applying for
                  production deployment.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Test Results History</h2>
                <p className="text-sm text-gray-600">View the history of all your test runs</p>
              </div>

              <div className="p-6">
                {testResults.length > 0 ? (
                  <div className="space-y-4">
                    {testResults.map((result) => (
                      <div
                        key={result.id}
                        className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            {result.status === "success" ? (
                              <div className="rounded-full bg-google-green/10 p-2">
                                <CheckCircle className="h-5 w-5 text-google-green" />
                              </div>
                            ) : (
                              <div className="rounded-full bg-google-red/10 p-2">
                                <XCircle className="h-5 w-5 text-google-red" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-base font-medium text-gray-900">
                                {result.app} - {result.interface}
                              </h4>
                              <Badge
                                className={`rounded-full border-0 px-3 ${
                                  result.status === "success"
                                    ? "bg-google-green/10 text-google-green"
                                    : "bg-google-red/10 text-google-red"
                                }`}
                              >
                                {result.status === "success" ? "Success" : "Failed"}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{result.message}</p>
                            <p className="text-xs text-gray-500">{new Date(result.timestamp).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="rounded-full bg-gray-100 p-4 inline-flex mb-4">
                      <TestTube className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 mb-2">No Test Results</h3>
                    <p className="text-sm text-gray-600 mb-6">Run tests to see results here</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
