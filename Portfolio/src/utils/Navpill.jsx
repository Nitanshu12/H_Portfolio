export function NavPill({ activePage, onNavigate, variant = 'dark' }) {
  const pages = ['Welcome', 'About Me', 'My Projects', 'Contact']
  return (
    <nav
      className={`nav-pill${variant === 'glass' ? ' nav-pill--glass' : ''}`}
      aria-label="Main navigation"
    >
      {pages.map((page) => (
        <button
          key={page}
          className={`nav-btn${activePage === page ? ' active' : ''}`}
          onClick={() => onNavigate(page)}
          aria-current={activePage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
