import { useEffect, useRef } from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import './App.css'
import { SocialIcons } from './utils/Social-icons'

import WelcomePage from './pages/Welcome'
import AboutPage from './pages/About-me'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ContactPage from './pages/Contact'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isNavigating = useRef(false)
  const navigationTimeoutRef = useRef(null)

  // Get active page from URL path
  const getActivePage = () => {
    const path = location.pathname
    if (path === '/' || path === '/welcome') return 'Welcome'
    if (path === '/about') return 'About Me'
    if (path === '/projects' || path.startsWith('/projects/')) return 'My Projects'
    if (path === '/contact') return 'Contact'
    return 'Welcome'
  }

  const handleNavigate = (page) => {
    const pageRoutes = {
      'Welcome': '/',
      'About Me': '/about',
      'My Projects': '/projects',
      'Contact': '/contact'
    }
    navigate(pageRoutes[page])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle swipe/scroll back gesture
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      // Prevent rapid successive swipes
      if (isNavigating.current) return

      const swipeThreshold = 50
      const diff = touchStartX.current - touchEndX.current

      // Swipe right (go back)
      if (diff < -swipeThreshold) {
        const activePage = getActivePage()
        if (activePage !== 'Welcome') {
          isNavigating.current = true
          navigate(-1)
          
          // Clear any existing timeout
          if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current)
          }
          
          // Reset navigation lock after 600ms to allow next gesture
          navigationTimeoutRef.current = setTimeout(() => {
            isNavigating.current = false
          }, 600)
        }
      }
    }
    const handleWheel = (e) => {
      // Prevent rapid successive scrolls
      if (isNavigating.current) return

      // Check if it's a trackpad scroll (deltaX is significant)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
        const activePage = getActivePage()
        
        // Swipe/scroll right (negative deltaX means scroll left, which is back gesture)
        if (e.deltaX < 0 && activePage !== 'Welcome') {
          isNavigating.current = true
          navigate(-1)
          
          // Clear any existing timeout
          if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current)
          }
          
          // Reset navigation lock after 600ms to allow next gesture
          navigationTimeoutRef.current = setTimeout(() => {
            isNavigating.current = false
          }, 600)
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart, false)
    window.addEventListener('touchend', handleTouchEnd, false)
    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart, false)
      window.removeEventListener('touchend', handleTouchEnd, false)
      window.removeEventListener('wheel', handleWheel)
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [navigate, location.pathname])

  const activePage = getActivePage()

  return (
    <div className="portfolio-root">
      <Routes>
        <Route path="/" element={<WelcomePage onNavigate={handleNavigate} />} />
        <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
        <Route path="/projects" element={<ProjectsPage onNavigate={handleNavigate} />} />
        <Route path="/projects/:projectId" element={<ProjectDetail onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
      </Routes>

      {activePage !== 'Welcome' && (
        <footer className="footer">
          <div className="about-socials">
            <SocialIcons variant="dark" />
          </div>
          <div>
            © {new Date().getFullYear()} Harshita Panwar · All rights reserved
          </div>
        </footer>
      )}
    </div>
  )
}
