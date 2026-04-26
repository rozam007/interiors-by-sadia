import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1, title: 'The Serenity Suite', category: 'Bedroom', year: '2024',
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG',
    size: 'large',
  },
  {
    id: 2, title: 'Modern Living', category: 'Living Room', year: '2024',
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG',
    size: 'small',
  },
  {
    id: 3, title: 'Calm & Collected', category: 'Full Home', year: '2023',
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG',
    size: 'small',
  },
  {
    id: 4, title: 'Golden Hour', category: 'Dining', year: '2023',
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG',
    size: 'large',
  },
]

function ProjectCard({ p, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'none',
        gridColumn: p.size === 'large' ? 'span 2' : 'span 1',
        aspectRatio: p.size === 'large' ? '16/9' : '4/5',
      }}
    >
      <motion.img
        src={p.img} alt={p.title}
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        }}
      />

      {/* Always visible bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '32px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              {p.category}
            </p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 400, color: '#fff' }}>
              {p.title}
            </h3>
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '48px', height: '48px', border: '1px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)', fontSize: '1.2rem', flexShrink: 0,
            }}
          >
            →
          </motion.div>
        </div>
      </div>

      {/* Year tag */}
      <div style={{
        position: 'absolute', top: '20px', right: '20px',
        fontFamily: 'Jost', fontSize: '0.62rem',
        letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
      }}>
        {p.year}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{
      background: 'var(--surface)',
      padding: '140px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG number */}
      <div style={{
        position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(200px, 25vw, 320px)', fontWeight: 300,
        color: 'rgba(255,255,255,0.015)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>02</div>

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', flexWrap: 'wrap', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'Jost', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Our Work
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300,
              color: '#fff', lineHeight: 1.05,
            }}>
              What we're <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>proud of</em>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none', border: 'none', cursor: 'none',
              fontFamily: 'Jost', fontSize: '0.7rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'flex', alignItems: 'center', gap: '12px',
              borderBottom: '1px solid rgba(200,169,110,0.3)',
              paddingBottom: '4px',
            }}
          >
            View All <span>→</span>
          </motion.button>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
          #projects > div > div:last-child > div { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
          #projects { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
