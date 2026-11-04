import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

// Garis tipis di atas layar yang menunjukkan seberapa jauh halaman sudah di-scroll.
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? scrollYProgress : smooth, transformOrigin: '0 50%' }}
      className="fixed inset-x-0 top-0 z-[45] h-0.5 bg-fg"
    />
  )
}
