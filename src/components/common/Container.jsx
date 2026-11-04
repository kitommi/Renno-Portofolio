import { cn } from '../../lib/cn'

// Pembatas lebar konten + gutter responsif.
export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-page px-gutter', className)} {...props}>
      {children}
    </Tag>
  )
}
