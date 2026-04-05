import { useState } from 'react'
import { NavPill } from '../utils/Navpill'
import projectsData from '../data/projectsData.json'
import '../gallery.css'
const allImages = import.meta.glob('../../PORTFOLIO-CONTENT/**/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true, import: 'default' })
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
  { id: 1,  label: 'Jury',                cover: null,               dataKey: '1. Jury' },
  { id: 2,  label: 'Space Design',        cover: coverSpaceDesign,   dataKey: '2. Space Design' },
  { id: 3,  label: 'Furniture Design',    cover: coverFurniture,     dataKey: '3. Furniture Design' },
  { id: 4,  label: 'Product Design',      cover: coverProduct,       dataKey: '4. Product Design' },
  { id: 5,  label: '3D Modelling',        cover: cover3D,            dataKey: '5. 3D Modelling' },
  { id: 6,  label: 'CAD / Rhino',         cover: coverCAD,           dataKey: '6. CAD Rhino' },
  { id: 7,  label: 'Design Principles',   cover: coverDesignPrinc,   dataKey: '7. Design Priciples' },
  { id: 8,  label: 'Material Explore',    cover: coverMaterial,      dataKey: '8. Material Exploration' },
  { id: 9,  label: 'Logo & Branding',     cover: coverLogo,          dataKey: '9. Logo Branding' },
  { id: 10, label: 'UI / UX',             cover: coverUIUX,          dataKey: '10. UI-UX' },
  { id: 11, label: 'Digital Art',         cover: coverDigitalArt,    dataKey: '11. Digital Art' },
  { id: 12, label: 'Posters',             cover: null,               dataKey: '12. Posters' },
  { id: 13, label: 'Print Making',        cover: coverPrintMaking,   dataKey: '13. Print Making' },
  { id: 14, label: 'Unreal Engine',       cover: coverUnreal,        dataKey: '14. Unreal Engine' },
  { id: 15, label: 'Painting & Sketches', cover: coverPainting,      dataKey: '15. Painting  -Sketches' },
]

function ProjectCard({ label, cover, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
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
  const [selectedProject, setSelectedProject] = useState(null)

  if (selectedProject) {
    const projectInfo = PROJECTS.find(p => p.id === selectedProject)
    const projData = projectsData[projectInfo.dataKey]

    return (
      <div className="page-wrapper fs-page">
        <div className="fs-nav">
          <NavPill activePage="My Projects" onNavigate={onNavigate} />
        </div>
        <div className="fs-content project-gallery-content">
          <div className="fs-inner">
            <button className="back-btn" onClick={() => setSelectedProject(null)}>
              &larr; Back to Projects
            </button>
            <h1 className="fs-heading" style={{ marginBottom: '24px' }}>{projectInfo.label}</h1>
            
            {/* Display root files if any */}
            {projData && projData.files && projData.files.length > 0 && (
              <div className="gallery-section">
                <div className="gallery-grid">
                  {projData.files.map((file, idx) => (
                     <img key={`root-${idx}`} src={allImages[file]} alt={projectInfo.label} loading="lazy" />
                  ))}
                </div>
              </div>
            )}

            {/* Display subfolders */}
            {projData && projData.subfolders && Object.entries(projData.subfolders).map(([subFolder, subData]) => (
              <div key={subFolder} className="gallery-section">
                <div className="gallery-subheading">{subFolder}</div>
                <div className="gallery-grid">
                  {subData.files.map((file, idx) => (
                    <img key={`sub-${subFolder}-${idx}`} src={allImages[file]} alt={subFolder} loading="lazy" />
                  ))}
                </div>
              </div>
            ))}

            {/* No Content placeholder */}
            {(!projData || (projData.files.length === 0 && Object.keys(projData.subfolders || {}).length === 0)) && (
               <div className="no-content">Content is coming soon.</div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrapper fs-page">
      <div className="fs-nav">
        <NavPill activePage="My Projects" onNavigate={onNavigate} />
      </div>

      <div className="fs-content">
        <div className="fs-inner">
          <h1 className="fs-heading">My Projects</h1>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <ProjectCard 
                key={p.id} 
                label={p.label} 
                cover={p.cover} 
                onClick={() => setSelectedProject(p.id)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
