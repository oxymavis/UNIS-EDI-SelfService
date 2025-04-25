"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { BadgeIcon as Certificate } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState<"basic" | "verification" | "identity">("basic")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
    developerName: "",
    developerTitle: "",
    developerPhone: "",
    organizationName: "",
    organizationAddress: "",
    organizationIndustry: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      })
      return
    }

    // Simulate sending verification code
    toast({
      title: "Verification code sent",
      description: "Please check your email for the verification code.",
    })

    setStep("verification")
  }

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate verification
    if (formData.verificationCode.length < 4) {
      toast({
        title: "Invalid verification code",
        description: "Please enter a valid verification code.",
        variant: "destructive",
      })
      return
    }

    setStep("identity")
  }

  const handleIdentitySubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate registration completion
    toast({
      title: "Registration submitted",
      description: "Your registration has been submitted for review. You will be notified via email once approved.",
    })

    // Redirect to pending approval page
    setTimeout(() => {
      router.push("/register/pending")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Certificate className="h-10 w-10 text-google-blue" />
          </div>
          <h1 className="text-3xl font-normal text-gray-900">UNIS EDI Platform</h1>
          <p className="mt-2 text-gray-600">Create your account to get started</p>
        </div>

        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="register"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Register
            </TabsTrigger>
            <TabsTrigger value="login" asChild className="rounded-full">
              <Link href="/login">Login</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="mb-6">
                <h2 className="text-xl font-normal text-gray-900">
                  {step === "basic" && "Create an Account"}
                  {step === "verification" && "Verify Your Email"}
                  {step === "identity" && "Complete Your Profile"}
                </h2>
                <p className="text-sm text-gray-600">
                  {step === "basic" && "Enter your details to create an account"}
                  {step === "verification" && "Enter the verification code sent to your email"}
                  {step === "identity" && "Provide developer and organization information"}
                </p>
              </div>

              {step === "basic" && (
                <form onSubmit={handleBasicSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country/Region</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("country", value)}
                      defaultValue={formData.country}
                    >
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select country/region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="kr">South Korea</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                  >
                    Continue
                  </Button>
                </form>
              )}

              {step === "verification" && (
                <form onSubmit={handleVerificationSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="verificationCode">Verification Code</Label>
                    <Input
                      id="verificationCode"
                      name="verificationCode"
                      value={formData.verificationCode}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500">A verification code has been sent to {formData.email}</p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                  >
                    Verify
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full rounded-full text-google-blue hover:bg-google-blue/10"
                    onClick={() => setStep("basic")}
                  >
                    Back
                  </Button>
                </form>
              )}

              {step === "identity" && (
                <form onSubmit={handleIdentitySubmit} className="space-y-4">
                  <div className="border-b pb-4 mb-4">
                    <h3 className="font-medium mb-2">Developer Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="developerName">Full Name</Label>
                      <Input
                        id="developerName"
                        name="developerName"
                        value={formData.developerName}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="developerTitle">Job Title</Label>
                      <Input
                        id="developerTitle"
                        name="developerTitle"
                        value={formData.developerTitle}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="developerPhone">Phone Number</Label>
                      <Input
                        id="developerPhone"
                        name="developerPhone"
                        value={formData.developerPhone}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Organization Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="organizationName">Organization Name</Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizationAddress">Address</Label>
                      <Input
                        id="organizationAddress"
                        name="organizationAddress"
                        value={formData.organizationAddress}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizationIndustry">Industry</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("organizationIndustry", value)}
                        defaultValue={formData.organizationIndustry}
                      >
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="logistics">Logistics</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                  >
                    Submit for Review
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full rounded-full text-google-blue hover:bg-google-blue/10"
                    onClick={() => setStep("verification")}
                  >
                    Back
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By registering, you agree to our{" "}
                  <Link href="/terms" className="text-google-blue hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-google-blue hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
