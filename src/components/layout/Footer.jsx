import { ArrowUp, Github } from 'lucide-react'
import { navLinks, site } from '../../lib/site'
import Container from '../common/Container'
import Button from '../common/Button'
import TextLink from '../common/TextLink'

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-heading">{site.brand}</p>
            <p className="mt-3 text-body text-fg-2">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-small">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <TextLink href={`#${link.id}`} className="no-underline hover:underline">
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
            <Button href={site.github} variant="secondary">
              <Github size={16} aria-hidden="true" />
              GitHub
            </Button>
            <Button href="#home" variant="ghost">
              Back to top
              <ArrowUp size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-caption text-fg-2">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
