import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '150+', label: 'Projects Completed', desc: 'Across Lahore & beyond' },
  { value: '15', label: 'Years Experience', desc: 'Trusted since 2009' },
  { value: '100%', label: 'Client Satisfaction', desc: 'Every single time' },
  { value: 'A–Z', label: 'Full Service', desc: 'Concept to completion' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      background: 'var(--black)',
      padding: '0',
      position: 'relative',
    }}>
      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', transformOrigin: 'left' }}
      />

      <div style={{
        maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            style={{
              padding: '64px 40px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.4s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {/* Hover line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px', background: 'var(--gold)',
                transformOrigin: 'left',
              }}
            />

            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 300,
              color: 'var(--gold)', lineHeight: 1, marginBottom: '12px',
              background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>{s.value}</div>

            <div style={{
              fontFamily: 'Jost', fontSize: '0.75rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#fff', marginBottom: '8px',
            }}>{s.label}</div>

            <div style={{
              fontFamily: 'Jost', fontSize: '0.8rem',
              color: 'var(--muted)', fontWeight: 300,
            }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', transformOrigin: 'right' }}
      />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
