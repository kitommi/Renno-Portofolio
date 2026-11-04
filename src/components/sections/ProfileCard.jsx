import { site } from '../../lib/site'
import TiltCard from '../animations/TiltCard'
import FallbackImage from '../common/FallbackImage'
import ImagePlaceholder from '../common/ImagePlaceholder'

// Kartu 3D tanpa garis tepi, warnanya sama dengan latar website.
// Kedalaman dibuat dari lapisan: huruf besar di belakang, foto di tengah, label di depan.
const fadeBottom = 'linear-gradient(to bottom, #000 80%, transparent 100%)'

export default function ProfileCard() {
  return (
    <TiltCard className="mx-auto w-full max-w-sm lg:max-w-none">
      <div className="relative aspect-[4/5] rounded-xl bg-bg">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-watermark text-fg/[0.06] select-none"
          style={{ transform: 'translateZ(-60px)' }}
        >
          R
        </span>

        <div className="absolute inset-0" style={{ transform: 'translateZ(40px)' }}>
          <FallbackImage
            src="/images/profile.webp"
            alt={`Portrait of ${site.name}`}
            fetchPriority="high"
            loading="eager"
            className="size-full object-contain object-bottom"
            style={{
              maskImage: fadeBottom,
              WebkitMaskImage: fadeBottom,
              filter: 'drop-shadow(0 30px 40px rgb(0 0 0 / 0.55))',
            }}
            fallback={<ImagePlaceholder mark="R" label="Profile photo coming soon" />}
          />
        </div>

        <span
          className="absolute bottom-6 left-4 inline-flex items-center rounded-full bg-surface px-4 py-2 text-small sm:left-6"
          style={{ transform: 'translateZ(90px)' }}
        >
          {site.role}
        </span>
      </div>
    </TiltCard>
  )
}
