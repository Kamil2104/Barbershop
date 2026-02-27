import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Map from '../components/Map'
import Footer from '../components/Footer'

import { menuItems } from '../data/menu'

const Home: React.FC = () => {
  return (
    <>
      <Header items={menuItems} />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Map />
      <Footer />
    </>
  )
}

export default Home
