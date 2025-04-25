"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"

export default function EditAppPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()

  // Sample app data - in a real app, you would fetch this based on the ID
  const initialData = {
    id: params.id,
    name: params.id === "app-1" ? "Order Processor" : "Inventory Manager",
    code: params.id === "app-1" ? "ORD-PROC" : "INV-MGR",
    description:
      params.id === "app-1"
        ? "Processes order EDI messages (940)"
        : "Manages inventory updates and shipment confirmations",
    protocol: "AS2",
    interfaces: params.id === "app-1" ? ["940", "997"] : ["945", "997"],
  }

  const [formData, setFormData] = useState(initialData)

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

    // Simulate app update
    toast({
      title: "Application updated",
      description: `${formData.name} has been updated successfully.`,
    })

    // Redirect to app details page
    setTimeout(() => {
      router.push(`/dashboard/apps/${params.id}`)
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href={`/dashboard/apps/${params.id}`}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-medium">Edit Application</h1>
          </div>
          <p className="text-muted-foreground">Update your application details and configuration.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Application Name*</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code">Application Code*</Label>
                    <Input id="code" name="code" value={formData.code} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="protocol">Protocol*</Label>
                  <Select value={formData.protocol} onValueChange={(value) => handleSelectChange("protocol", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select protocol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AS2">AS2</SelectItem>
                      <SelectItem value="SFTP">SFTP</SelectItem>
                      <SelectItem value="API">API</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Interfaces*</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["940", "945", "997", "856"].map((value) => (
                      <div key={value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`interface-${value}`}
                          checked={formData.interfaces.includes(value)}
                          onCheckedChange={(checked) => handleInterfaceChange(value, checked as boolean)}
                        />
                        <Label htmlFor={`interface-${value}`}>{value}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Link href={`/dashboard/apps/${params.id}`}>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
