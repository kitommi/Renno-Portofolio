import { cn } from '../../lib/cn'

const tones = {
  neutral: 'border-line text-fg-2',
  strong: 'border-fg-3 text-fg',
  solid: 'border-fg bg-fg text-bg',
}

// Label kecil untuk teknologi, status proyek, atau ketersediaan magang.
// `dot` menambahkan titik penanda di depan teks.
export default function Badge({ tone = 'neutral', dot = false, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-caption font-medium',
        tones[tone],
        className,
      )}
    >
      {dot && <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
