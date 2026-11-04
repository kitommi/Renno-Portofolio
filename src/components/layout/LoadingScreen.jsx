import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../lib/site'

// Saat siap, layar terangkat ke atas seperti tirai (fade untuk reduced-motion).
export default function LoadingScreen() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ y: 0, opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-bg"
    >
      <motion.span
        className="font-display text-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {site.brand}
      </motion.span>
      <span aria-hidden="true" className="block h-px w-32 overflow-hidden bg-line">
        <span className="block h-full w-1/2 bg-fg motion-safe:animate-loader" />
      </span>
      <span className="sr-only">Loading</span>
    </motion.div>
  )
}
