import React from 'react'
import { Outlet } from 'react-router-dom'

import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/navigation/app-sidebar'

const TabLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  )
}

export default TabLayout
