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
              I am Harshita Panwar, an Interior Architecture Design student with
              a passion for crafting spaces that tell stories. My work spans
              spatial design, furniture, product design, 3D modelling, and
              digital art — always exploring the intersection of aesthetics and
              function.
            </p>

            <div className="about-skills">
              <p className="skills-label">Skills &amp; Disciplines</p>
              <ul>
                {SKILLS.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <SocialIcons variant="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}
