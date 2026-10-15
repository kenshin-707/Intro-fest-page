import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { EventPage } from './pages/EventPage'
import { NotFound } from './pages/NotFound'

// Handles smooth scrolling to top on route change, or to hash anchors
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollManager />
        <div className="flex flex-col min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text-main)] transition-colors duration-250 selection:bg-[#C62828] selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events/:slug" element={<EventPage />} />
              <Route path="/events" element={<Home />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
