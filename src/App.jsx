import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import useAppReady from './hooks/useAppReady'
import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/animations/BackToTop'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Journal from './components/sections/Journal'
import Contact from './components/sections/Contact'

export default function App() {
  const ready = useAppReady()

  // Kunci scroll selama loading screen tampil.
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [ready])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <AnimatePresence>{!ready && <LoadingScreen key="loading" />}</AnimatePresence>

      <Navbar />
      <main id="main">
        <Hero ready={ready} />
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
