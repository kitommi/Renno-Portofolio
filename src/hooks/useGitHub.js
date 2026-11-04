import { useEffect, useState } from 'react'

const API = 'https://api.github.com'
const CACHE_TTL = 10 * 60 * 1000 // 10 menit: hindari request berulang (batas API 60/jam tanpa token)

function readCache(key) {
  try {
    const raw = sessionStorage.getItem(key)
    if (!raw) return null
    const { time, data } = JSON.parse(raw)
    return Date.now() - time < CACHE_TTL ? data : null
  } catch {
    return null
  }
}

function writeCache(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ time: Date.now(), data }))
  } catch {
    // storage bisa saja tidak tersedia; abaikan
  }
}

async function getJson(url, signal) {
  const response = await fetch(url, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!response.ok) {
    const limited =
      (response.status === 403 || response.status === 429) &&
      response.headers.get('x-ratelimit-remaining') === '0'
    const error = new Error(`GitHub API ${response.status}`)
    error.kind = limited ? 'rate-limit' : 'error'
    throw error
  }
  return response.json()
}

// Mengambil profil publik dan daftar repo publik.
// status: 'loading' | 'success' | 'error'; kind (jika error): 'rate-limit' | 'error'
export default function useGitHub(username) {
  const key = `github:${username}`
  const [state, setState] = useState(() => {
    const cached = readCache(key)
    return cached ? { status: 'success', ...cached } : { status: 'loading' }
  })

  useEffect(() => {
    if (readCache(key)) return
    const controller = new AbortController()

    Promise.all([
      getJson(`${API}/users/${username}`, controller.signal),
      getJson(`${API}/users/${username}/repos?per_page=100&sort=pushed`, controller.signal),
    ])
      .then(([profile, repos]) => {
        const data = {
          profile: {
            login: profile.login,
            url: profile.html_url,
            publicRepos: profile.public_repos,
          },
          repos: repos.map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            language: repo.language,
            pushedAt: repo.pushed_at,
          })),
        }
        writeCache(key, data)
        setState({ status: 'success', ...data })
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setState({ status: 'error', kind: error.kind ?? 'error' })
      })

    return () => controller.abort()
  }, [key, username])

  return state
}
