"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Upload } from "lucide-react"

export default function UploadCertificatePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    password: "",
    apps: [] as string[],
    description: "",
  })
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file || !formData.name || !formData.type) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields and select a certificate file.",
        variant: "destructive",
      })
      return
    }

    // Simulate certificate upload
    toast({
      title: "Certificate uploaded",
      description: "Your certificate has been uploaded successfully.",
    })

    // Redirect to certificates page
    setTimeout(() => {
      router.push("/dashboard/certificates")
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
            <h1 className="text-3xl font-normal text-gray-900">Upload Certificate</h1>
          </div>
          <p className="text-gray-600 ml-10">Upload a new AS2 certificate for secure EDI communication</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-normal text-gray-900">Certificate Details</h2>
            <p className="text-sm text-gray-600">
              Upload your X.509 certificate for AS2 communication. The certificate must be in PEM, DER, or PKCS#12
              format.
            </p>
          </div>

          <form id="upload-certificate-form" onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="certificate-file">
                  Certificate File <span className="text-google-red">*</span>
                </Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-google-blue/30 hover:bg-google-blue/5 transition-colors duration-200">
                  <div className="space-y-4">
                    <div className="rounded-full bg-google-blue/10 p-4 inline-flex">
                      <Upload className="h-6 w-6 text-google-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">
                        {file ? file.name : "Drag and drop your certificate file here, or click to browse"}
                      </p>
                      <p className="text-xs text-gray-500">Supported formats: .pem, .der, .p12, .pfx</p>
                    </div>
                    <Input
                      id="certificate-file"
                      type="file"
                      accept=".pem,.der,.p12,.pfx,.crt,.cer"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("certificate-file")?.click()}
                      className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Certificate Name <span className="text-google-red">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., My AS2 Certificate"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">
                    Certificate Type <span className="text-google-red">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("type", value)} defaultValue={formData.type}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public Key</SelectItem>
                      <SelectItem value="private">Private Key</SelectItem>
                      <SelectItem value="both">Public & Private Key Pair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Certificate Password (if applicable)</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password if certificate is password-protected"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Add any notes or details about this certificate"
                  rows={3}
                  className="rounded-lg"
                />
              </div>
            </div>
          </form>

          <div className="p-6 bg-gray-50 border-t flex justify-between">
            <Link href="/dashboard/certificates">
              <Button variant="outline" className="rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              form="upload-certificate-form"
              className="rounded-full bg-google-blue text-white hover:bg-google-blue/90"
            >
              Upload Certificate
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
