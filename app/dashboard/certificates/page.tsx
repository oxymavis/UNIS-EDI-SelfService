import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BadgeIcon as Certificate, Download, Upload, AlertCircle } from "lucide-react"

export default function CertificatesPage() {
  // Sample certificate data
  const certificates = [
    {
      id: "cert-1",
      name: "Partner AS2 Certificate",
      type: "Public Key",
      format: "X.509",
      issuedTo: "Your Organization",
      issuedBy: "Your Certificate Authority",
      validFrom: "2023-01-15",
      validTo: "2024-01-15",
      status: "active",
      daysRemaining: 180,
      apps: ["Order Processor", "Inventory Manager"],
    },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-normal text-gray-900">Certificate Management</h1>
            <p className="text-gray-600">Manage your AS2 certificates</p>
          </div>
          <Link href="/dashboard/certificates/upload">
            <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
              <Upload className="mr-2 h-4 w-4" />
              Upload Certificate
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Your Certificates</h2>
              <p className="text-sm text-gray-600">Certificates you have uploaded for AS2 communication</p>
            </div>

            <div className="p-6">
              {certificates.length > 0 ? (
                <div className="space-y-6">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-google-green/10 p-2 mr-3">
                            <Certificate className="h-5 w-5 text-google-green" />
                          </div>
                          <h3 className="text-lg font-normal text-gray-900">{cert.name}</h3>
                        </div>
                        <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">
                          {cert.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                        <div>
                          <span className="text-gray-500">Format:</span> {cert.format}
                        </div>
                        <div>
                          <span className="text-gray-500">Type:</span> {cert.type}
                        </div>
                        <div>
                          <span className="text-gray-500">Issued To:</span> {cert.issuedTo}
                        </div>
                        <div>
                          <span className="text-gray-500">Issued By:</span> {cert.issuedBy}
                        </div>
                        <div>
                          <span className="text-gray-500">Valid From:</span> {cert.validFrom}
                        </div>
                        <div>
                          <span className="text-gray-500">Valid To:</span> {cert.validTo}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Used in Apps:</span>{" "}
                          {cert.apps.map((app, i) => (
                            <span key={app}>
                              {app}
                              {i < cert.apps.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      </div>

                      {cert.daysRemaining < 30 && (
                        <Alert
                          variant="destructive"
                          className="mb-4 rounded-lg border-google-red/20 bg-google-red/5 text-google-red"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Certificate Expiring Soon</AlertTitle>
                          <AlertDescription>
                            This certificate will expire in {cert.daysRemaining} days. Please renew it soon.
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          Replace
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="rounded-full bg-gray-100 p-4 inline-flex mb-4">
                    <Certificate className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">No Certificates</h3>
                  <p className="text-sm text-gray-600 mb-6">You haven't uploaded any certificates yet</p>
                  <Link href="/dashboard/certificates/upload">
                    <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Certificate
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">UNIS Certificates</h2>
              <p className="text-sm text-gray-600">Download UNIS certificates for AS2 communication</p>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-google-blue/10 p-2 mr-3">
                      <Certificate className="h-5 w-5 text-google-blue" />
                    </div>
                    <h3 className="text-lg font-normal text-gray-900">UNIS AS2 Public Certificate</h3>
                  </div>
                  <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">Active</Badge>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Format:</span> X.509
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span> Public Key
                  </div>
                  <div>
                    <span className="text-gray-500">Issued To:</span> UNIS EDI Platform
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
                </div>

                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>

              <div className="bg-google-blue/5 p-4 rounded-lg text-sm text-google-blue/90">
                <p>
                  <strong>Note:</strong> You must download and install the UNIS certificate in your AS2 software to
                  establish secure communications.
                </p>
              </div>
            </div>

            <div className="p-6 border-t">
              <Link href="/dashboard/docs/as2" className="w-full block">
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

        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Certificate Management Guide</h2>
              <p className="text-sm text-gray-600">How to manage your EDI certificates</p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">What are AS2 Certificates?</h3>
                  <p className="text-gray-600">
                    AS2 certificates are digital certificates used to secure EDI communications over the AS2 protocol.
                    They ensure that data is encrypted during transmission and verify the identity of the sender and
                    receiver.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Certificate Requirements</h3>
                  <ul className="space-y-2 text-gray-600 pl-5">
                    <li className="flex items-center">
                      <span className="mr-2 text-google-blue">•</span>
                      X.509 format
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-google-blue">•</span>
                      2048-bit RSA key or stronger
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-google-blue">•</span>
                      SHA-256 signature algorithm
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-google-blue">•</span>
                      Valid for no more than 2 years
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Certificate Renewal Process</h3>
                  <p className="text-gray-600">
                    Certificates should be renewed at least 30 days before expiration. The platform will send email
                    notifications when certificates are nearing expiration. To renew, simply upload a new certificate
                    and it will replace the existing one.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t">
              <Link href="/dashboard/docs/certificates" className="w-full block">
                <Button
                  variant="outline"
                  className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  View Full Certificate Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
