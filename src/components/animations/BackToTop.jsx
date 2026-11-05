import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import useScrolled from '../../hooks/useScrolled'

// Tombol melayang, muncul setelah pengunjung scroll cukup jauh.
export default function BackToTop() {
  const visible = useScrolled(700)
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Kembali ke atas"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.3 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
          }
          className="fixed right-5 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full border border-line bg-bg/90 text-fg backdrop-blur-md transition-colors duration-300 hover:border-fg-3 motion-reduce:transition-none sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
