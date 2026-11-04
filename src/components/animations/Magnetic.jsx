import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Elemen sedikit "tertarik" ke arah kursor mouse. Tidak aktif untuk sentuhan dan reduced-motion.
export default function Magnetic({ children, strength = 0.25, className = 'inline-block' }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 })

  if (reduceMotion) return <div className={className}>{children}</div>

  function handleMove(event) {
    if (event.pointerType !== 'mouse') return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  )
}
