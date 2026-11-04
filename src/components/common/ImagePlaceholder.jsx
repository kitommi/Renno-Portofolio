import { cn } from '../../lib/cn'

// Pengganti gambar yang belum tersedia. Bukan gambar palsu: jelas berlabel.
export default function ImagePlaceholder({ mark, label, className }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex size-full flex-col items-center justify-center gap-3 bg-bg-2 text-center',
        className,
      )}
    >
      <span aria-hidden="true" className="font-display text-heading text-fg-3">
        {mark}
      </span>
      <span className="text-caption text-fg-2">{label}</span>
    </div>
  )
}
