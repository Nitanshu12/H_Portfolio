import { NavPill } from '../utils/Navpill'

/* ── Cover images (imported directly from PORTFOLIO-CONTENT) ─────────── */
import coverSpaceDesign    from '../../PORTFOLIO-CONTENT/COVER PHOTOS/2. Space design.jpg'
import coverFurniture      from '../../PORTFOLIO-CONTENT/COVER PHOTOS/3. Furniture Design.png'
import coverProduct        from '../../PORTFOLIO-CONTENT/COVER PHOTOS/4. Product Design.png'
import cover3D             from '../../PORTFOLIO-CONTENT/COVER PHOTOS/5. 3D Models.png'
import coverCAD            from '../../PORTFOLIO-CONTENT/COVER PHOTOS/6. CAD RHINO.png'
import coverDesignPrinc    from '../../PORTFOLIO-CONTENT/COVER PHOTOS/7. DESIGN PRINCIPLES.png'
import coverMaterial       from '../../PORTFOLIO-CONTENT/COVER PHOTOS/8. MATERIAL EXPLORATION.png'
import coverLogo           from '../../PORTFOLIO-CONTENT/COVER PHOTOS/9. Logo and Branding.jpg'
import coverUIUX           from '../../PORTFOLIO-CONTENT/COVER PHOTOS/10. UI - UX.png'
import coverDigitalArt     from '../../PORTFOLIO-CONTENT/COVER PHOTOS/11. DIGITAL ART.png'
import coverPrintMaking    from '../../PORTFOLIO-CONTENT/COVER PHOTOS/13. Print Making .png'
import coverUnreal         from '../../PORTFOLIO-CONTENT/COVER PHOTOS/14. UNREAL ENGINE.png'
import coverPainting       from '../../PORTFOLIO-CONTENT/COVER PHOTOS/15. Painting Sketching.png'

const PROJECTS = [
  { id: 2,  label: 'Space Design',        cover: coverSpaceDesign   },
  { id: 3,  label: 'Furniture Design',    cover: coverFurniture     },
  { id: 4,  label: 'Product Design',      cover: coverProduct       },
  { id: 5,  label: '3D Modelling',        cover: cover3D            },
  { id: 6,  label: 'CAD / Rhino',         cover: coverCAD           },
  { id: 7,  label: 'Design Principles',   cover: coverDesignPrinc   },
  { id: 8,  label: 'Material Explore',    cover: coverMaterial      },
  { id: 9,  label: 'Logo & Branding',     cover: coverLogo          },
  { id: 10, label: 'UI / UX',             cover: coverUIUX          },
  { id: 11, label: 'Digital Art',         cover: coverDigitalArt    },
  { id: 13, label: 'Print Making',        cover: coverPrintMaking   },
  { id: 14, label: 'Unreal Engine',       cover: coverUnreal        },
  { id: 15, label: 'Painting & Sketches', cover: coverPainting      },
]

function ProjectCard({ label, cover }) {
  return (
    <div className="project-card">
      {cover
        ? <img src={cover} alt={label} loading="lazy" />
        : <div className="project-placeholder">{label}</div>
      }
      <div className="project-card-overlay">
        <span className="project-card-title">{label}</span>
      </div>
    </div>
  )
}

export default function ProjectsPage({ onNavigate }) {
  return (
    <div className="page-wrapper fs-page">
      {/* ── Top Nav ── */}
      <div className="fs-nav">
        <NavPill activePage="My Projects" onNavigate={onNavigate} />
      </div>

      {/* ── Content ── */}
      <div className="fs-content">
        <div className="fs-inner">
          <h1 className="fs-heading">My Projects</h1>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} label={p.label} cover={p.cover} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
