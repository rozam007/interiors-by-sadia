export default function Marquee() {
  const items = ['Living Rooms', 'Bedrooms', 'Kitchens', 'Dining Spaces', 'Home Offices', 'Full Renovations', 'Luxury Interiors']

  return (
    <div style={{
      background: 'var(--gold)',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 20s linear infinite',
        width: 'max-content',
      }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.1rem', fontWeight: 400,
            color: '#000', whiteSpace: 'nowrap',
            padding: '0 40px',
            display: 'flex', alignItems: 'center', gap: '40px',
          }}>
            {item}
            <span style={{ fontSize: '0.5rem', opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
