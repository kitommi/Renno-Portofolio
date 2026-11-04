import { motion } from 'framer-motion'
import { Github, CheckCircle2 } from 'lucide-react'
import { site } from './lib/site'

// Halaman sementara untuk memverifikasi pondasi proyek (Fase 01).
// Akan diganti dengan section asli di Fase 03.
const checks = [
  'React + Vite berjalan',
  'Tailwind CSS aktif',
  'Framer Motion aktif',
  'Lucide React aktif',
]

export default function App() {
  return (
    <main className="flex min-h-dvh flex-col justify-between px-6 py-8 sm:px-12 sm:py-12">
      <header className="flex items-center justify-between text-xs tracking-widest text-fg-2">
        <span className="font-semibold text-fg">{site.brand}</span>
        <span>{site.status}</span>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-20"
      >
        <p className="mb-6 text-xs tracking-widest text-fg-3">{site.role}</p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Fresh skills,
          <br />
          <span className="text-fg-2">solid effort.</span>
        </h1>

        <ul className="mt-12 space-y-2 text-sm text-fg-2">
          {checks.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      <footer className="flex items-center justify-between border-t border-line pt-6 text-xs text-fg-3">
        <span>{site.name}</span>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-fg"
        >
          <Github size={14} aria-hidden="true" />
          github.com/{site.githubUsername}
        </a>
      </footer>
    </main>
  )
}
