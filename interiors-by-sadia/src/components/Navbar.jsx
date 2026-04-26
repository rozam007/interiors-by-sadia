import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Story', id: 'story' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setActive(id)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: scrolled ? '16px 60px' : '32px 60px',
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,169,110,0.1)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.35rem', fontWeight: 400, letterSpacing: '0.12em',
              color: '#fff', lineHeight: 1,
            }}>INTERIORS</span>
            <span style={{
              fontFamily: 'Jost, sans-serif', fontSize: '0.6rem',
              letterSpacing: '0.45em', color: 'var(--gold)',
              textTransform: 'uppercase', marginTop: '3px',
            }}>BY SADIA</span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <li key={l.id} style={{ position: 'relative' }}>
              <button
                onClick={() => scrollTo(l.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  fontFamily: 'Jost', fontSize: '0.7rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: active === l.id ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
                  transition: 'color 0.3s', padding: '4px 0',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = active === l.id ? 'var(--gold)' : 'rgba(255,255,255,0.55)'}
              >
                {l.label}
              </button>
              {active === l.id && (
                <motion.div layoutId="nav-indicator" style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '1px', background: 'var(--gold)',
                }} />
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+923171177257" className="nav-desktop" style={{
          padding: '11px 28px',
          border: '1px solid rgba(200,169,110,0.5)',
          color: 'var(--gold)', textDecoration: 'none',
          fontFamily: 'Jost', fontSize: '0.68rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          transition: 'all 0.4s', position: 'relative', overflow: 'hidden',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = '#000'
            e.currentTarget.style.borderColor = 'var(--gold)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--gold)'
            e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'
          }}
        >
          Book Consultation
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'none',
          flexDirection: 'column', gap: '5px', padding: '4px',
        }}>
          {[0, 1, 2].map(i => (
            <motion.span key={i} animate={{
              rotate: open ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
              y: open ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
              opacity: open && i === 1 ? 0 : 1,
            }} style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--gold)', transformOrigin: 'center',
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 490,
              background: 'var(--black)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '40px',
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem', fontWeight: 300, color: '#fff',
                  letterSpacing: '0.05em',
                }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          nav { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  )
}
