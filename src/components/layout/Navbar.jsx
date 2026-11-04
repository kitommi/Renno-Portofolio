import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { navIds, navLinks, site } from '../../lib/site'
import useActiveSection from '../../hooks/useActiveSection'
import useScrolled from '../../hooks/useScrolled'
import Container from '../common/Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(navIds)
  const reduceMotion = useReducedMotion()

  // Tutup menu mobile dengan tombol Escape.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 motion-reduce:transition-none',
        solid ? 'border-line bg-bg/90 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-small font-semibold tracking-tight">
          {site.brand}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative block py-1.5 text-small transition-colors duration-300 motion-reduce:transition-none',
                      isActive ? 'text-fg' : 'text-fg-2 hover:text-fg',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-fg"
                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container as="nav" aria-label="Mobile" className="py-4">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={active === link.id ? 'location' : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block py-3 font-display text-heading',
                        active === link.id ? 'text-fg' : 'text-fg-2',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
