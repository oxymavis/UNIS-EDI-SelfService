"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { BadgeCheck, Bell, Lock, User } from "lucide-react"

export default function SettingsPage() {
  const { toast } = useToast()
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    jobTitle: "EDI Integration Specialist",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    certificateExpiration: true,
    testResults: true,
    deploymentUpdates: true,
    marketingEmails: false,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleNotificationsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been updated successfully.",
    })
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="mb-6 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="profile"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Profile Information</h2>
                <p className="text-sm text-gray-600">Update your personal and company information</p>
              </div>

              <form onSubmit={handleProfileSubmit} className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="rounded-full bg-google-blue/10 p-6">
                      <User className="h-12 w-12 text-google-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-gray-900">{profileData.name}</h3>
                      <p className="text-gray-600">{profileData.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={profileData.jobTitle}
                        onChange={handleProfileChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={profileData.company}
                        onChange={handleProfileChange}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="submit" className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Notification Preferences</h2>
                <p className="text-sm text-gray-600">Manage how and when you receive notifications</p>
              </div>

              <form onSubmit={handleNotificationsSubmit} className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-google-blue/10 p-2">
                        <Bell className="h-5 w-5 text-google-blue" />
                      </div>
                      <div>
                        <Label htmlFor="emailNotifications" className="text-base font-normal">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                    />
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-normal text-gray-900 mb-4">Email Notification Types</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="certificateExpiration" className="text-base font-normal">
                            Certificate Expiration
                          </Label>
                          <p className="text-sm text-gray-600">Notifications about certificate expiration</p>
                        </div>
                        <Switch
                          id="certificateExpiration"
                          checked={notificationSettings.certificateExpiration}
                          onCheckedChange={(checked) => handleNotificationChange("certificateExpiration", checked)}
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="testResults" className="text-base font-normal">
                            Test Results
                          </Label>
                          <p className="text-sm text-gray-600">Notifications about test results</p>
                        </div>
                        <Switch
                          id="testResults"
                          checked={notificationSettings.testResults}
                          onCheckedChange={(checked) => handleNotificationChange("testResults", checked)}
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="deploymentUpdates" className="text-base font-normal">
                            Deployment Updates
                          </Label>
                          <p className="text-sm text-gray-600">Notifications about deployment status changes</p>
                        </div>
                        <Switch
                          id="deploymentUpdates"
                          checked={notificationSettings.deploymentUpdates}
                          onCheckedChange={(checked) => handleNotificationChange("deploymentUpdates", checked)}
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketingEmails" className="text-base font-normal">
                            Marketing Emails
                          </Label>
                          <p className="text-sm text-gray-600">Receive marketing and promotional emails</p>
                        </div>
                        <Switch
                          id="marketingEmails"
                          checked={notificationSettings.marketingEmails}
                          onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="submit" className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                    Save Preferences
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b">
                <h2 className="text-xl font-normal text-gray-900">Security Settings</h2>
                <p className="text-sm text-gray-600">Manage your account security</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-google-blue/10 p-2">
                        <Lock className="h-5 w-5 text-google-blue" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-gray-900">Password</h3>
                        <p className="text-sm text-gray-600">Change your account password</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Change Password
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-google-green/10 p-2">
                        <BadgeCheck className="h-5 w-5 text-google-green" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-gray-900">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Enable 2FA
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-normal text-gray-900 mb-4">API Access</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Manage API keys for programmatic access to the UNIS EDI platform
                    </p>
                    <Button className="rounded-full bg-google-blue text-white hover:bg-google-blue/90">
                      Manage API Keys
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
