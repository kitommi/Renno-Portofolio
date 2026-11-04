import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

// Angka naik dari 0 saat terlihat. Pembaca layar langsung membaca nilai akhir.
export default function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
