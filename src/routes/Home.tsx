import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Pricing } from '../components/Pricing'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Banner />
      <Pricing />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home;

