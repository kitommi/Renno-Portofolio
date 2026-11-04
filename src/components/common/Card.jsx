import { cn } from '../../lib/cn'

const variants = {
  base: 'border border-line bg-bg-2',
  raised: 'border border-line bg-surface',
  outline: 'border border-line',
}

// Kartu tanpa bayangan: hierarki dibuat lewat warna permukaan dan garis tepi.
// `padded` = false berguna untuk kartu dengan gambar penuh (mis. screenshot proyek).
export default function Card({
  as: Tag = 'div',
  variant = 'base',
  interactive = false,
  padded = true,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'rounded-xl',
        variants[variant],
        padded && 'p-6 sm:p-8',
        interactive &&
          'transition-colors duration-300 hover:border-fg-3 motion-reduce:transition-none',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
