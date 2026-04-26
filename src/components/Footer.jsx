import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/interiorsbysadia/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/61582520256833/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://pk.linkedin.com/in/sadia-waheed-677671300', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@Interiorsbysadia/shorts', label: 'YouTube' },
]

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Story', id: 'story' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(200,169,110,0.1)',
      padding: '80px 60px 40px',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Top */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: '60px', marginBottom: '80px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: '#fff', letterSpacing: '0.08em', lineHeight: 1 }}>
                INTERIORS
              </div>
              <div style={{ fontFamily: 'Jost', fontSize: '0.6rem', letterSpacing: '0.45em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '4px' }}>
                BY SADIA
              </div>
            </div>
            <p style={{ fontFamily: 'Jost', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '260px' }}>
              Turning spaces into sanctuaries. Lahore's trusted interior design studio since 2009.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {links.map(l => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} style={{
                    background: 'none', border: 'none', cursor: 'none',
                    fontFamily: 'Jost', fontSize: '0.88rem', fontWeight: 300,
                    color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em',
                    transition: 'color 0.3s', padding: 0,
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
              Get In Touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Phone', value: '+92-317-1177257', href: 'tel:+923171177257' },
                { label: 'Email', value: 'sadia197741@gmail.com', href: 'mailto:sadia197741@gmail.com' },
                { label: 'Location', value: 'Lahore, Pakistan' },
              ].map(item => (
                <div key={item.label}>
                  <span style={{ fontFamily: 'Jost', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: '2px' }}>{item.label}</span>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: 'Jost', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                    >{item.value}</a>
                    : <span style={{ fontFamily: 'Jost', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <p style={{ fontFamily: 'Jost', fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} Interiors by Sadia. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: '38px', height: '38px',
                  border: '1px solid rgba(200,169,110,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--gold)'
                  e.currentTarget.style.background = 'rgba(200,169,110,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          footer { padding: 60px 24px 32px !important; }
        }
      `}</style>
    </footer>
  )
}
