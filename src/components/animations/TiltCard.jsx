import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

// Kartu 3D: miring mengikuti pointer. Anak-anaknya bisa memakai
// style={{ transform: 'translateZ(...)' }} untuk lapisan kedalaman.
// Reduced-motion: dirender datar tanpa efek.
export default function TiltCard({ children, className, max = 10 }) {
  const reduceMotion = useReducedMotion()
  const frame = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 150, damping: 16, mass: 0.4 }
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)

  if (reduceMotion) return <div className={className}>{children}</div>

  function handleMove(event) {
    const rect = frame.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width)
    py.set((event.clientY - rect.top) / rect.height)
  }

  function reset() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div
      ref={frame}
      className={className}
      style={{ perspective: 1100 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </div>
  )
}
