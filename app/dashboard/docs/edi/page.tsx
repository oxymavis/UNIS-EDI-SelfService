import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText } from "lucide-react"

export default function EdiSpecificationsPage() {
  // Sample EDI specifications data
  const specifications = [
    {
      id: "spec-940",
      title: "940 Warehouse Shipping Order",
      description: "Detailed specification for the 940 Warehouse Shipping Order format",
      version: "2.1",
      updatedAt: "2023-09-15",
      size: "1.2 MB",
      sections: [
        "Header Information",
        "Order Details",
        "Item Information",
        "Shipping Instructions",
        "Special Handling Instructions",
      ],
    },
    {
      id: "spec-945",
      title: "945 Warehouse Shipping Advice",
      description: "Detailed specification for the 945 Warehouse Shipping Advice format",
      version: "2.0",
      updatedAt: "2023-09-15",
      size: "1.1 MB",
      sections: ["Header Information", "Shipment Details", "Item Information", "Packaging Information"],
    },
    {
      id: "spec-997",
      title: "997 Functional Acknowledgment",
      description: "Detailed specification for the 997 Functional Acknowledgment format",
      version: "1.5",
      updatedAt: "2023-08-20",
      size: "0.8 MB",
      sections: ["Header Information", "Acknowledgment Details", "Error Information"],
    },
  ]

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
            <h1 className="text-3xl font-normal text-gray-900">EDI Specifications</h1>
          </div>
          <p className="text-gray-600 ml-10">Detailed specifications for EDI message formats</p>
        </div>

        <div className="space-y-6">
          {specifications.map((spec) => (
            <div key={spec.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-normal text-gray-900">{spec.title}</h2>
                  <Badge className="rounded-full bg-google-blue/10 text-google-blue border-0 px-3">
                    v{spec.version}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">{spec.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Document Sections</h3>
                  <ul className="space-y-1">
                    {spec.sections.map((section, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-google-blue">•</span>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Updated:</span> {spec.updatedAt}
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span> {spec.size}
                  </div>
                </div>

                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Specification
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Implementation Guidelines</h2>
            <p className="text-sm text-gray-600">Best practices for implementing EDI messages</p>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">General Guidelines</h3>
                <ul className="space-y-2 text-gray-600 pl-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Follow the exact segment and element sequence as specified in the documentation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Include all required segments and elements
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Use the correct delimiters as specified in the ISA segment
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Ensure proper formatting of dates, times, and numeric values
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Testing Process</h3>
                <p className="text-gray-600 mb-2">
                  Before moving to production, thoroughly test your EDI implementation using the testing tools provided
                  in the platform. Follow these steps:
                </p>
                <ol className="space-y-2 text-gray-600 pl-5 list-decimal">
                  <li>Review the specification documentation thoroughly</li>
                  <li>Implement the EDI message format in your system</li>
                  <li>Generate test messages using your system</li>
                  <li>Use the platform's validation tools to verify message format</li>
                  <li>Complete all required test scenarios</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <Link href="/dashboard/docs">
              <Button variant="outline" className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
                <FileText className="mr-2 h-4 w-4" />
                View All Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
