import { NavPill } from '../utils/Navpill'
import { SocialIcons } from '../utils/Social-icons'
import '../App.css'
import Hero from '../../PORTFOLIO-CONTENT/1. Jury/Sem-3/Hero-image.jpeg'

export default function WelcomePage({ onNavigate }) {
  return (
    <div className="page-wrapper fullscreen-page">
      <section className="hero-section fullscreen-hero" id="welcome">
        <img
          src={Hero}
          alt=""
          className="hero-bg"
          aria-hidden="true"
        />
        <div className="hero-overlay" />

        <div className="hero-inner">
          {/* Navigation */}
          <div className="hero-nav-wrap">
            <NavPill activePage="Welcome" onNavigate={onNavigate} />
          </div>

          {/* Main content */}
          <div className="hero-content">
            <h1 className="hero-name">Harshita Panwar</h1>

            <p className="hero-description">
              Interior Architecture Design Student — passionate about crafting
              spaces that merge form, function, and feeling.
            </p>

            {/* Decorative dots */}
            <div className="hero-dots" aria-hidden="true">
              <span /><span /><span />
              <span className="accent" /><span className="accent" /><span className="accent" />
              <span /><span /><span />
            </div>

            {/* Social links */}
            <SocialIcons variant="light" />

            {/* CTA */}
            <button
              className="hero-cta"
              onClick={() => onNavigate('My Projects')}
            >
              Explore Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}