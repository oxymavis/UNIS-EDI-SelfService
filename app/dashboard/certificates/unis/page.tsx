import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BadgeIcon as Certificate, Download, ArrowLeft, AlertCircle } from "lucide-react"

export default function UnisCertificatesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/dashboard/certificates">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <h1 className="text-3xl font-normal text-gray-900">UNIS Certificates</h1>
          </div>
          <p className="text-gray-600 ml-10">Download UNIS certificates for AS2 communication</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">UNIS AS2 Certificates</h2>
            <p className="text-sm text-gray-600">Download these certificates to configure your AS2 software</p>
          </div>

          <div className="p-6">
            <Alert className="mb-6 rounded-lg border-google-blue/20 bg-google-blue/5 text-google-blue">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                You must download and install the appropriate UNIS certificate in your AS2 software to establish secure
                communications. Use the test environment certificate for testing and the production certificate only
                after your deployment has been approved.
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-google-blue/10 p-2 mr-3">
                      <Certificate className="h-5 w-5 text-google-blue" />
                    </div>
                    <h3 className="text-lg font-normal text-gray-900">UNIS Test Environment AS2 Certificate</h3>
                  </div>
                  <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">Active</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Format:</span> X.509
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span> Public Key
                  </div>
                  <div>
                    <span className="text-gray-500">Issued To:</span> UNIS EDI Test Platform
                  </div>
                  <div>
                    <span className="text-gray-500">Issued By:</span> UNIS Certificate Authority
                  </div>
                  <div>
                    <span className="text-gray-500">Valid From:</span> 2023-01-01
                  </div>
                  <div>
                    <span className="text-gray-500">Valid To:</span> 2025-01-01
                  </div>
                  <div>
                    <span className="text-gray-500">Fingerprint (SHA-256):</span>
                  </div>
                  <div className="break-all">3A:B1:D4:8E:7F:9A:C2:0F:1E:8D:5B:7A:3E:9D:2F:1A:...</div>
                </div>

                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Test Certificate
                </Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-google-red/10 p-2 mr-3">
                      <Certificate className="h-5 w-5 text-google-red" />
                    </div>
                    <h3 className="text-lg font-normal text-gray-900">UNIS Production Environment AS2 Certificate</h3>
                  </div>
                  <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">Active</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Format:</span> X.509
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span> Public Key
                  </div>
                  <div>
                    <span className="text-gray-500">Issued To:</span> UNIS EDI Production Platform
                  </div>
                  <div>
                    <span className="text-gray-500">Issued By:</span> UNIS Certificate Authority
                  </div>
                  <div>
                    <span className="text-gray-500">Valid From:</span> 2023-01-01
                  </div>
                  <div>
                    <span className="text-gray-500">Valid To:</span> 2025-01-01
                  </div>
                  <div>
                    <span className="text-gray-500">Fingerprint (SHA-256):</span>
                  </div>
                  <div className="break-all">5C:D2:E5:9F:8B:D3:1F:2E:9E:6C:8B:9F:4E:0E:3F:2B:...</div>
                </div>

                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Production Certificate
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <div className="bg-google-blue/5 p-4 rounded-lg text-sm text-google-blue/90 mb-6">
              <p>
                <strong>Note:</strong> The production certificate should only be used after your application has been
                approved for production deployment. Using the production certificate during testing may result in
                errors.
              </p>
            </div>

            <Link href="/dashboard/docs/as2">
              <Button
                variant="outline"
                className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                View AS2 Configuration Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
