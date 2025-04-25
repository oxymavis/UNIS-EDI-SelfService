"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, FileText, Search, XCircle, ArrowLeft } from "lucide-react"

export default function TestResultsPage() {
  const [filter, setFilter] = useState({
    status: "all",
    interface: "all",
  })
  const [searchQuery, setSearchQuery] = useState("")

  // Sample test results data
  const testResults = [
    {
      id: "test-1",
      timestamp: "2023-12-15T14:30:00Z",
      app: "Order Processor",
      interface: "940",
      status: "success",
      message: "Test completed successfully. All validation checks passed.",
    },
    {
      id: "test-2",
      timestamp: "2023-12-14T10:15:00Z",
      app: "Order Processor",
      interface: "997",
      status: "success",
      message: "Test completed successfully. All validation checks passed.",
    },
    {
      id: "test-3",
      timestamp: "2023-12-13T16:45:00Z",
      app: "Inventory Manager",
      interface: "945",
      status: "failed",
      message: "Test failed. Invalid EDI format in segment ST01.",
    },
    {
      id: "test-4",
      timestamp: "2023-12-12T09:20:00Z",
      app: "Inventory Manager",
      interface: "997",
      status: "success",
      message: "Test completed successfully. All validation checks passed.",
    },
    {
      id: "test-5",
      timestamp: "2023-12-11T13:10:00Z",
      app: "Order Processor",
      interface: "940",
      status: "failed",
      message: "Test failed. Connection timeout after 30 seconds.",
    },
    {
      id: "test-6",
      timestamp: "2023-12-10T11:05:00Z",
      app: "Inventory Manager",
      interface: "945",
      status: "success",
      message: "Test completed successfully. All validation checks passed.",
    },
  ]

  // Filter test results
  const filteredResults = testResults.filter((result) => {
    const matchesStatus = filter.status === "all" || result.status === filter.status
    const matchesInterface = filter.interface === "all" || result.interface === filter.interface
    const matchesSearch =
      searchQuery === "" ||
      result.app.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.message.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesStatus && matchesInterface && matchesSearch
  })

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/dashboard/testing">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <h1 className="text-3xl font-normal text-gray-900">Test Results</h1>
          </div>
          <p className="text-gray-600 ml-10">View and analyze your test results</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    placeholder="Search test results..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-full border-gray-300 focus:border-google-blue focus:ring-1 focus:ring-google-blue"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-40">
                  <Select
                    onValueChange={(value) => setFilter((prev) => ({ ...prev, status: value }))}
                    defaultValue={filter.status}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-40">
                  <Select
                    onValueChange={(value) => setFilter((prev) => ({ ...prev, interface: value }))}
                    defaultValue={filter.interface}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Interface" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Interfaces</SelectItem>
                      <SelectItem value="940">940</SelectItem>
                      <SelectItem value="945">945</SelectItem>
                      <SelectItem value="997">997</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
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
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <h4 className="text-base font-medium text-gray-900">
                            {result.app} - {result.interface}
                          </h4>
                          <div className="flex items-center gap-3 mt-2 md:mt-0">
                            <Badge
                              className={`rounded-full border-0 px-3 ${
                                result.status === "success"
                                  ? "bg-google-green/10 text-google-green"
                                  : "bg-google-red/10 text-google-red"
                              }`}
                            >
                              {result.status === "success" ? "Success" : "Failed"}
                            </Badge>
                            <span className="text-xs text-gray-500">{new Date(result.timestamp).toLocaleString()}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{result.message}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No test results found matching your filters.</p>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {filteredResults.length} of {testResults.length} test results
            </p>
            <Link href="/dashboard/testing">
              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">Run New Test</Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
