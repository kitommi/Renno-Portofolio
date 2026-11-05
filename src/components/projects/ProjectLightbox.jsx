import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import FallbackImage from '../common/FallbackImage'
import ImagePlaceholder from '../common/ImagePlaceholder'

// Tampilan screenshot besar memakai <dialog> bawaan browser:
// fokus terkunci di dalam, Escape menutup, klik latar menutup.
export default function ProjectLightbox({ open, onClose, title, subtitle, image }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label={`Screenshot ${title}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
      className="m-auto w-[min(94vw,1280px)] max-w-none overflow-visible border-0 bg-transparent p-0 text-fg backdrop:bg-bg/90 backdrop:backdrop-blur-sm open:animate-pop motion-reduce:open:animate-none"
    >
      <div className="overflow-hidden rounded-xl bg-bg-2">
        <div className="aspect-[2/1]">
          <FallbackImage
            src={image}
            alt={`Screenshot ${title}`}
            className="size-full object-cover object-top"
            fallback={<ImagePlaceholder mark={title[0]} label="Screenshot segera hadir" />}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-small text-fg-2">
          <span className="text-fg">{title}</span>
          {subtitle ? ` · ${subtitle}` : ''}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-small transition-colors duration-300 hover:border-fg-3 hover:bg-surface"
        >
          <X size={16} aria-hidden="true" />
          Tutup
        </button>
      </div>
    </dialog>
  )
}
