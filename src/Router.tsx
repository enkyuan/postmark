import { Routes, Route } from 'react-router-dom'

import Home from '@/routes/'
import Changelog from '@/routes/changelog/'
import Roadmap from '@/routes/roadmap/'

import Auth from '@/routes/auth/'
import SignUp from '@/routes/auth/signup'

import Archive from '@/routes/tabs/archive/'
import Notes from '@/routes/tabs/notes/'
import Search from '@/routes/tabs/search/'
import Timeline from '@/routes/tabs/timeline/'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap/" element={<Roadmap />} />
      <Route path="/changelog/" element={<Changelog />} />
      <Route path="/auth/" element={<Auth />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/tabs/archive/" element={<Archive />} />
      <Route path="/tabs/notes/" element={<Notes />} />
      <Route path="/tabs/search/" element={<Search />} />
      <Route path="/tabs/timeline/" element={<Timeline />} />
    </Routes>
  )
}
