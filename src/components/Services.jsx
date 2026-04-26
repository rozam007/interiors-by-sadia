import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { num: '01', title: 'Space Planning', desc: 'Optimizing every square foot for flow, function, and beauty.' },
  { num: '02', title: 'Interior Design', desc: 'Full concept-to-completion design tailored to your lifestyle.' },
  { num: '03', title: 'Furniture Curation', desc: 'Sourcing and selecting pieces that define your space.' },
  { num: '04', title: 'Color Consultation', desc: 'Palette expertise that sets the perfect mood in every room.' },
  { num: '05', title: 'Renovation Oversight', desc: 'Managing contractors and timelines so you don\'t have to.' },
  { num: '06', title: 'Styling & Staging', desc: 'Final touches that make a house feel like a home.' },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section ref={ref} style={{
      background: 'var(--black)',
      padding: '140px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{ position: 'sticky', top: '120px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'Jost', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Services
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300,
              color: '#fff', lineHeight: 1.1, marginBottom: '24px',
            }}>
              What we <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>offer</em>
            </h2>
            <p style={{ fontFamily: 'Jost', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)' }}>
              Every project is unique. We bring the full spectrum of interior design expertise to your space.
            </p>
          </motion.div>

          {/* Right services list */}
          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '32px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', gap: '32px', alignItems: 'flex-start',
                  cursor: 'none', transition: 'padding-left 0.4s',
                  paddingLeft: hovered === i ? '16px' : '0',
                }}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem',
                  color: hovered === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                  transition: 'color 0.3s', flexShrink: 0, marginTop: '4px',
                }}>{s.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400,
                    color: hovered === i ? '#fff' : 'rgba(255,255,255,0.7)',
                    marginBottom: '8px', transition: 'color 0.3s',
                  }}>{s.title}</h3>
                  <motion.p
                    animate={{ height: hovered === i ? 'auto' : 0, opacity: hovered === i ? 1 : 0 }}
                    style={{
                      fontFamily: 'Jost', fontSize: '0.9rem', fontWeight: 300,
                      color: 'var(--muted)', lineHeight: 1.8, overflow: 'hidden',
                    }}
                  >{s.desc}</motion.p>
                </div>
                <span style={{
                  color: hovered === i ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                  fontSize: '1.2rem', transition: 'all 0.3s',
                  transform: hovered === i ? 'translateX(8px)' : 'translateX(0)',
                  display: 'inline-block',
                }}>→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 2fr"] { grid-template-columns: 1fr !important; gap: 48px !important; }
          section > div > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
