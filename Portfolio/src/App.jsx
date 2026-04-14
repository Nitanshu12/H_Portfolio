import { useState } from 'react'
import './App.css'
import { SocialIcons } from './utils/Social-icons'

import WelcomePage from './pages/Welcome'
import AboutPage from './pages/About-me'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

export default function App() {
  const [activePage, setActivePage] = useState('Welcome')

  const handleNavigate = (page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-root">
      {activePage === 'Welcome' && <WelcomePage onNavigate={handleNavigate} />}
      {activePage === 'About Me' && <AboutPage onNavigate={handleNavigate} />}
      {activePage === 'My Projects' && <ProjectsPage onNavigate={handleNavigate} />}
      {activePage === 'Contact' && <ContactPage onNavigate={handleNavigate} />}

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
