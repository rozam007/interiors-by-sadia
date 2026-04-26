import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Studio', value: 'House 440, Street 12, 6 Phase\nRaya Society, Lahore 54920' },
  { icon: Clock, label: 'Hours', value: '10am – 8pm\nBy appointment only' },
  { icon: Phone, label: 'Phone', value: '+92-317-1177257', href: 'tel:+923171177257' },
  { icon: Mail, label: 'Email', value: 'sadia197741@gmail.com', href: 'mailto:sadia197741@gmail.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', lastName: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', lastName: '', email: '', message: '' })
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '16px 0',
    background: 'transparent', border: 'none',
    borderBottom: `1px solid ${focused === field ? 'var(--gold)' : 'rgba(255,255,255,0.1)'}`,
    color: '#fff', fontFamily: 'Jost', fontSize: '0.95rem',
    outline: 'none', transition: 'border-color 0.3s',
    letterSpacing: '0.05em',
  })

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--deep)',
      padding: '140px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG number */}
      <div style={{
        position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(200px, 25vw, 320px)', fontWeight: 300,
        color: 'rgba(255,255,255,0.015)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>04</div>

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'Jost', fontSize: '0.68rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Contact
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300,
            color: '#fff', lineHeight: 1.05,
          }}>
            Let's design your<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>dream space</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '100px', alignItems: 'start' }}>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex', gap: '20px', marginBottom: '40px',
                  paddingBottom: '40px',
                  borderBottom: i < info.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', border: '1px solid rgba(200,169,110,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', flexShrink: 0,
                }}>
                  <item.icon size={16} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                    {item.label}
                  </p>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: 'Jost', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', lineHeight: 1.7, display: 'block' }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                    >{item.value}</a>
                    : <p style={{ fontFamily: 'Jost', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.value}</p>
                  }
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {[['name', 'First Name'], ['lastName', 'Last Name']].map(([field, label]) => (
                  <div key={field}>
                    <label style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                      {label}
                    </label>
                    <input
                      required value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      style={inputStyle(field)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                  Email Address
                </label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('email')}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'Jost', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                  Tell Us About Your Project
                </label>
                <textarea
                  required rows={4} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle('message'), resize: 'none' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '18px 48px', alignSelf: 'flex-start',
                  background: sent ? 'rgba(74,124,89,0.8)' : 'var(--gold)',
                  color: sent ? '#fff' : '#000',
                  border: 'none', cursor: 'none',
                  fontFamily: 'Jost', fontSize: '0.72rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  fontWeight: 500, transition: 'background 0.4s, color 0.4s',
                }}
              >
                {sent ? '✓ Message Sent' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 60px !important; }
          #contact { padding: 80px 24px !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
