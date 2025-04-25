"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AppWindow,
  Bell,
  BadgeIcon as Certificate,
  ChevronDown,
  FileText,
  Home,
  LogOut,
  Menu,
  Settings,
  TestTube,
  Upload,
  User,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    {
      name: "Applications",
      href: "/dashboard/apps",
      icon: AppWindow,
      children: [
        { name: "All Apps", href: "/dashboard/apps" },
        { name: "Create New App", href: "/dashboard/apps/create" },
      ],
    },
    {
      name: "Certificates",
      href: "/dashboard/certificates",
      icon: Certificate,
      children: [
        { name: "My Certificates", href: "/dashboard/certificates" },
        { name: "UNIS Certificates", href: "/dashboard/certificates/unis" },
      ],
    },
    {
      name: "Testing",
      href: "/dashboard/testing",
      icon: TestTube,
      children: [
        { name: "Test Connections", href: "/dashboard/testing" },
        { name: "Test Results", href: "/dashboard/testing/results" },
        { name: "Test Scenarios", href: "/dashboard/testing/scenarios" },
      ],
    },
    { name: "Deployment", href: "/dashboard/deployment", icon: Upload },
    {
      name: "Documentation",
      href: "/dashboard/docs",
      icon: FileText,
      children: [
        { name: "EDI Specifications", href: "/dashboard/docs/edi" },
        { name: "AS2 Configuration", href: "/dashboard/docs/as2" },
        { name: "Test Cases", href: "/dashboard/docs/test-cases" },
        { name: "Integration Guide", href: "/dashboard/docs/integration" },
      ],
    },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const renderNavItem = (item: any) => {
    const active = isActive(item.href)
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems[item.name]

    return (
      <li key={item.name}>
        <div className="flex flex-col">
          <div className="flex items-center">
            {hasChildren ? (
              <div
                onClick={() => toggleExpand(item.name)}
                className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium cursor-pointer ${
                  active ? "bg-google-blue/10 text-google-blue" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
                <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium ${
                  active ? "bg-google-blue/10 text-google-blue" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )}
          </div>
          {hasChildren && isExpanded && (
            <ul className="mt-1 pl-8 space-y-1">
              {item.children.map((child: any) => (
                <li key={child.name}>
                  <Link
                    href={child.href}
                    className={`block rounded-full px-4 py-2 text-sm font-medium ${
                      isActive(child.href) ? "bg-google-blue/10 text-google-blue" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    )
  }

  const Sidebar = () => (
    <div className="flex h-full flex-col bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Certificate className="h-8 w-8 text-google-blue" />
          <span className="text-xl font-normal text-gray-900">UNIS EDI Platform</span>
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-auto py-4 px-3">
        <nav className="grid items-start text-sm">
          <ul className="space-y-1">{navigation.map(renderNavItem)}</ul>
        </nav>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
        {isMobile && (
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        )}
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/logout" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="w-64 hidden md:block border-r">
            <Sidebar />
          </aside>
        )}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
