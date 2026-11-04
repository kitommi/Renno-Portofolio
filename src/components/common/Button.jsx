import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none transition duration-300 ease-out-expo active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-fg text-bg hover:bg-highlight',
  secondary: 'border border-line text-fg hover:border-fg-3 hover:bg-surface',
  ghost: 'text-fg-2 hover:text-fg',
}

const sizes = {
  md: 'h-11 px-5 text-small',
  lg: 'h-14 px-7 text-body',
}

// Jika `href` diberikan, dirender sebagai <a>; kalau tidak, sebagai <button>.
// Link eksternal (http/https) otomatis dibuka di tab baru dengan rel aman.
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
