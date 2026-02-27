import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PrivacyTerms from './pages/PrivacyTerms'

import { privacyPolicy, termsOfService } from './data/privacyRules'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/privacy' element={ <PrivacyTerms title="Privacy Policy" items={privacyPolicy} /> }/>
          <Route path='/terms' element={ <PrivacyTerms title="Terms" items={termsOfService} /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
