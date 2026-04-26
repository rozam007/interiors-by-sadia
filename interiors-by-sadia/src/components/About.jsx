import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" ref={ref} style={{
      background: 'var(--deep)',
      padding: '140px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background number */}
      <div style={{
        position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(200px, 25vw, 320px)', fontWeight: 300,
        color: 'rgba(255,255,255,0.02)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>01</div>

      <div style={{
        maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '100px', alignItems: 'center',
      }}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute', top: '-24px', left: '-24px',
              right: '24px', bottom: '24px',
              border: '1px solid rgba(200,169,110,0.25)',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
            <motion.img
              style={{ y: imgY }}
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG"
              alt="Interior by Sadia"
              loading="lazy"
              width="600" height="750"
              style={{
                width: '100%', aspectRatio: '4/5',
                objectFit: 'cover', display: 'block',
              }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            style={{
              position: 'absolute', bottom: '-32px', right: '-32px', zIndex: 2,
              width: '120px', height: '120px',
              background: 'var(--gold)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: '#000', lineHeight: 1 }}>15</span>
            <span style={{ fontFamily: 'Jost', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#000', opacity: 0.7 }}>Years</span>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'Jost', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              About Us
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 300,
            lineHeight: 1.1, marginBottom: '32px', color: '#fff',
          }}>
            Design experts who make your home feel like <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>you</em>
          </h2>

          <p style={{
            fontFamily: 'Jost', fontSize: '1rem', fontWeight: 300,
            lineHeight: 2, color: 'rgba(255,255,255,0.5)', marginBottom: '24px',
          }}>
            In a world that never slows down, we see the home as a sanctuary of serenity and style. Driven by the timeless link between space and well-being, we design and curate interiors that turn chaos into calm.
          </p>

          <p style={{
            fontFamily: 'Jost', fontSize: '1rem', fontWeight: 300,
            lineHeight: 2, color: 'rgba(255,255,255,0.5)', marginBottom: '48px',
          }}>
            Bringing thoughtful, beautiful tranquility to every household — one space at a time.
          </p>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

          {/* Mini stats */}
          <div style={{ display: 'flex', gap: '48px', marginBottom: '48px' }}>
            {[['150+', 'Projects'], ['15', 'Years'], ['100%', 'Satisfaction']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Jost', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '6px' }}>{label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '15px 40px', background: 'transparent',
              border: '1px solid rgba(200,169,110,0.4)',
              color: 'var(--gold)', cursor: 'none',
              fontFamily: 'Jost', fontSize: '0.7rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              transition: 'all 0.4s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Work With Us
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div:last-child { grid-template-columns: 1fr !important; gap: 60px !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
