import { cn } from '../../lib/cn'

const variants = {
  base: 'border border-line bg-bg-2',
  raised: 'border border-line bg-surface',
  outline: 'border border-line',
}

// Kartu tanpa bayangan: hierarki dibuat lewat warna permukaan dan garis tepi.
// `padded` = false berguna untuk kartu dengan gambar penuh (mis. screenshot proyek).
// `spotlight` = cahaya lembut mengikuti mouse di dalam kartu (hanya mouse, bukan sentuhan).
export default function Card({
  as: Tag = 'div',
  variant = 'base',
  interactive = false,
  spotlight = false,
  padded = true,
  className,
  children,
  onPointerMove,
  ...props
}) {
  function handleMove(event) {
    if (event.pointerType === 'mouse') {
      const rect = event.currentTarget.getBoundingClientRect()
      event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }
    onPointerMove?.(event)
  }

  return (
    <Tag
      className={cn(
        'rounded-xl',
        spotlight && 'group/spot relative',
        variants[variant],
        padded && 'p-6 sm:p-8',
        interactive &&
          'transition-colors duration-300 hover:border-fg-3 motion-reduce:transition-none',
        className,
      )}
      onPointerMove={spotlight ? handleMove : onPointerMove}
      {...props}
    >
      {children}
      {spotlight && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100 motion-reduce:hidden"
          style={{
            background:
              'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.07), transparent 65%)',
          }}
        />
      )}
    </Tag>
  )
}
