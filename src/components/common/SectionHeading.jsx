import { cn } from '../../lib/cn'

// Judul section gaya editorial: garis tipis di atas, judul besar di kiri,
// deskripsi singkat di kanan (desktop). Pada mobile ditumpuk.
export default function SectionHeading({ id, title, description, className }) {
  return (
    <header
      className={cn(
        'mb-12 grid gap-6 border-t border-line pt-8 md:grid-cols-12 md:gap-10',
        className,
      )}
    >
      <h2 id={id} className="font-display text-heading md:col-span-7">
        {title}
      </h2>
      {description && (
        <p className="text-lead text-fg-2 md:col-span-5 md:self-end">{description}</p>
      )}
    </header>
  )
}
