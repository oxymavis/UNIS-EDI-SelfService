import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PendingApprovalPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm max-w-md w-full p-8 hover:shadow-md transition-shadow duration-200">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-google-green/10 p-4">
              <CheckCircle className="h-12 w-12 text-google-green" />
            </div>
          </div>
          <h1 className="text-2xl font-normal text-gray-900 mb-2">Registration Submitted</h1>
          <p className="text-gray-600 mb-6">Your account is pending approval</p>

          <div className="space-y-6 mb-8">
            <p className="text-gray-600">
              Thank you for registering with the UNIS EDI Platform. Your registration has been submitted and is
              currently under review.
            </p>
            <p className="text-gray-600">
              You will receive an email notification once your account has been approved. This process typically takes
              1-2 business days.
            </p>
            <div className="bg-google-blue/5 p-4 rounded-lg text-google-blue/90 text-sm">
              <p>
                <strong>Note:</strong> Please ensure that emails from <strong>noreply@unis-edi.com</strong> are not
                filtered as spam.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/" className="w-full block">
              <Button className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                Return to Home
              </Button>
            </Link>
            <Link href="/support" className="w-full block">
              <Button
                variant="outline"
                className="w-full rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
