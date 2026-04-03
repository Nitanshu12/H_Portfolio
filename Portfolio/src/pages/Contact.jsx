import { useState } from 'react'
import { NavPill } from '../utils/Navpill'
import { SocialIcons } from '../utils/Social-icons'
import { MailIcon, LinkedInIcon, BehanceIcon, InstagramIcon } from '../utils/Icons'

export default function ContactPage({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="page-wrapper fs-page">
      {/* ── Top Nav ── */}
      <div className="fs-nav">
        <NavPill activePage="Contact" onNavigate={onNavigate} />
      </div>

      {/* ── Content ── */}
      <div className="fs-content">
        <div className="fs-inner contact-layout">

          {/* Left: info */}
          <div className="contact-info">
            <h1 className="fs-heading">Get In Touch</h1>

            <p className="fs-body-text">
              Have a project in mind, or just want to say hello? I&apos;d love
              to hear from you. Fill out the form or reach me through any of the
              channels below.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <MailIcon />
                <span>harshitapanwar@example.com</span>
              </div>
              <div className="contact-item">
                <LinkedInIcon />
                <span>linkedin.com/in/harshitapanwar</span>
              </div>
              <div className="contact-item">
                <BehanceIcon />
                <span>behance.net/harshitapanwar</span>
              </div>
              <div className="contact-item">
                <InstagramIcon />
                <span>@harshitapanwar</span>
              </div>
            </div>

            <SocialIcons variant="dark" />
          </div>

          {/* Right: form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && (
              <p className="form-success">
                ✓ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              aria-label="Your Message"
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}