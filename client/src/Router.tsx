import { Routes, Route } from 'react-router-dom'

import Home from '@/routes/'

import LandingLayout from '@/routes/landing/landing-layout'
import Changelog from '@/routes/landing/changelog/'
import Roadmap from '@/routes/landing/roadmap/'

import Auth from '@/routes/auth/'
import SignUp from '@/routes/auth/signup/'
import ResetPassword from '@/routes/auth/reset-password/'

import TabLayout from '@/routes/tabs/tab-layout'
import Archive from '@/routes/tabs/archive/'
import Notes from '@/routes/tabs/notes/'
import Search from '@/routes/tabs/search/'
import Timeline from '@/routes/tabs/timeline/'
import Support from '@/routes/tabs/support/'
import Feedback from '@/routes/tabs/feedback/'
import Settings from '@/routes/tabs/settings/'

export default function Router() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap/" element={<Roadmap />} />
        <Route path="/changelog/" element={<Changelog />} /> 
      </Route>
      <Route path="/auth/" element={<Auth />} />
      <Route path="/auth/signup/" element={<SignUp />} />
      <Route path="/auth/reset-password/" element={<ResetPassword />} />
      <Route element={<TabLayout />}>
        <Route path="/archive/" element={<Archive />} />
        <Route path="/notes/" element={<Notes />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/timeline/" element={<Timeline />} />
        <Route path="/support/" element={<Support />} />
        <Route path="/feedback/" element={<Feedback />} />
        <Route path="/settings/" element={<Settings />} />
      </Route>
    </Routes>
  )
}
