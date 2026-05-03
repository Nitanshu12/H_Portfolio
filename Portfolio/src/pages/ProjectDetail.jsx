import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { NavPill } from '../utils/Navpill'
import projectsData from '../data/projectsData.json'
import '../gallery.css'

const allImages = import.meta.glob('../../PORTFOLIO-CONTENT/**/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true, import: 'default' })
const allVideos = import.meta.glob('../../PORTFOLIO-CONTENT/**/*.{mp4,webm,mov,avi,mkv}', { eager: true, import: 'default' })

const isVideoFile = (filePath) => /\.(mp4|webm|mov|avi|mkv)$/i.test(filePath)
const getMedia = (filePath) => isVideoFile(filePath) ? allVideos[filePath] : allImages[filePath]

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
import coverJury from '../../PORTFOLIO-CONTENT/COVER PHOTOS/1. Jury.jpeg'
import coverPoster from '../../PORTFOLIO-CONTENT/COVER PHOTOS/12. Posters.jpeg'
import coverCharacter from '../../PORTFOLIO-CONTENT/COVER PHOTOS/16. Character Designing.png'

const PROJECTS = [
  { id: 1,  label: 'Jury',                cover: coverJury,          dataKey: '1. Jury' },
  { id: 2,  label: 'Space Design',        cover: coverSpaceDesign,   dataKey: '2. Space Design' },
  { id: 3,  label: 'Furniture Design',    cover: coverFurniture,     dataKey: '3. Furniture Design' },
  { id: 4,  label: 'Product Design',      cover: coverProduct,       dataKey: '4. Product Design' },
  { id: 5,  label: '3D Modelling',        cover: cover3D,            dataKey: '5. 3D Modelling' },
  { id: 6,  label: 'CAD / Rhino',         cover: coverCAD,           dataKey: '6. CAD Rhino' },
  { id: 7,  label: 'Design Principles',   cover: coverDesignPrinc,   dataKey: '7. Design Priciples' },
  { id: 8,  label: 'Material Explore',    cover: coverMaterial,      dataKey: '8. Material Exploration' },
  { id: 9,  label: 'Logo & Branding',     cover: coverLogo,          dataKey: '9. Logo Branding' },
  { id: 10, label: 'UI / UX',             cover: coverUIUX,          dataKey: '10. UI-UX',
    pdfs: [{ url: '/pdfs/paper-trail-app.pdf' }]
  },
  { id: 11, label: 'Digital Art',         cover: coverDigitalArt,    dataKey: '11. Digital Art' },
  { id: 12, label: 'Posters',             cover: coverPoster,        dataKey: '12. Posters' },
  { id: 13, label: 'Print Making',        cover: coverPrintMaking,   dataKey: '13. Print Making' },
  { id: 14, label: 'Unreal Engine',       cover: coverUnreal,        dataKey: '14. Unreal Engine' },
  { id: 15, label: 'Painting & Sketches', cover: coverPainting,      dataKey: '15. Painting  -Sketches' },
  { id: 16, label: 'Character Design',    cover: coverCharacter,     dataKey: '16. Character Design' }
]

function Lightbox({ src, alt, onClose, isVideo }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      {isVideo ? (
        <video
          src={src}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
          controls
          loop
          autoPlay
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>,
    document.body
  )
}

export default function ProjectDetail({ onNavigate }) {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxIsVideo, setLightboxIsVideo] = useState(false)

  const openLightbox = useCallback((src, isVideo = false) => {
    setLightboxSrc(src)
    setLightboxIsVideo(isVideo)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null)
    setLightboxIsVideo(false)
  }, [])

  const projectInfo = PROJECTS.find(p => p.id === parseInt(projectId))

  if (!projectInfo) {
    return (
      <div className="page-wrapper fs-page">
        <div className="fs-nav">
          <NavPill activePage="My Projects" onNavigate={onNavigate} />
        </div>
        <div className="fs-content">
          <div className="fs-inner">
            <h2>Project not found</h2>
          </div>
        </div>
      </div>
    )
  }

  const projData = projectsData[projectInfo.dataKey]

  return (
    <div className="page-wrapper fs-page">
      <div className="fs-nav">
        <NavPill activePage="My Projects" onNavigate={onNavigate} />
      </div>
      <div className="fs-content project-gallery-content">
        <div className="fs-inner">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            &larr; Back to Projects
          </button>
          <h1 className="fs-heading" style={{ marginBottom: '24px' }}>{projectInfo.label}</h1>

          {/* Embedded PDFs */}
          {projectInfo.pdfs && projectInfo.pdfs.length > 0 && (
            <div className="gallery-section">
              {projectInfo.pdfs.map((pdf, idx) => (
                <div key={`pdf-${idx}`} className="pdf-embed-wrap">
                  <div className="pdf-embed-label">{pdf.name}</div>
                  <iframe
                    src={pdf.url}
                    className="pdf-embed-frame"
                    title={pdf.name}
                  />
                </div>
              ))}
            </div>
          )}
        
          {projData && projData.files && projData.files.length > 0 && (
            <div className="gallery-section">
              <div className="gallery-grid">
                {projData.files.map((file, idx) => {
                  const isVideo = isVideoFile(file)
                  const media = getMedia(file)
                  return (
                    <div
                      key={`root-${idx}`}
                      className="gallery-card"
                      onClick={() => openLightbox(media, isVideo)}
                    >
                      {isVideo ? (
                        <div className='gallery-card is-video'>
                          <video src={media} alt={projectInfo.label} loading="lazy" />
                        </div>
                      ) : (
                        <img src={media} alt={projectInfo.label} loading="lazy" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Display subfolders */}
          {projData && projData.subfolders && Object.entries(projData.subfolders).map(([subFolder, subData]) => (
            <div key={subFolder} className="gallery-section">
              <div className="gallery-subheading">{subFolder}</div>
              <div className="gallery-grid">
                {subData.files.map((file, idx) => {
                  const isVideo = isVideoFile(file)
                  const media = getMedia(file)
                  return (
                    <div
                      key={`sub-${subFolder}-${idx}`}
                      className="gallery-card"
                      onClick={() => openLightbox(media, isVideo)}
                    >
                      {isVideo ? (
                        <video src={media} alt={subFolder} loading="lazy" />
                      ) : (
                        <img src={media} alt={subFolder} loading="lazy" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* No Content placeholder */}
          {(!projData || (projData.files.length === 0 && Object.keys(projData.subfolders || {}).length === 0)) && (
             <div className="no-content"></div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={projectInfo.label} onClose={closeLightbox} isVideo={lightboxIsVideo} />
      )}
    </div>
  )
}
