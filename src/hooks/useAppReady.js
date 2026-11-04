import { useEffect, useState } from 'react'

// Siap ketika halaman dan font selesai dimuat, atau setelah batas waktu
// (supaya loading screen tidak pernah menahan pengunjung terlalu lama).
export default function useAppReady(maxWait = 3000) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true
    const finish = () => {
      if (active) setReady(true)
    }
    const timer = setTimeout(finish, maxWait)

    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    const pageLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))

    Promise.all([fontsReady, pageLoaded]).then(finish, finish)

    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [maxWait])

  return ready
}
