import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Dining", "Full Home"]

const items = [
  { id: 1, title: "The Serenity Suite", category: "Bedroom", year: "2024", aspect: "3/4", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG" },
  { id: 2, title: "Modern Living", category: "Living Room", year: "2024", aspect: "4/3", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG" },
  { id: 3, title: "Calm and Collected", category: "Full Home", year: "2023", aspect: "1/1", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG" },
  { id: 4, title: "Golden Hour Dining", category: "Dining", year: "2023", aspect: "1/1", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG" },
  { id: 5, title: "Chefs Kitchen", category: "Kitchen", year: "2024", aspect: "4/3", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG" },
  { id: 6, title: "Velvet Dreams", category: "Bedroom", year: "2023", aspect: "3/4", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG" },
  { id: 7, title: "Open Plan Living", category: "Living Room", year: "2022", aspect: "3/4", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG" },
  { id: 8, title: "The Family Home", category: "Full Home", year: "2022", aspect: "1/1", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05719-NGIZS0bRasOK7vid.JPG" },
  { id: 9, title: "Marble and Oak", category: "Kitchen", year: "2022", aspect: "1/1", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/Uxo9gUqG7rW4IVpn/sha05703-W3Knqtv8HW0qegFr.JPG" },
]

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [onPrev, onNext, onClose])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 900, background: "rgba(0,0,0,0.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
      <button onClick={onClose} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "1px solid rgba(200,169,110,0.3)", color: "var(--gold)", cursor: "none", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", zIndex: 10 }} onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#000" }} onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)" }}><X size={18} /></button>
      <button onClick={e => { e.stopPropagation(); onPrev() }} style={{ position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(200,169,110,0.3)", color: "var(--gold)", cursor: "none", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", zIndex: 10 }} onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#000" }} onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)" }}><ChevronLeft size={22} /></button>
      <button onClick={e => { e.stopPropagation(); onNext() }} style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(200,169,110,0.3)", color: "var(--gold)", cursor: "none", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", zIndex: 10 }} onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#000" }} onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)" }}><ChevronRight size={22} /></button>
      <AnimatePresence mode="wait">
        <motion.div key={item.id} initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.4 }} onClick={e => e.stopPropagation()} style={{ maxWidth: "900px", width: "100%" }}>
          <img src={item.img} alt={item.title} style={{ width: "100%", maxHeight: "70vh", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,169,110,0.1)", borderTop: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "Jost", fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>{item.category} - {item.year}</p>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "#fff" }}>{item.title}</h3>
            </div>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.25)" }}>{index + 1} / {items.length}</span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", fontFamily: "Jost", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Arrow keys to navigate - ESC to close</div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [hovered, setHovered] = useState(null)
  const filtered = activeCategory === "All" ? items : items.filter(i => i.category === activeCategory)
  return (
    <section id="gallery" ref={ref} style={{ background: "var(--black)", padding: "140px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(200px, 25vw, 320px)", fontWeight: 300, color: "rgba(255,255,255,0.015)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>03</div>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "24px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontFamily: "Jost", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>Gallery</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#fff", lineHeight: 1.05 }}>Our <em style={{ color: "var(--gold)", fontStyle: "italic" }}>portfolio</em></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }} style={{ padding: "8px 20px", background: activeCategory === cat ? "var(--gold)" : "transparent", border: "1px solid " + (activeCategory === cat ? "var(--gold)" : "rgba(255,255,255,0.12)"), color: activeCategory === cat ? "#000" : "rgba(255,255,255,0.45)", fontFamily: "Jost", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", cursor: "none", transition: "all 0.3s" }} onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)"; e.currentTarget.style.color = "var(--gold)" } }} onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)" } }}>{cat}</button>
            ))}
          </motion.div>
        </div>
        <div style={{ columns: "3", columnGap: "16px" }}>
          {filtered.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.07 }} onMouseEnter={() => setHovered(item.id)} onMouseLeave={() => setHovered(null)} onClick={() => setLightboxIndex(i)} style={{ position: "relative", overflow: "hidden", cursor: "none", marginBottom: "16px", breakInside: "avoid", display: "block" }}>
              <motion.img src={item.img} alt={item.title} animate={{ scale: hovered === item.id ? 1.06 : 1 }} transition={{ duration: 0.7 }} style={{ width: "100%", display: "block", aspectRatio: item.aspect, objectFit: "cover" }} />
              <motion.div animate={{ opacity: hovered === item.id ? 1 : 0 }} transition={{ duration: 0.35 }} style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px" }}>
                <motion.div animate={{ opacity: hovered === item.id ? 1 : 0, scale: hovered === item.id ? 1 : 0.7 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: "16px", right: "16px", width: "40px", height: "40px", border: "1px solid rgba(200,169,110,0.6)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)" }}><ZoomIn size={16} /></motion.div>
                <p style={{ fontFamily: "Jost", fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "5px" }}>{item.category} - {item.year}</p>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 400, color: "#fff" }}>{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} style={{ textAlign: "center", marginTop: "48px", fontFamily: "Jost", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Showing {filtered.length} of {items.length} projects</motion.p>
      </div>
      <AnimatePresence>
        {lightboxIndex !== null && (<Lightbox items={filtered} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={() => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)} onNext={() => setLightboxIndex(i => (i + 1) % filtered.length)} />)}
      </AnimatePresence>
      <style>{"@media (max-width: 900px) { #gallery { padding: 80px 24px !important; } } @media (max-width: 540px) { #gallery > div > div { columns: 1 !important; } }"}</style>
    </section>
  )
}
