import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText } from "lucide-react"

export default function As2ConfigurationPage() {
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
            <h1 className="text-3xl font-normal text-gray-900">AS2 Configuration Guide</h1>
          </div>
          <p className="text-gray-600 ml-10">Step-by-step guide for configuring AS2 connections with UNIS</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-8">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-normal text-gray-900">AS2 Configuration Guide</h2>
              <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">v3.0</Badge>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Comprehensive guide for configuring AS2 connections with the UNIS EDI Platform
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">
                This guide provides detailed instructions for configuring AS2 connections with the UNIS EDI Platform.
                AS2 (Applicability Statement 2) is a specification for Electronic Data Interchange (EDI) between
                organizations using the Internet's HTTP protocol. AS2 provides secure and reliable data transmission
                with digital signatures, encryption, and non-repudiation.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-2">Document Contents</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Introduction to AS2
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Certificate Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  AS2 Configuration Parameters
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Step-by-Step Configuration Guide
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Testing Your AS2 Connection
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-google-blue">•</span>
                  Troubleshooting Common Issues
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-6">
              <div>
                <span className="text-gray-500">Updated:</span> October 5, 2023
              </div>
              <div>
                <span className="text-gray-500">Size:</span> 2.5 MB
              </div>
            </div>

            <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              <Download className="mr-2 h-4 w-4" />
              Download Guide
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Quick Reference</h2>
            <p className="text-sm text-gray-600">Essential AS2 configuration parameters for UNIS EDI Platform</p>
          </div>

          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-normal text-gray-900 mb-4">UNIS AS2 Configuration Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Test Environment</p>
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">AS2 URL:</div>
                      <div>https://test-edi.unis.com/as2</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">AS2 ID:</div>
                      <div>UNIS_TEST</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">Subject:</div>
                      <div>UNIS EDI Test</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Production Environment</p>
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">AS2 URL:</div>
                      <div>https://prod-edi.unis.com/as2</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">AS2 ID:</div>
                      <div>UNIS_PROD</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">Subject:</div>
                      <div>UNIS EDI Production</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Common AS2 Software Configuration</h3>
                <p className="text-gray-600 mb-4">
                  Below are links to configuration guides for common AS2 software solutions:
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Configuring BizTalk Server for AS2
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Configuring IBM Sterling B2B Integrator for AS2
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Configuring Cleo Harmony for AS2
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <Link href="/dashboard/certificates">
              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                Manage Your Certificates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
