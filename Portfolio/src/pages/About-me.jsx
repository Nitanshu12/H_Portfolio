import { NavPill } from '../utils/Navpill'
import { SocialIcons } from '../utils/Social-icons'
import About       from '../../PORTFOLIO-CONTENT/About-me/About.jpeg'

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
      <div className="fs-nav">
        <NavPill activePage="About Me" onNavigate={onNavigate} />
      </div>

      {/* ── Content ── */}
      <div className="fs-content">
        <div className="fs-inner about-layout">

          {/* Left: photo */}
          <div className="about-photo-wrap">
            <img
              src={About}
              alt="Harshita Panwar"
              className="about-photo"
            />
          </div>

          {/* Right: text */}
          <div className="about-text">
            <h1 className="fs-heading">About Me</h1>

            <p className="fs-body-text">
              I am Harshita Panwar, an aspiring interior designer with a passion for creating meaningful spaces and experiences. Currently pursuing my Bachelor's of Design in Interior Architecture at Rishihood University. My academic journey has equipped me with skills in Design Thinking, Confidence Building, Management, Digital Design, Empathetic Behaviour and Listening, helping me approach projects with a well-rounded perspective.
When I am not designing, you’ll find me exploring event management, content creation, painting, crafting and performing arts, making creativity my driving force. I believe design is not just about aesthetics but about crafting experiences that leave an impact. I am enthusiastic about opportunities to apply my knowledge and skills in professional settings 

            </p>

            <div className="about-skills">
              {/* <p className="skills-label">Skill:</p>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>amet, consectetur adipiscing elit,</li>
                <li>sed do eiusmod tempor</li>
                <li>incididunt ut labore</li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Bottom Socials */}
      </div>
    </div>
  )
}
