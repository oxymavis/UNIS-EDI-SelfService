"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, CheckCircle, Clock, Upload } from "lucide-react"

export default function DeploymentPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedApp, setSelectedApp] = useState("")
  const [notes, setNotes] = useState("")
  const [confirmChecklist, setConfirmChecklist] = useState({
    testsCompleted: false,
    certificatesValid: false,
    configurationReviewed: false,
  })
  const [deploymentStatus, setDeploymentStatus] = useState<"none" | "pending" | "approved" | "rejected">("none")

  // Sample apps data
  const apps = [
    {
      id: "app-1",
      name: "Order Processor",
      testStatus: "complete",
      certificateStatus: "valid",
    },
    {
      id: "app-2",
      name: "Inventory Manager",
      testStatus: "incomplete",
      certificateStatus: "valid",
    },
  ]

  const selectedAppData = apps.find((app) => app.id === selectedApp)

  const handleChecklistChange = (key: keyof typeof confirmChecklist, checked: boolean) => {
    setConfirmChecklist((prev) => ({
      ...prev,
      [key]: checked,
    }))
  }

  const isFormValid = () => {
    return (
      selectedApp &&
      Object.values(confirmChecklist).every((value) => value) &&
      selectedAppData?.testStatus === "complete"
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid()) {
      toast({
        title: "Cannot submit request",
        description: "Please complete all required fields and ensure all tests are completed.",
        variant: "destructive",
      })
      return
    }

    // Simulate deployment request submission
    toast({
      title: "Deployment request submitted",
      description: "Your request has been submitted for review.",
    })

    setDeploymentStatus("pending")
  }

  // Simulate an approved deployment for demo purposes
  const simulateApproval = () => {
    setDeploymentStatus("approved")
    toast({
      title: "Deployment request approved",
      description: "Your application has been approved for production deployment.",
    })
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900">Production Deployment</h1>
          <p className="text-gray-600">Request production deployment for your EDI applications</p>
        </div>

        {deploymentStatus === "approved" ? (
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-normal text-gray-900">Deployment Approved</h2>
                <Badge className="rounded-full bg-google-green/10 text-google-green border-0 px-3">Approved</Badge>
              </div>
              <p className="text-sm text-gray-600">Your application has been approved for production deployment</p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center py-6">
                <div className="text-center max-w-lg">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-google-green/10 p-4">
                      <CheckCircle className="h-12 w-12 text-google-green" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4">Congratulations!</h3>
                  <p className="text-gray-600 mb-8">
                    Your application "{selectedAppData?.name}" has been approved for production deployment.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-normal text-gray-900 mb-4">Production Connection Details</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <span className="text-gray-500">AS2 URL:</span> https://prod-edi.unis.com/as2
                      </div>
                      <div>
                        <span className="text-gray-500">AS2 ID:</span> UNIS_PROD
                      </div>
                      <div>
                        <span className="text-gray-500">Your AS2 ID:</span> PARTNER_
                        {selectedAppData?.name.replace(/\s+/g, "_").toUpperCase()}
                      </div>
                      <div>
                        <span className="text-gray-500">Go-Live Date:</span>{" "}
                        {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    Please configure your production environment with the details above. The UNIS support team will
                    contact you to coordinate the go-live process.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t flex justify-between">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard")}
                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Return to Dashboard
              </Button>
              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                Download Connection Details
              </Button>
            </div>
          </div>
        ) : deploymentStatus === "pending" ? (
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-normal text-gray-900">Deployment Request Pending</h2>
                <Badge className="rounded-full bg-google-blue/10 text-google-blue border-0 px-3">Pending</Badge>
              </div>
              <p className="text-sm text-gray-600">Your deployment request is being reviewed</p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center py-6">
                <div className="text-center max-w-lg">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-google-blue/10 p-4">
                      <Clock className="h-12 w-12 text-google-blue" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4">Request Under Review</h3>
                  <p className="text-gray-600 mb-6">
                    Your deployment request for "{selectedAppData?.name}" is currently being reviewed by the UNIS team.
                  </p>

                  <div className="bg-google-blue/5 p-4 rounded-lg text-google-blue/90">
                    <p className="text-sm">
                      <strong>Note:</strong> The review process typically takes 1-3 business days. You will receive an
                      email notification once the review is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t flex justify-between">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard")}
                className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Return to Dashboard
              </Button>
              <Button
                onClick={simulateApproval}
                className="rounded-full bg-google-blue text-white hover:bg-google-blue/90"
              >
                Simulate Approval (Demo)
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Request Production Deployment</h2>
                <p className="text-sm text-gray-600">Submit a request to deploy your application to production</p>
              </div>

              <div className="p-6">
                <form id="deployment-form" onSubmit={handleSubmit} className="space-y-6">
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

                  {selectedApp && selectedAppData?.testStatus === "incomplete" && (
                    <Alert className="rounded-lg border-google-red/20 bg-google-red/5 text-google-red">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Required Tests Incomplete</AlertTitle>
                      <AlertDescription>
                        You must complete all required tests before requesting production deployment.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any additional information for the UNIS team"
                      rows={4}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <h3 className="text-base font-medium text-gray-900">Deployment Checklist</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="tests-completed"
                          checked={confirmChecklist.testsCompleted}
                          onCheckedChange={(checked) => handleChecklistChange("testsCompleted", checked as boolean)}
                          className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="tests-completed" className="text-sm font-normal leading-snug">
                            I confirm that all required tests have been completed successfully
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="certificates-valid"
                          checked={confirmChecklist.certificatesValid}
                          onCheckedChange={(checked) => handleChecklistChange("certificatesValid", checked as boolean)}
                          className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="certificates-valid" className="text-sm font-normal leading-snug">
                            I confirm that all certificates are valid and properly configured
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="configuration-reviewed"
                          checked={confirmChecklist.configurationReviewed}
                          onCheckedChange={(checked) =>
                            handleChecklistChange("configurationReviewed", checked as boolean)
                          }
                          className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="configuration-reviewed" className="text-sm font-normal leading-snug">
                            I confirm that I have reviewed all configuration settings and they are correct
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="p-6 border-t">
                <Button
                  type="submit"
                  form="deployment-form"
                  disabled={!isFormValid()}
                  className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Deployment Request
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Deployment Requirements</h2>
                <p className="text-sm text-gray-600">Requirements that must be met before production deployment</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2">Test Completion</h3>
                    <ul className="space-y-2 text-gray-600 pl-5">
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        All required test scenarios must be completed successfully
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        Test results must be reviewed and approved by the UNIS team
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-blue">•</span>
                        Any issues identified during testing must be resolved
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2">Certificate Management</h3>
                    <ul className="space-y-2 text-gray-600 pl-5">
                      <li className="flex items-center">
                        <span className="mr-2 text-google-green">•</span>
                        Valid AS2 certificates must be uploaded and configured
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-green">•</span>
                        Certificates must have at least 90 days before expiration
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-green">•</span>
                        UNIS certificate must be properly installed in your system
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2">Production Readiness</h3>
                    <ul className="space-y-2 text-gray-600 pl-5">
                      <li className="flex items-center">
                        <span className="mr-2 text-google-yellow">•</span>
                        Production environment must be ready to receive and process EDI messages
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-yellow">•</span>
                        Monitoring and alerting systems should be in place
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-google-yellow">•</span>
                        Support contacts must be provided for production issues
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> After approval, you will receive production connection details and a scheduled
                  go-live date.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
