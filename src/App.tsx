import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'

import { menuItems } from './data/menu'

const App: React.FC = () => {

  return (
    <>
      <Header items={menuItems} />
      <Hero />
    </>
  )
}

export default App
