import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeIcon as Certificate, ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Certificate className="h-8 w-8 text-google-blue mr-2" />
              <span className="text-xl font-normal text-gray-900">UNIS EDI Platform</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="rounded-full text-gray-700 hover:bg-gray-100">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-google-blue hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-normal text-gray-900">Support Center</h1>
            <p className="text-gray-600 mt-2">Get help with the UNIS EDI Platform</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-8">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Contact Support</h2>
              <p className="text-sm text-gray-600">Reach out to our support team for assistance</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="rounded-full bg-google-blue/10 p-4 inline-flex mb-4">
                    <Mail className="h-6 w-6 text-google-blue" />
                  </div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                  <a href="mailto:edi@item.com" className="text-google-blue font-medium hover:underline">
                    edi@item.com
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="rounded-full bg-google-green/10 p-4 inline-flex mb-4">
                    <Phone className="h-6 w-6 text-google-green" />
                  </div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-4">Available Monday-Friday, 9am-5pm ET</p>
                  <a href="tel:+18005551234" className="text-google-blue font-medium hover:underline">
                    +1 (800) 555-1234
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="rounded-full bg-google-yellow/10 p-4 inline-flex mb-4">
                    <MessageSquare className="h-6 w-6 text-google-yellow" />
                  </div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">Chat with a support representative in real-time</p>
                  <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">Start Chat</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6 border-b">
              <h2 className="text-xl font-normal text-gray-900">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-600">Quick answers to common questions</p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">How long does account approval take?</h3>
                  <p className="text-gray-600">
                    Account approval typically takes 1-2 business days. You will receive an email notification once your
                    account has been approved.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">How do I upload an AS2 certificate?</h3>
                  <p className="text-gray-600">
                    After logging in, navigate to the Certificates section in your dashboard. Click on "Upload
                    Certificate" and follow the instructions to upload your AS2 certificate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">What EDI formats are supported?</h3>
                  <p className="text-gray-600">
                    The UNIS EDI Platform supports standard X12 EDI formats including 940, 945, 997, 856, 810, and 850.
                    Additional formats can be supported upon request.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2">How do I request production deployment?</h3>
                  <p className="text-gray-600">
                    Once you have completed all required tests, navigate to the Deployment section in your dashboard and
                    submit a deployment request. The UNIS team will review your request and provide further
                    instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Certificate className="h-6 w-6 text-google-blue mr-2" />
                <span className="text-lg font-normal text-gray-900">UNIS EDI Platform</span>
              </div>
              <p className="text-gray-600">A comprehensive self-service platform for EDI integration.</p>
            </div>
            <div>
              <h3 className="text-lg font-normal text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/register" className="text-gray-600 hover:text-google-blue">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-600 hover:text-google-blue">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-google-blue">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-normal text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600 mb-2">For support, please contact:</p>
              <p className="text-google-blue">edi@item.com</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} UNIS EDI Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
