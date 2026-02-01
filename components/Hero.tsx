'use client'

import { useState } from 'react'
import { Copy, Check, MapPin, Sparkles, Github, Linkedin, Mail, FileText } from 'lucide-react'
import Image from 'next/image'

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const email = 'arses.prasai@dartmouth.edu'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-[75vh] flex items-center pt-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-start">
          {/* Left side - Main Content (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            {/* Large Name */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary tracking-tight">
                Arses Prasai
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mt-2 font-medium">
                ML Researcher & Engineer
              </p>
            </div>

            <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
              CS & Mathematics student at Dartmouth exploring the mathematical foundations
              of modern AI.
            </p>

            {/* Social Links + Email as Icon Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://github.com/arses-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card-white border border-neutral-200
                         rounded-xl text-sm font-medium text-text-primary
                         hover:border-accent/30 hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/arses-prasai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card-white border border-neutral-200
                         rounded-xl text-sm font-medium text-text-primary
                         hover:border-accent/30 hover:text-accent transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://x.com/arsespr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card-white border border-neutral-200
                         rounded-xl text-sm font-medium text-text-primary
                         hover:border-accent/30 hover:text-accent transition-all"
              >
                <XIcon className="w-4 h-4" />
                X
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white
                         rounded-xl text-sm font-medium hover:bg-accent-light transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Email'}
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-card-white border border-neutral-200
                         rounded-xl text-sm font-medium text-text-primary
                         hover:border-accent/30 hover:text-accent transition-all"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Current Focus Card */}
            <div className="bento-card">
              <div className="flex items-center gap-2 text-accent text-xs font-medium uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                Current Focus
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Exploring spectral bias and information encoding in diffusion models through
                cross-attention visualization at JIN Lab. Also researching ML approaches for post-Moore computing.
              </p>
            </div>
          </div>

          {/* Right side - Profile Card (2 cols) - Image focused */}
          <div className="lg:col-span-2">
            <div className="bento-card p-4">
              {/* Profile Image - Large, taking most of the card */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-100">
                <Image
                  src="/me.jpg"
                  alt="Arses Prasai"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Minimal info below image */}
              <div className="flex items-center justify-center gap-1.5 text-text-muted text-xs mt-3">
                <MapPin className="w-3 h-3" />
                <span>Hanover, NH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
