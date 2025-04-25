import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText } from "lucide-react"

export default function IntegrationGuidePage() {
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
            <h1 className="text-3xl font-normal text-gray-900">System Integration Manual</h1>
          </div>
          <p className="text-gray-600 ml-10">Comprehensive guide for integrating with UNIS EDI systems</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-8">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-normal text-gray-900">System Integration Manual</h2>
              <Badge className="rounded-full bg-google-red/10 text-google-red border-0 px-3">v4.1</Badge>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Comprehensive guide for integrating your systems with the UNIS EDI Platform
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">
                This manual provides detailed instructions for integrating your systems with the UNIS EDI Platform. It
                covers all aspects of integration, including system architecture, data flow, security considerations,
                and best practices for implementation.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Document Contents</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  System Architecture Overview
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Integration Patterns and Best Practices
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Security Requirements and Implementation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  EDI Message Flow and Processing
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Error Handling and Recovery
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Monitoring and Alerting
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Production Deployment Checklist
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-6">
              <div>
                <span className="text-gray-500">Updated:</span> December 1, 2023
              </div>
              <div>
                <span className="text-gray-500">Size:</span> 3.2 MB
              </div>
            </div>

            <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              <Download className="mr-2 h-4 w-4" />
              Download Manual
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Integration Highlights</h2>
            <p className="text-sm text-gray-600">Key aspects of integrating with the UNIS EDI Platform</p>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">System Architecture</h3>
                <p className="text-gray-600 mb-4">
                  The UNIS EDI Platform uses a modern, cloud-based architecture designed for high availability,
                  scalability, and security. Key components include:
                </p>
                <ul className="space-y-2 text-gray-600 pl-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    AS2 Gateway for secure message exchange
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    EDI Processing Engine for message validation and transformation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Business Rules Engine for custom processing logic
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Monitoring and Alerting System for operational visibility
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Integration Patterns</h3>
                <p className="text-gray-600 mb-4">
                  The platform supports several integration patterns to accommodate different business requirements:
                </p>
                <ul className="space-y-2 text-gray-600 pl-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Direct AS2 communication for real-time message exchange
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Batch processing for high-volume scenarios
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Hybrid approaches combining real-time and batch processing
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Security Considerations</h3>
                <p className="text-gray-600 mb-4">
                  Security is a top priority for the UNIS EDI Platform. Key security features include:
                </p>
                <ul className="space-y-2 text-gray-600 pl-5">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    AS2 message encryption and digital signatures
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Certificate-based authentication
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    TLS 1.2+ for all communications
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Regular security audits and penetration testing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/dashboard/docs/edi" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  EDI Specifications
                </Button>
              </Link>
              <Link href="/dashboard/docs/as2" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  AS2 Configuration
                </Button>
              </Link>
              <Link href="/dashboard/docs/test-cases" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Test Cases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
