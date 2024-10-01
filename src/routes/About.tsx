import React from 'react'
import { Header } from '../components/Header'
import { Features } from '../components/Features'
import { FAQs } from '../components/FAQs'
import { Footer } from '../components/Footer'

const About = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Features />
      <FAQs />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About;
