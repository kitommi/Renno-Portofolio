import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '../../lib/cn'
import { site } from '../../lib/site'
import useGitHub from '../../hooks/useGitHub'
import Button from '../common/Button'
import TextLink from '../common/TextLink'
import Reveal from '../animations/Reveal'
import CountUp from '../animations/CountUp'

const dateFormat = new Intl.DateTimeFormat('id-ID', { month: 'short', year: 'numeric' })

const errorMessages = {
  'rate-limit': 'Batas permintaan GitHub sedang tercapai. Coba lagi beberapa saat lagi.',
  error: 'Data GitHub tidak bisa dimuat saat ini.',
}

function Skeleton({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded-md bg-surface motion-reduce:animate-none', className)}
    />
  )
}

function ProfileLink() {
  return (
    <Button href={site.github} variant="secondary">
      <Github size={16} aria-hidden="true" />
      Buka profil GitHub
    </Button>
  )
}

// Data diambil dari API publik GitHub. Tidak ada angka yang ditulis manual.
export default function GitHubPanel() {
  const github = useGitHub(site.githubUsername)
  const success = github.status === 'success'

  const repos = success
    ? site.githubRepos
        .map((name) => github.repos.find((repo) => repo.name === name))
        .filter(Boolean)
    : []

  return (
    <Reveal
      as="section"
      aria-labelledby="github-title"
      className="mt-16 grid gap-10 border-t border-line pt-8 md:grid-cols-12"
    >
      <div className="md:col-span-4">
        <h3 id="github-title" className="text-title font-medium">
          Di GitHub
        </h3>
        <p className="mt-1 text-small text-fg-2">
          <TextLink href={site.github}>@{site.githubUsername}</TextLink>
        </p>

        <div className="mt-8" aria-live="polite">
          <p lang="en" className="text-caption tracking-wide text-fg-2 uppercase">
            Public repositories
          </p>
          {github.status === 'loading' && <Skeleton className="mt-3 h-14 w-24" />}
          {success && (
            <p className="mt-2 font-display text-heading">
              <CountUp value={github.profile.publicRepos} />
            </p>
          )}
          {github.status === 'error' && (
            <p className="mt-2 text-small text-fg-2">Tidak tersedia</p>
          )}
        </div>
      </div>

      <div className="md:col-span-8">
        {github.status === 'loading' && (
          <div className="space-y-6" aria-busy="true">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        )}

        {github.status === 'error' && (
          <div className="space-y-5">
            <p className="text-body text-fg-2">{errorMessages[github.kind]}</p>
            <ProfileLink />
          </div>
        )}

        {success && repos.length > 0 && (
          <ul>
            {repos.map((repo) => (
              <li key={repo.name} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4"
                >
                  <span>
                    <span className="block text-title font-medium">{repo.name}</span>
                    {repo.description && (
                      <span className="mt-1 block text-small text-fg-2">{repo.description}</span>
                    )}
                    <span className="mt-3 block text-caption text-fg-2">
                      {[repo.language, `Diperbarui ${dateFormat.format(new Date(repo.pushedAt))}`]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-fg-2 transition-colors duration-300 group-hover:text-fg motion-reduce:transition-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        {success && repos.length === 0 && (
          <div className="space-y-5">
            <p className="text-body text-fg-2">Lihat semua repository publik saya di GitHub.</p>
            <ProfileLink />
          </div>
        )}
      </div>
    </Reveal>
  )
}
