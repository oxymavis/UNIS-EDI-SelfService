import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText } from "lucide-react"

export default function TestCasesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/dashboard/docs">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <h1 className="text-3xl font-normal text-gray-900">Test Case Definitions</h1>
          </div>
          <p className="text-gray-600 ml-10">Detailed descriptions of all test scenarios and expected results</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-8">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-normal text-gray-900">Test Case Definitions</h2>
              <Badge className="rounded-full bg-google-yellow/10 text-google-yellow border-0 px-3">v2.2</Badge>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Comprehensive documentation of all test cases required for EDI integration
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">
                This document provides detailed descriptions of all test scenarios that must be completed before
                applying for production deployment. Each test case includes the test objective, prerequisites, test
                steps, test data, and expected results.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Document Contents</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  940 Warehouse Shipping Order Test Cases
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  945 Warehouse Shipping Advice Test Cases
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  997 Functional Acknowledgment Test Cases
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  AS2 Communication Test Cases
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Error Handling Test Cases
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-6">
              <div>
                <span className="text-gray-500">Updated:</span> November 10, 2023
              </div>
              <div>
                <span className="text-gray-500">Size:</span> 1.8 MB
              </div>
            </div>

            <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              <Download className="mr-2 h-4 w-4" />
              Download Document
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">940 Test Cases</h2>
              <p className="text-sm text-gray-600">Test cases for the 940 Warehouse Shipping Order</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2">TC-940-01: Standard Order Processing</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Test the processing of a standard warehouse shipping order with multiple line items.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Test Case
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    TC-940-02: Order with Special Instructions
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Test the processing of an order with special handling instructions and shipping requirements.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Test Case
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">945 Test Cases</h2>
              <p className="text-sm text-gray-600">Test cases for the 945 Warehouse Shipping Advice</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2">TC-945-01: Complete Shipment</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Test the processing of a shipping advice for a completely fulfilled order.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Test Case
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2">TC-945-02: Partial Shipment</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Test the processing of a shipping advice for a partially fulfilled order.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Test Case
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/dashboard/testing/scenarios">
            <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              Go to Test Scenarios
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  )
}
