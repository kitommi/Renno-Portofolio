import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { roles, site } from '../../lib/site'
import Container from '../common/Container'
import Badge from '../common/Badge'
import Button from '../common/Button'
import FallbackImage from '../common/FallbackImage'
import ImagePlaceholder from '../common/ImagePlaceholder'
import RotatingText from '../animations/RotatingText'

const ease = [0.16, 1, 0.3, 1]

// `ready` = loading screen selesai. Urutan masuk: teks naik satu per satu, foto menyusul.
export default function Hero({ ready }) {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.4,
      },
    },
  }
  const rise = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
      }
  const photo = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.96 },
        show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease, delay: 0.2 } },
      }

  return (
    <section id="home" aria-labelledby="hero-title">
      <Container className="pt-32 pb-section lg:pt-40">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-12"
          variants={container}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
        >
          <div className="lg:col-span-7">
            <motion.div variants={rise}>
              <Badge dot>{site.status}</Badge>
            </motion.div>

            <motion.h1
              variants={rise}
              id="hero-title"
              className="mt-8 text-title font-medium text-fg-2"
            >
              {site.name}
            </motion.h1>
            <motion.p variants={rise} className="mt-4 font-display text-hero">
              {site.tagline}
            </motion.p>

            <motion.div variants={rise} className="mt-8 text-lead text-fg-2">
              <RotatingText items={roles} />
            </motion.div>

            <motion.p variants={rise} className="mt-6 max-w-lg text-body text-fg-2">
              I build web and mobile projects and learn something new with every one. Take a
              look at what I have made so far.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
              <Button href="#contact" size="lg">
                <Mail size={18} aria-hidden="true" />
                Get in Touch
              </Button>
              <Button href="#projects" variant="secondary" size="lg">
                Explore My Work
                <ArrowDown size={18} aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          <motion.div variants={photo} className="lg:col-span-5">
            <div className="group mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-line bg-bg-2 lg:max-w-none">
              <div className="aspect-[4/5]">
                <FallbackImage
                  src="/images/profile.jpg"
                  alt={`Portrait of ${site.name}`}
                  fetchPriority="high"
                  loading="eager"
                  className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  fallback={<ImagePlaceholder mark="R" label="Profile photo coming soon" />}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
