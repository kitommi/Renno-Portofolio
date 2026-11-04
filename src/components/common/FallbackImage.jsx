import { useState } from 'react'

// <img> dengan tampilan pengganti jika file gambar belum ada / gagal dimuat.
export default function FallbackImage({ src, alt, fallback, className, ...props }) {
  const [failed, setFailed] = useState(false)

  if (failed) return fallback

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
