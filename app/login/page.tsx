"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { BadgeIcon as Certificate } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate login
    if (formData.email && formData.password) {
      toast({
        title: "Login successful",
        description: "Redirecting to dashboard...",
      })

      // Redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } else {
      toast({
        title: "Login failed",
        description: "Please enter valid credentials.",
        variant: "destructive",
      })
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
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="login"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Login
            </TabsTrigger>
            <TabsTrigger value="register" asChild className="rounded-full">
              <Link href="/register">Register</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="mb-6">
                <h2 className="text-xl font-normal text-gray-900">Sign In</h2>
                <p className="text-sm text-gray-600">Enter your credentials to access your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-google-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
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
                <Button type="submit" className="w-full rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-google-blue hover:underline">
                    Register
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
