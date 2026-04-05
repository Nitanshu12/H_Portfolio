import { MailIcon, LinkedInIcon, BehanceIcon, InstagramIcon } from './Icons'

function SocialDecorDots() {
  return (
    <span className="social-decor-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

export function SocialIcons({ variant = 'light', decorDots = false }) {
  const cls = variant === 'dark' ? 'social-icon-dark' : 'social-icon-btn'
  const wrap = (node) =>
    decorDots ? (
      <span className="social-icon-slot">
        <SocialDecorDots />
        {node}
      </span>
    ) : (
      node
    )

  return (
    <div className={`social-icons${decorDots ? ' social-icons--decor' : ''}`}>
      {wrap(
        <a href="mailto:harshita@example.com" className={cls} aria-label="Email">
          <MailIcon />
        </a>
      )}
      {wrap(
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={cls} aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      )}
      {wrap(
        <a href="https://behance.net" target="_blank" rel="noreferrer" className={cls} aria-label="Behance">
          <BehanceIcon />
        </a>
      )}
      {wrap(
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={cls} aria-label="Instagram">
          <InstagramIcon />
        </a>
      )}
    </div>
  )
}