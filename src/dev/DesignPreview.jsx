import { ArrowUpRight, Mail } from 'lucide-react'
import Container from '../components/common/Container'
import Section from '../components/common/Section'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import TextLink from '../components/common/TextLink'
import { site } from '../lib/site'

// Halaman pratinjau design system (Fase 02).
// Hanya untuk pengembangan — akan dihapus saat section asli dibuat di Fase 03.

const colors = [
  { name: 'bg', hex: '#080808', swatch: 'bg-bg' },
  { name: 'bg-2', hex: '#101010', swatch: 'bg-bg-2' },
  { name: 'surface', hex: '#171717', swatch: 'bg-surface' },
  { name: 'line', hex: '#292929', swatch: 'bg-line' },
  { name: 'fg-3', hex: '#686868', swatch: 'bg-fg-3' },
  { name: 'fg-2', hex: '#929292', swatch: 'bg-fg-2' },
  { name: 'fg', hex: '#F5F5F5', swatch: 'bg-fg' },
  { name: 'highlight', hex: '#FFFFFF', swatch: 'bg-highlight' },
]

const typeScale = [
  {
    name: 'display',
    spec: 'Instrument Serif, fluid 52–144px',
    className: 'font-display text-display',
    sample: 'Fresh skills',
  },
  {
    name: 'heading',
    spec: 'Instrument Serif, fluid 36–72px',
    className: 'font-display text-heading',
    sample: 'Selected work',
  },
  {
    name: 'title',
    spec: 'Geist Medium, fluid 22–30px',
    className: 'text-title font-medium',
    sample: 'A project title sits here',
  },
  {
    name: 'lead',
    spec: 'Geist, fluid 18–21px',
    className: 'text-lead text-fg-2',
    sample: 'Lead text introduces a section in one or two calm sentences.',
  },
  {
    name: 'body',
    spec: 'Geist, 16px / 1.7',
    className: 'text-body',
    sample: 'Body text is for descriptions and paragraphs. Lines stay under about 70 characters.',
  },
  {
    name: 'small',
    spec: 'Geist, 14px',
    className: 'text-small text-fg-2',
    sample: 'Small text is for secondary information.',
  },
  {
    name: 'caption',
    spec: 'Geist, 13px',
    className: 'text-caption text-fg-2',
    sample: 'Caption text is for labels and metadata.',
  },
]

export default function DesignPreview() {
  return (
    <main>
      <Container as="header" className="flex items-center justify-between gap-4 py-8">
        <span className="text-small font-semibold tracking-tight">{site.brand}</span>
        <Badge dot>{site.status}</Badge>
      </Container>

      <Section aria-labelledby="preview-title" className="pt-12 sm:pt-20">
        <h1 id="preview-title" className="font-display text-display">
          {site.tagline}
        </h1>
        <p className="mt-8 max-w-xl text-lead text-fg-2">
          Design system preview, Phase 02. Everything below is built from shared tokens and
          reusable components.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#cards" size="lg">
            Explore My Work
          </Button>
          <Button href="#buttons" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>

      <Section id="colors" aria-labelledby="colors-title">
        <SectionHeading
          id="colors-title"
          title="Color"
          description="A restrained grayscale palette. Contrast, not hue, carries the hierarchy."
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {colors.map((color) => (
            <li key={color.name}>
              <div className={`h-24 rounded-lg border border-line ${color.swatch}`} />
              <p className="mt-3 text-small font-medium">{color.name}</p>
              <p className="text-caption text-fg-2">{color.hex}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="typography" aria-labelledby="type-title">
        <SectionHeading
          id="type-title"
          title="Typography"
          description="One expressive serif for headlines, one clean sans for everything else."
        />
        <div>
          {typeScale.map((item) => (
            <div
              key={item.name}
              className="grid gap-3 border-t border-line py-6 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-3">
                <p className="text-small font-medium">{item.name}</p>
                <p className="text-caption text-fg-2">{item.spec}</p>
              </div>
              <p className={`md:col-span-9 ${item.className}`}>{item.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="buttons" aria-labelledby="buttons-title">
        <SectionHeading
          id="buttons-title"
          title="Buttons"
          description="Three variants, two sizes. Links and buttons share the same styles."
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button href="#colors">
            <Mail size={16} aria-hidden="true" />
            Primary
          </Button>
          <Button href="#colors" variant="secondary">
            Secondary
          </Button>
          <Button href="#colors" variant="ghost">
            Ghost
          </Button>
          <Button href="https://github.com/kitommi" variant="secondary">
            GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
        </div>
        <p className="mt-8 text-small text-fg-2">
          Inline links look like this: <TextLink href="#colors">back to the palette</TextLink>.
        </p>
      </Section>

      <Section id="cards" aria-labelledby="cards-title">
        <SectionHeading
          id="cards-title"
          title="Cards & badges"
          description="No shadows. Depth comes from surface tone and thin borders."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <Badge>Base</Badge>
            <h3 className="mt-6 text-title font-medium">Quiet surface</h3>
            <p className="mt-3 text-small text-fg-2">
              The default card, used for most grouped content.
            </p>
          </Card>
          <Card variant="raised">
            <Badge tone="strong">Raised</Badge>
            <h3 className="mt-6 text-title font-medium">Elevated surface</h3>
            <p className="mt-3 text-small text-fg-2">
              A lighter surface for content that should stand forward.
            </p>
          </Card>
          <Card interactive>
            <Badge tone="solid">Interactive</Badge>
            <h3 className="mt-6 text-title font-medium">Hover me</h3>
            <p className="mt-3 text-small text-fg-2">
              The border brightens on hover. Motion is kept minimal.
            </p>
          </Card>
        </div>
      </Section>

      <Container as="footer" className="border-t border-line py-8 text-caption text-fg-2">
        {site.name}
      </Container>
    </main>
  )
}
