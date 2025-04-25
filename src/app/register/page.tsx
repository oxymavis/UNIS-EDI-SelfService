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
  const [isLoading, setIsLoading] = useState(false)
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

  const handleBasicSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: 'user',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Store tokens in localStorage
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      localStorage.setItem('user', JSON.stringify(data.user))

      toast({
        title: "Registration successful",
        description: "Please complete your profile information.",
      })

      setStep("identity")
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleIdentitySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          developerName: formData.developerName,
          developerTitle: formData.developerTitle,
          developerPhone: formData.developerPhone,
          organizationName: formData.organizationName,
          organizationAddress: formData.organizationAddress,
          organizationIndustry: formData.organizationIndustry,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Profile update failed')
      }

      toast({
        title: "Profile updated successfully",
        description: "Redirecting to dashboard...",
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Profile update failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
                  {step === "identity" && "Complete Your Profile"}
                </h2>
                <p className="text-sm text-gray-600">
                  {step === "basic" && "Enter your details to create an account"}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country/Region</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("country", value)}
                      defaultValue={formData.country}
                      disabled={isLoading}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Continue"}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizationIndustry">Industry</Label>
                      <Input
                        id="organizationIndustry"
                        name="organizationIndustry"
                        value={formData.organizationIndustry}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating profile..." : "Complete Registration"}
                  </Button>
                </form>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 