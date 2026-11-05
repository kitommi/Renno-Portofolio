import { useState } from 'react'
import { Github, Maximize2 } from 'lucide-react'
import { cn } from '../../lib/cn'
import Card from '../common/Card'
import Badge from '../common/Badge'
import Button from '../common/Button'
import FallbackImage from '../common/FallbackImage'
import ImagePlaceholder from '../common/ImagePlaceholder'
import ProjectLightbox from './ProjectLightbox'

// Screenshot selalu di atas (rasio 2:1) dan bisa diklik untuk diperbesar.
// Hierarki: featured = judul besar + teks dua kolom; lainnya = satu kolom.
export default function ProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { layout, title, subtitle, description, tech, role, status, image, repo } = project
  const featured = layout === 'featured'
  const compact = layout === 'compact'

  const intro = (
    <>
      {status && (
        <div>
          <Badge tone={featured ? 'solid' : 'strong'}>{status}</Badge>
        </div>
      )}
      <div>
        <h3 className={featured ? 'font-display text-heading' : 'text-title font-medium'}>
          {title}
        </h3>
        {subtitle && <p className="mt-1 text-small text-fg-2">{subtitle}</p>}
      </div>
      <p className={compact ? 'text-small text-fg-2' : 'text-body text-fg-2'}>{description}</p>
    </>
  )

  const details = (
    <>
      {role && (
        <p className="text-small text-fg-2">
          <span className="text-fg">Peran:</span> {role}
        </p>
      )}
      {tech.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      )}
      {repo && (
        <div className="mt-auto">
          <Button href={repo} variant="secondary">
            <Github size={16} aria-hidden="true" />
            Lihat repository
          </Button>
        </div>
      )}
    </>
  )

  return (
    <>
      <Card
        as="article"
        padded={false}
        interactive
        spotlight
        className="group flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-[2/1] overflow-hidden border-b border-line">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Perbesar screenshot ${title}`}
            className="block size-full cursor-zoom-in"
          >
            <FallbackImage
              src={image}
              alt={`Screenshot ${title}`}
              className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              fallback={<ImagePlaceholder mark={title[0]} label="Screenshot segera hadir" />}
            />
          </button>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-bg/80 text-fg backdrop-blur-sm"
          >
            <Maximize2 size={16} />
          </span>
        </div>

        <div
          className={cn(
            'flex-1',
            compact ? 'p-5' : 'p-6 sm:p-8',
            featured
              ? 'grid gap-8 lg:grid-cols-12'
              : cn('flex flex-col', compact ? 'gap-4' : 'gap-5'),
          )}
        >
          {featured ? (
            <>
              <div className="flex flex-col gap-5 lg:col-span-7">{intro}</div>
              <div className="flex flex-col gap-5 lg:col-span-5 lg:justify-end">{details}</div>
            </>
          ) : (
            <>
              {intro}
              {details}
            </>
          )}
        </div>
      </Card>

      <ProjectLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
        subtitle={subtitle}
        image={image}
      />
    </>
  )
}
