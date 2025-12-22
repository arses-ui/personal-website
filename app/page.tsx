'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
    </main>
  )
}

