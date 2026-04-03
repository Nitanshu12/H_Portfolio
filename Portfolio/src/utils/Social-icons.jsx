import { MailIcon, LinkedInIcon, BehanceIcon, InstagramIcon } from './Icons'

export function SocialIcons({ variant = 'light' }) {
  const cls = variant === 'dark' ? 'social-icon-dark' : 'social-icon-btn'
  return (
    <div className="social-icons">
      <a href="mailto:harshita@example.com" className={cls} aria-label="Email">
        <MailIcon />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={cls} aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="https://behance.net" target="_blank" rel="noreferrer" className={cls} aria-label="Behance">
        <BehanceIcon />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className={cls} aria-label="Instagram">
        <InstagramIcon />
      </a>
    </div>
  )
}