import React from 'react'

import Header from './components/Header'

import { menuItems } from './data/menu'

const App: React.FC = () => {

  return (
    <>
      <Header items={menuItems} />
    </>
  )
}

export default App
