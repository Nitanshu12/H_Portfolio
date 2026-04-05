import { NavPill } from '../utils/Navpill'
import { SocialIcons } from '../utils/Social-icons'
import '../App.css'
import Hero from '../../PORTFOLIO-CONTENT/1. Jury/Sem-3/Hero-image.jpeg'

export default function WelcomePage({ onNavigate }) {
  return (
    <div className="page-wrapper welcome-page">
      <section className="welcome-shell" id="welcome">
        <div className="welcome-card">
          <div className="welcome-card__stage">
            <div className="welcome-card__media">
              <img
                src={Hero}
                alt=""
                className="hero-bg welcome-hero-bg"
                aria-hidden="true"
              />
              <div className="hero-overlay welcome-overlay" />
            </div>

            <div className="hero-inner welcome-inner">
              <div className="hero-nav-wrap">
                <NavPill
                  activePage="Welcome"
                  onNavigate={onNavigate}
                  variant="glass"
                />
              </div>

              <div className="hero-content welcome-content">
                <h1 className="hero-name welcome-name">Harshita Panwar</h1>

                <p className="hero-description welcome-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>

                <SocialIcons variant="light" decorDots />
              </div>

              <div className="welcome-cta-wrap">
                <button
                  type="button"
                  className="hero-cta welcome-cta"
                  onClick={() => onNavigate('My Projects')}
                >
                  Explore Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}