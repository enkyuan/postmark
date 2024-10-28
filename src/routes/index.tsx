import React from 'react'

import { SlideTabs } from '@/components/navigation/slidetabs'
import { Hero } from '@/components/landing/hero'
import { Bento } from '@/components/landing/bento'
import { Carousel } from '@/components/landing/carousel'
import { Footer } from '@/components/navigation/footer'

const Home = () => {
  return (
    <>
      <SlideTabs />
      <Hero />
      <Bento />
      <Carousel />
      <Footer />
    </>
  )
}

export default Home
