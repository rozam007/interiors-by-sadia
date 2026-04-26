import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const slides = [
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG',
    tag: 'Living Spaces',
    headline: ['Create a home', 'that reflects', 'your family'],
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG',
    tag: 'Bedroom Design',
    headline: ['Serenity', 'crafted for', 'every soul'],
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current)
      setCurrent(c => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(t)
  }, [current])

  const slide = slides[current]

  return (
    <section id="home" ref={ref} style={{
      position: 'relative', height: '100vh', minHeight: '700px',
      overflow: 'hidden', display: 'flex', alignItems: 'center',
    }}>
      {/* BG slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${slide.img}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Gradient layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)',
      }} />

      {/* Vertical text */}
      <div style={{
        position: 'absolute', right: '48px', top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'center',
        fontFamily: 'Jost', fontSize: '0.6rem',
        letterSpacing: '0.4em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
      }}>
        Interior Design Studio · Lahore
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'absolute', right: '60px', bottom: '48px',
        fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem',
        color: 'rgba(255,255,255,0.4)',
      }}>
        <span style={{ color: 'var(--gold)', fontSize: '1.4rem' }}>0{current + 1}</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>0{slides.length}</span>
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity, position: 'relative', zIndex: 2, padding: '0 60px', maxWidth: '900px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={current}>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}
            >
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{
                fontFamily: 'Jost', fontSize: '0.68rem',
                letterSpacing: '0.35em', textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>{slide.tag}</span>
            </motion.div>

            {/* Headline */}
            <div style={{ overflow: 'hidden' }}>
              {slide.headline.map((line, i) => (
                <motion.h1
                  key={i}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-110%' }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    fontWeight: 300, lineHeight: 0.95,
                    color: i === 2 ? 'transparent' : '#fff',
                    WebkitTextStroke: i === 2 ? '1px rgba(255,255,255,0.4)' : 'none',
                    letterSpacing: '-0.02em', display: 'block',
                  }}
                >
                  {i === 1 ? <><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{line}</em></> : line}
                </motion.h1>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: 'flex', gap: '20px', marginTop: '48px', flexWrap: 'wrap' }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 44px', background: 'var(--gold)',
                  color: '#000', border: 'none', cursor: 'none',
                  fontFamily: 'Jost', fontSize: '0.72rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  fontWeight: 500, transition: 'all 0.4s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
              >
                Explore Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 44px', background: 'transparent',
                  color: '#fff', border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'none', fontFamily: 'Jost', fontSize: '0.72rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  transition: 'all 0.4s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Slide dots */}
      <div style={{
        position: 'absolute', bottom: '52px', left: '60px',
        display: 'flex', gap: '10px',
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setPrev(current); setCurrent(i) }}
            style={{
              width: i === current ? '32px' : '8px', height: '2px',
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'none', transition: 'all 0.4s',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: '48px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: '1px', height: '60px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #home > div[style*="padding: 0 60px"] { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
