import { Suspense, lazy } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const PrivacyTerms = lazy(() => import('@/pages/PrivacyTerms'))
import Loader from '@/ui/components/Loader'

import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '@/data/privacyRules'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/privacy' element={<PrivacyTerms title="Privacy Policy" items={PRIVACY_POLICY} />} />
            <Route path='/terms' element={<PrivacyTerms title="Terms" items={TERMS_OF_SERVICE} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
