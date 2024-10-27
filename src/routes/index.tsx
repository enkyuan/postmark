import React from 'react'

import { SlideTabs } from '@/components/navigation/slidetabs'
import { Hero } from '@/components/landing/hero'
import { Bento } from '@/components/landing/bento'
import { GeneratedText } from '@/components/landing/generated-text'

const Home = () => {
  return (
    <>
      <SlideTabs />
      <Hero />
      <Bento />
      <GeneratedText />
    </>
  )
}

export default Home
