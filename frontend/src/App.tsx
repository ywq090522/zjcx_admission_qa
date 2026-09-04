import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/layout'

const HomePage = lazy(() => import('@/pages/Home'))
const AboutPage = lazy(() => import('@/pages/About'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App