import { motion, useReducedMotion } from 'framer-motion'

// Muncul pelan saat masuk layar (sekali saja). Geraknya kecil dan pendek.
// Untuk pengguna reduced-motion: dirender biasa tanpa animasi.
export default function Reveal({ as = 'div', delay = 0, y = 20, className, children, ...props }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
