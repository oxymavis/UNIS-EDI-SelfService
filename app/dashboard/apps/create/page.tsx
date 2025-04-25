"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"

export default function CreateAppPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    protocol: "",
    interfaces: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterfaceChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interfaces: checked ? [...prev.interfaces, value] : prev.interfaces.filter((i) => i !== value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.code || !formData.protocol || formData.interfaces.length === 0) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Simulate app creation
    toast({
      title: "Application created",
      description: `${formData.name} has been created successfully.`,
    })

    // Redirect to apps page
    setTimeout(() => {
      router.push("/dashboard/apps")
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Button>
            <h1 className="text-3xl font-normal text-gray-900">Create Application</h1>
          </div>
          <p className="text-gray-600 ml-10">Create a new EDI application</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Application Details</h2>
            <p className="text-sm text-gray-600">
              Enter the details for your new EDI application. This will be used to configure your EDI connections.
            </p>
          </div>

          <form id="create-app-form" onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Application Name <span className="text-google-red">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Order Processor"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">
                    Application Code <span className="text-google-red">*</span>
                  </Label>
                  <Input
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="e.g., ORD-PROC"
                    required
                    className="rounded-lg"
                  />
                  <p className="text-xs text-gray-500">
                    A unique code for your application (alphanumeric, max 10 chars)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the purpose of this application"
                  rows={3}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="protocol">
                  Protocol <span className="text-google-red">*</span>
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange("protocol", value)}
                  defaultValue={formData.protocol}
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select protocol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AS2">AS2</SelectItem>
                    <SelectItem value="SFTP">SFTP</SelectItem>
                    <SelectItem value="FTPS">FTPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>
                  EDI Interfaces <span className="text-google-red">*</span>
                </Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox
                        id="interface-940"
                        checked={formData.interfaces.includes("940")}
                        onCheckedChange={(checked) => handleInterfaceChange("940", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-940" className="font-normal">
                        940 (Warehouse Shipping Order)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox
                        id="interface-945"
                        checked={formData.interfaces.includes("945")}
                        onCheckedChange={(checked) => handleInterfaceChange("945", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-945" className="font-normal">
                        945 (Warehouse Shipping Advice)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interface-997"
                        checked={formData.interfaces.includes("997")}
                        onCheckedChange={(checked) => handleInterfaceChange("997", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-997" className="font-normal">
                        997 (Functional Acknowledgment)
                      </Label>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox
                        id="interface-856"
                        checked={formData.interfaces.includes("856")}
                        onCheckedChange={(checked) => handleInterfaceChange("856", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-856" className="font-normal">
                        856 (Ship Notice/Manifest)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox
                        id="interface-810"
                        checked={formData.interfaces.includes("810")}
                        onCheckedChange={(checked) => handleInterfaceChange("810", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-810" className="font-normal">
                        810 (Invoice)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interface-850"
                        checked={formData.interfaces.includes("850")}
                        onCheckedChange={(checked) => handleInterfaceChange("850", checked as boolean)}
                        className="rounded-sm data-[state=checked]:bg-google-blue data-[state=checked]:border-google-blue"
                      />
                      <Label htmlFor="interface-850" className="font-normal">
                        850 (Purchase Order)
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="p-6 bg-gray-50 border-t flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="create-app-form"
              className="rounded-full bg-google-blue text-white hover:bg-google-blue/90"
            >
              Create Application
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
