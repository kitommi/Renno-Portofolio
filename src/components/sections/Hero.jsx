import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { roles, site } from '../../lib/site'
import Container from '../common/Container'
import Badge from '../common/Badge'
import Button from '../common/Button'
import RotatingText from '../animations/RotatingText'
import Magnetic from '../animations/Magnetic'
import ProfileCard from './ProfileCard'

const ease = [0.16, 1, 0.3, 1]

// `ready` = animasi pembuka selesai. Urutan masuk: teks naik satu per satu, kartu foto menyusul.
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
  const card = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.94, y: 24 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1, ease, delay: 0.2 } },
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
              <Magnetic>
                <Button href="#contact" size="lg">
                  <Mail size={18} aria-hidden="true" />
                  Get in Touch
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#projects" variant="secondary" size="lg">
                  Explore My Work
                  <ArrowDown size={18} aria-hidden="true" />
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div variants={card} className="lg:col-span-5">
            <ProfileCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
