import { useEffect } from 'react'

import Header from '@/ui/sections/Header'
import Hero from '@/ui/sections/Hero'
import About from '@/ui/sections/About'
import Team from '@/ui/sections/Team'
import Services from '@/ui/sections/Services'
import Gallery from '@/ui/sections/Gallery'
import Reviews from '@/ui/sections/Reviews'
import Map from '@/ui/sections/Map'
import Footer from '@/ui/sections/Footer'

import { menuItems } from '@/data/menu'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header items={menuItems} />
      <Hero />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Reviews />
      <Map />
      <Footer />
    </>
  )
}

export default Home
