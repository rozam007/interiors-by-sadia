import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Story() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section id="story" ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '90vh', display: 'flex', alignItems: 'center',
    }}>
      {/* Parallax BG */}
      <motion.div
        style={{
          y: bgY,
          position: 'absolute', inset: '-20%',
          backgroundImage: `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.2) saturate(0.5)',
        }}
      />

      {/* Gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.8) 100%)',
      }} />

      {/* Gold vertical accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', left: '60px', top: '10%', bottom: '10%',
          width: '1px', background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
          transformOrigin: 'top',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, padding: '120px 60px 120px 120px', maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}
          >
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'Jost', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Our Story
            </span>
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
            <motion.h2
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 300,
                color: '#fff', lineHeight: 1.05,
              }}
            >
              A Short Story<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>About Us</em>
            </motion.h2>
          </div>

          {['In a world that never slows down, we see the home as a sanctuary of serenity and style.',
            'Driven by the timeless link between space and well-being, we design and curate interiors that turn chaos into calm — bringing thoughtful, beautiful tranquility to every household, one space at a time.'
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.15 }}
              style={{
                fontFamily: 'Jost', fontSize: '1.05rem', fontWeight: 300,
                lineHeight: 2, color: 'rgba(255,255,255,0.5)',
                marginBottom: '20px',
              }}
            >{text}</motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginTop: '48px', display: 'flex', gap: '24px', alignItems: 'center' }}
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '16px 44px', background: 'var(--gold)',
                color: '#000', border: 'none', cursor: 'none',
                fontFamily: 'Jost', fontSize: '0.72rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                fontWeight: 500, transition: 'all 0.4s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Start Your Project
            </button>
            <a href="https://www.instagram.com/interiorsbysadia/" target="_blank" rel="noreferrer"
              style={{ fontFamily: 'Jost', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >
              Follow Us →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #story > div:last-child { padding: 80px 24px !important; }
          #story > div[style*="left: 60px"] { display: none; }
        }
      `}</style>
    </section>
  )
}
