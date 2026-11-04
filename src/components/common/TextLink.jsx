import { cn } from '../../lib/cn'

// Link teks inline dengan garis bawah halus.
export default function TextLink({ href, className, children, ...props }) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className={cn(
        'underline decoration-line underline-offset-4 transition-colors duration-300 hover:decoration-fg motion-reduce:transition-none',
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
