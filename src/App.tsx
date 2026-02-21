import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

import { menuItems } from './data/menu'

const App: React.FC = () => {
  return (
    <>
      <Header items={menuItems} />
      <Hero />
      <About />
      <Services />
    </>
  )
}

export default App
