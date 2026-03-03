import React, { Suspense, lazy } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const PrivacyTerms = lazy(() => import('./pages/PrivacyTerms'))
import Loader from './ui/components/Loader'

import { privacyPolicy, termsOfService } from './data/privacyRules'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/privacy' element={<PrivacyTerms title="Privacy Policy" items={privacyPolicy} />} />
            <Route path='/terms' element={<PrivacyTerms title="Terms" items={termsOfService} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
