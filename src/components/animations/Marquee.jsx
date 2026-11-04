import { cn } from '../../lib/cn'

// Pita teknologi yang berjalan terus. Berhenti saat di-hover.
// Untuk reduced-motion: daftar statis yang membungkus ke baris berikutnya.
// Salinan kedua disembunyikan dari pembaca layar.
export default function Marquee({ items, label }) {
  const group = (hidden) => (
    <ul
      aria-hidden={hidden || undefined}
      className={cn(
        'flex shrink-0 items-center gap-10 pr-10 motion-reduce:flex-wrap',
        hidden && 'motion-reduce:hidden',
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 font-display text-heading whitespace-nowrap"
        >
          {item}
          <span aria-hidden="true" className="size-2 rounded-full bg-line" />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      role="region"
      aria-label={label}
      className="group overflow-hidden border-y border-line py-8 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
