import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function DocsPage() {
  // Sample documentation data
  const documents = [
    {
      id: "doc-1",
      title: "940 EDI Message Format",
      description: "Detailed specification for the 940 Warehouse Shipping Order",
      category: "EDI Specifications",
      format: "PDF",
      version: "2.1",
      updatedAt: "2023-09-15",
      size: "1.2 MB",
      color: "blue",
    },
    {
      id: "doc-2",
      title: "945 EDI Message Format",
      description: "Detailed specification for the 945 Warehouse Shipping Advice",
      category: "EDI Specifications",
      format: "PDF",
      version: "2.0",
      updatedAt: "2023-09-15",
      size: "1.1 MB",
      color: "blue",
    },
    {
      id: "doc-3",
      title: "997 EDI Message Format",
      description: "Detailed specification for the 997 Functional Acknowledgment",
      category: "EDI Specifications",
      format: "PDF",
      version: "1.5",
      updatedAt: "2023-08-20",
      size: "0.8 MB",
      color: "blue",
    },
    {
      id: "doc-4",
      title: "AS2 Configuration Guide",
      description: "Step-by-step guide for configuring AS2 connections with UNIS",
      category: "Configuration Guides",
      format: "PDF",
      version: "3.0",
      updatedAt: "2023-10-05",
      size: "2.5 MB",
      color: "green",
    },
    {
      id: "doc-5",
      title: "Test Case Definitions",
      description: "Detailed descriptions of all test scenarios and expected results",
      category: "Testing",
      format: "PDF",
      version: "2.2",
      updatedAt: "2023-11-10",
      size: "1.8 MB",
      color: "yellow",
    },
    {
      id: "doc-6",
      title: "System Integration Manual",
      description: "Comprehensive guide for integrating with UNIS EDI systems",
      category: "Integration",
      format: "PDF",
      version: "4.1",
      updatedAt: "2023-12-01",
      size: "3.2 MB",
      color: "red",
    },
  ]

  // Group documents by category
  const documentsByCategory: Record<string, typeof documents> = {}
  documents.forEach((doc) => {
    if (!documentsByCategory[doc.category]) {
      documentsByCategory[doc.category] = []
    }
    documentsByCategory[doc.category].push(doc)
  })

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-google-blue/10 text-google-blue"
      case "green":
        return "bg-google-green/10 text-google-green"
      case "yellow":
        return "bg-google-yellow/10 text-google-yellow"
      case "red":
        return "bg-google-red/10 text-google-red"
      default:
        return "bg-google-blue/10 text-google-blue"
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900">Documentation</h1>
          <p className="text-gray-600">UNIS EDI specifications and guides</p>
        </div>

        <div className="mb-8 relative">
          <div className="google-search flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Search documentation..."
              className="pl-12 rounded-full border-gray-300 focus:border-google-blue focus:ring-1 focus:ring-google-blue"
            />
          </div>
        </div>

        {Object.entries(documentsByCategory).map(([category, docs]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-normal text-gray-900 mb-4">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => {
                let href = "/dashboard"
                if (doc.category === "EDI Specifications") {
                  href = "/dashboard/docs/edi"
                } else if (doc.category === "Configuration Guides") {
                  href = "/dashboard/docs/as2"
                } else if (doc.category === "Testing") {
                  href = "/dashboard/docs/test-cases"
                } else if (doc.category === "Integration") {
                  href = "/dashboard/docs/integration"
                }

                return (
                  <Link key={doc.id} href={href} className="block">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-normal text-gray-900">{doc.title}</h3>
                          <Badge className={`rounded-full border-0 px-3 ${getColorClass(doc.color)}`}>
                            {doc.format}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{doc.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div>
                            <span className="text-gray-500">Version:</span> {doc.version}
                          </div>
                          <div>
                            <span className="text-gray-500">Updated:</span> {doc.updatedAt}
                          </div>
                          <div>
                            <span className="text-gray-500">Size:</span> {doc.size}
                          </div>
                        </div>
                        <Button className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Documentation Updates</h2>
            <p className="text-sm text-gray-600">Stay informed about the latest documentation changes</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="rounded-full bg-google-blue/10 p-2 flex-shrink-0">
                  <FileText className="h-5 w-5 text-google-blue" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">AS2 Configuration Guide Updated</h4>
                  <p className="text-sm text-gray-600">Version 3.0 released with new security recommendations</p>
                  <p className="text-xs text-gray-500 mt-1">October 5, 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="rounded-full bg-google-green/10 p-2 flex-shrink-0">
                  <FileText className="h-5 w-5 text-google-green" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">EDI Specifications Updated</h4>
                  <p className="text-sm text-gray-600">940 and 945 specifications updated to version 2.1</p>
                  <p className="text-xs text-gray-500 mt-1">September 15, 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="rounded-full bg-google-red/10 p-2 flex-shrink-0">
                  <FileText className="h-5 w-5 text-google-red" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">System Integration Manual Updated</h4>
                  <p className="text-sm text-gray-600">Version 4.1 released with new API endpoints</p>
                  <p className="text-xs text-gray-500 mt-1">December 1, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> You will receive email notifications when documentation relevant to your
              applications is updated.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
