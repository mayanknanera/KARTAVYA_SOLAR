import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'
import useScrollReveal from './hooks/useScrollReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimationObserver() {
  useScrollReveal()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
