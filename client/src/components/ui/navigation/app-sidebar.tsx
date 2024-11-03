import * as React from "react"
import {
  Command,
  LifeBuoy,
  Send,
  Search,
  Newspaper,
  StickyNote,
  Archive,
} from "lucide-react"

import logo from "@/assets/logo.svg"

import { NavMain } from "@/components/ui/navigation/nav-main"
import { NavProjects } from "@/components/ui/navigation/nav-projects"
import { NavSecondary } from "@/components/ui/navigation/nav-secondary"
import { NavUser } from "@/components/ui/navigation/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "enkyuan",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Search",
      url: "/search/",
      icon: Search,
      isActive: true,
    },
    {
      title: "Feed",
      url: "/timeline/",
      icon: Newspaper,
      isActive: true,
    },
    {
      title: "Notes",
      url: "/notes/",
      icon: StickyNote,
      isActive: true,
    },
    {
      title: "Archive",
      url: "/archive/",
      icon: Archive,
      isActive: true,
    },

  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support/",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback/",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/timeline/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-xl bg-gray-100 text-sidebar-primary-foreground">
                  <img src={logo} alt="Postmark" className="h-6 w-6" />  
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Postmark</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
