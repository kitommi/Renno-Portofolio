import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Teks bergantian. Pembaca layar membaca seluruh daftar sekali;
// pengguna reduced-motion hanya melihat item pertama (tanpa animasi).
export default function RotatingText({ items, interval = 2600 }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion || items.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(timer)
  }, [reduceMotion, items.length, interval])

  return (
    <span className="relative block h-[1.55em] overflow-hidden">
      <span className="sr-only">{items.join(', ')}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          aria-hidden="true"
          className="block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
