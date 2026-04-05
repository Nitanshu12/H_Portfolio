import { NavPill } from '../utils/Navpill'
import { SocialIcons } from '../utils/Social-icons'

const SKILLS = [
  'Interior Architecture & Space Design',
  'Furniture & Product Design',
  '3D Modelling & CAD / Rhino',
  'UI / UX & Digital Illustration',
  'Material Exploration & Print Making',
  'Unreal Engine Visualisation',
]

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-wrapper fs-page">
      {/* ── Top Nav ── */}
      <div className="fs-nav">
        <NavPill activePage="About Me" onNavigate={onNavigate} />
      </div>

      {/* ── Content ── */}
      <div className="fs-content">
        <div className="fs-inner about-layout">

          {/* Left: photo */}
          <div className="about-photo-wrap">
            <img
              src="/images/about-photo.jpg"
              alt="Harshita Panwar"
              className="about-photo"
            />
          </div>

          {/* Right: text */}
          <div className="about-text">
            <h1 className="fs-heading">About Me</h1>

            <p className="fs-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="about-skills">
              <p className="skills-label">Skill:</p>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>amet, consectetur adipiscing elit,</li>
                <li>sed do eiusmod tempor</li>
                <li>incididunt ut labore</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="about-socials">
          <SocialIcons variant="dark" />
        </div>
      </div>
    </div>
  )
}
