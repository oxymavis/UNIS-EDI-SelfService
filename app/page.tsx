import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeIcon as Certificate } from "lucide-react"

export default function Home() {
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

      <main>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-normal text-gray-900 mb-4">Complete EDI Integration Solution</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              A comprehensive self-service platform for external partners to register, authenticate, create apps, manage
              EDI certificates, test interfaces, and access documentation.
            </p>
            <Link href="/register">
              <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90 px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                <div className="rounded-full bg-google-blue/10 w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-google-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-900 mb-3">User Registration</h2>
                <p className="text-gray-600 mb-6">
                  Register with basic information, verify your email, and submit developer and organization information
                  for approval.
                </p>
                <Link href="/register">
                  <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90 w-full">
                    Register Now
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                <div className="rounded-full bg-google-green/10 w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-google-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-900 mb-3">App Management</h2>
                <p className="text-gray-600 mb-6">
                  Create apps, bind EDI interfaces (940, 945, etc.), and configure protocol settings like AS2.
                </p>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
                  >
                    Login to Manage
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                <div className="rounded-full bg-google-yellow/10 w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-google-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-900 mb-3">Testing & Deployment</h2>
                <p className="text-gray-600 mb-6">
                  Test connections, simulate EDI message flows, and apply for production deployment after completing
                  required tests.
                </p>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
                  >
                    Login to Test
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center">Platform Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="rounded-full bg-google-blue/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">User Registration & Authentication</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Email verification
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Developer & organization information
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Platform approval mechanism
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Email notifications
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="rounded-full bg-google-red/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">App Creation & Management</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    App name, code, description
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    Protocol type (e.g., AS2)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    EDI interface binding
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="rounded-full bg-google-green/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">EDI Certificate Management</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-green">•</span>
                    Upload & manage AS2 certificates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-green">•</span>
                    Download platform certificates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-green">•</span>
                    Certificate expiration reminders
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="rounded-full bg-google-yellow/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">Testing & Integration</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-yellow">•</span>
                    Configure test connections
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-yellow">•</span>
                    Simulate EDI message flows
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-yellow">•</span>
                    View test results & logs
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="rounded-full bg-google-blue/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">Production Deployment</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Submit deployment requests
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    Track approval status
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-blue">•</span>
                    View production environment info
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="rounded-full bg-google-red/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-google-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">UNIS Specification Documents</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    EDI message formats
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    AS2 configuration specifications
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-google-red">•</span>
                    Test case definitions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
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
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-google-blue">
                    Support
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
