import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Mengisi URL situs di meta tag (canonical, og:image, dll.).
// Sumber: VITE_SITE_URL, atau URL produksi yang disediakan Vercel saat build.
// Jika keduanya tidak ada, tag yang membutuhkan URL absolut dihapus.
function siteUrl() {
  const raw =
    process.env.VITE_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : '')
  const url = raw.replace(/\/$/, '')

  return {
    name: 'site-url',
    transformIndexHtml(html) {
      let out = html.replaceAll('__SITE_URL__', url)
      if (!url) out = out.replace(/^.*data-needs-url.*\n/gm, '')
      return out.replaceAll(' data-needs-url', '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrl()],
})
