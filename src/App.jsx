import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useAppReady from './hooks/useAppReady'
import { skillGroups } from './data/skills'
import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/animations/BackToTop'
import ScrollProgress from './components/animations/ScrollProgress'
import Marquee from './components/animations/Marquee'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Journal from './components/sections/Journal'
import Contact from './components/sections/Contact'

const marqueeItems = skillGroups.flatMap((group) => group.items)

export default function App() {
  const resourcesReady = useAppReady()
  const [introDone, setIntroDone] = useState(false)
  const finishIntro = useCallback(() => setIntroDone(true), [])

  // Kunci scroll selama animasi pembuka tampil.
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <AnimatePresence>
        {!introDone && <LoadingScreen key="loading" ready={resourcesReady} onDone={finishIntro} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero ready={introDone} />
        <Marquee items={marqueeItems} label="Technologies I work with" />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Journal />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
