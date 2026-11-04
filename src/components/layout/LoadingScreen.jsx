import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const READY_MS = 1500 // lama "Are you ready?" tampil
const GO_MS = 1000 // lama "GO!" tampil

// Urutan: "Are you ready?" -> "GO!" -> tirai terangkat.
// Selesai hanya jika animasi minimum sudah berjalan DAN halaman siap (maks. 3 detik dari useAppReady).
// Ada tombol Skip untuk pengunjung yang tidak mau menunggu.
export default function LoadingScreen({ ready, onDone }) {
  const reduceMotion = useReducedMotion()
  const [stage, setStage] = useState('ready')
  const [minimumDone, setMinimumDone] = useState(false)

  useEffect(() => {
    const goTimer = setTimeout(() => setStage('go'), reduceMotion ? 700 : READY_MS)
    const minTimer = setTimeout(() => setMinimumDone(true), reduceMotion ? 1400 : READY_MS + GO_MS)
    return () => {
      clearTimeout(goTimer)
      clearTimeout(minTimer)
    }
  }, [reduceMotion])

  useEffect(() => {
    if (ready && minimumDone) onDone()
  }, [ready, minimumDone, onDone])

  function skip() {
    setStage('go')
    setMinimumDone(true)
  }

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ y: 0, opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6"
    >
      <div className="flex h-[clamp(7rem,26vw,16rem)] items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === 'ready' ? (
            <motion.p
              key="ready"
              className="text-center font-display text-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' }}
            >
              Are you ready?
            </motion.p>
          ) : (
            <motion.p
              key="go"
              className="font-display text-countdown"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            >
              GO!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <span aria-hidden="true" className="mt-10 block h-px w-40 overflow-hidden bg-line">
        <motion.span
          className="block h-full origin-left bg-fg"
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0 : (READY_MS + GO_MS) / 1000, ease: 'linear' }}
        />
      </span>

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 rounded-full px-5 py-3 text-caption text-fg-2 transition-colors hover:text-fg"
      >
        Skip
      </button>
    </motion.div>
  )
}
