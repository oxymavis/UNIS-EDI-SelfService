import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, FileText } from "lucide-react"

export default function TestScenariosPage() {
  // Sample test scenarios data
  const scenarios = [
    {
      id: "scenario-1",
      name: "940 Standard Order Processing",
      description: "Test the processing of a standard warehouse shipping order with multiple line items.",
      interface: "940",
      required: true,
      status: "not_started",
    },
    {
      id: "scenario-2",
      name: "940 Order with Special Instructions",
      description: "Test the processing of an order with special handling instructions and shipping requirements.",
      interface: "940",
      required: true,
      status: "completed",
    },
    {
      id: "scenario-3",
      name: "945 Complete Shipment",
      description: "Test the processing of a shipping advice for a completely fulfilled order.",
      interface: "945",
      required: true,
      status: "not_started",
    },
    {
      id: "scenario-4",
      name: "945 Partial Shipment",
      description: "Test the processing of a shipping advice for a partially fulfilled order.",
      interface: "945",
      required: true,
      status: "in_progress",
    },
    {
      id: "scenario-5",
      name: "997 Functional Acknowledgment",
      description: "Test the processing of functional acknowledgments for received EDI messages.",
      interface: "997",
      required: true,
      status: "completed",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">Completed</Badge>
      case "in_progress":
        return <Badge className="rounded-full bg-google-blue/10 text-google-blue border-0 px-3">In Progress</Badge>
      case "not_started":
        return <Badge className="rounded-full bg-gray-100 text-gray-600 border-0 px-3">Not Started</Badge>
      default:
        return <Badge className="rounded-full bg-gray-100 text-gray-600 border-0 px-3">Unknown</Badge>
    }
  }

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
            <h1 className="text-3xl font-normal text-gray-900">Test Scenarios</h1>
          </div>
          <p className="text-gray-600 ml-10">Complete these test scenarios to verify your EDI integration</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Required Test Scenarios</h2>
            <p className="text-sm text-gray-600">
              These scenarios must be completed successfully before applying for production deployment
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              {/* Group scenarios by interface */}
              {["940", "945", "997"].map((interface_) => (
                <div key={interface_}>
                  <h3 className="text-lg font-normal text-gray-900 mb-4">{interface_} Interface Scenarios</h3>
                  <div className="space-y-4">
                    {scenarios
                      .filter((scenario) => scenario.interface === interface_)
                      .map((scenario) => (
                        <div key={scenario.id} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-base font-medium text-gray-900">{scenario.name}</h4>
                                {getStatusBadge(scenario.status)}
                              </div>
                              <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                              <div className="flex gap-3">
                                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                                  <Play className="mr-2 h-4 w-4" />
                                  Run Test
                                </Button>
                                <Button
                                  variant="outline"
                                  className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                                >
                                  <FileText className="mr-2 h-4 w-4" />
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> All required test scenarios must be completed successfully before applying for
                production deployment.
              </p>
              <Link href="/dashboard/testing/results">
                <Button
                  variant="outline"
                  className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  View Test Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
