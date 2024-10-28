import React from 'react'
import { Outlet } from 'react-router-dom'

import { SlideTabs } from '@/components/landing/navigation/slidetabs'

const LandingLayout = () => {
  return (
    <>
      <SlideTabs />
      <Outlet />
    </>
  )
}

export default LandingLayout
