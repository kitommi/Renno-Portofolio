import { Github } from 'lucide-react'
import { cn } from '../../lib/cn'
import Card from '../common/Card'
import Badge from '../common/Badge'
import Button from '../common/Button'
import FallbackImage from '../common/FallbackImage'
import ImagePlaceholder from '../common/ImagePlaceholder'

// Screenshot selalu di atas (rasio 2:1, cocok dengan screenshot desktop).
// Hierarki: featured = judul besar + teks dua kolom; lainnya = satu kolom.
export default function ProjectCard({ project }) {
  const { layout, title, subtitle, description, tech, role, status, image, repo, repoPending } =
    project
  const featured = layout === 'featured'

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
      <p className="text-body text-fg-2">{description}</p>
    </>
  )

  const details = (
    <>
      <p className="text-small text-fg-2">
        <span className="text-fg">Role:</span> {role}
      </p>
      <ul className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <li key={item}>
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
      {repo && (
        <div>
          <Button href={repo} variant="secondary">
            <Github size={16} aria-hidden="true" />
            View repository
          </Button>
        </div>
      )}
      {!repo && repoPending && (
        <p className="text-caption text-fg-2">Repository link coming soon.</p>
      )}
    </>
  )

  return (
    <Card
      as="article"
      padded={false}
      interactive
      className="group flex h-full flex-col overflow-hidden"
    >
      <div className="aspect-[2/1] overflow-hidden border-b border-line">
        <FallbackImage
          src={image}
          alt={`Screenshot of ${title}`}
          className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          fallback={<ImagePlaceholder mark={title[0]} label="Screenshot coming soon" />}
        />
      </div>

      <div
        className={cn(
          'flex-1 p-6 sm:p-8',
          featured ? 'grid gap-8 lg:grid-cols-12' : 'flex flex-col gap-5',
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
  )
}
