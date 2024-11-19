import { Hero } from '@/components/landing/hero'
import { Bento } from '@/components/landing/bento'
import { Carousel } from '@/components/landing/carousel'
import { Footer } from '@/components/landing/navigation/footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Bento />
      <Carousel />
      <Footer />
    </>
  )
}

export default Home
