import Router from '@/Router'
import { Toaster } from 'sonner'
import { NhostProvider } from '@nhost/react'
import { nhost } from '@/lib/nhost'

function App() {
  return (
    <>
      <NhostProvider nhost={nhost}>
        <Router />
        <Toaster richColors />
      </NhostProvider>
    </>
  )
}

export default App
