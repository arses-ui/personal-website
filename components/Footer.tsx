'use client'

import { useState } from 'react'
import { Copy, Check, Mail, Github, Linkedin, FileText } from 'lucide-react'

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/arses-ui', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/arses-prasai', icon: Linkedin },
  { name: 'X', href: 'https://x.com/arsespr', icon: XIcon },
  { name: 'Resume', href: '/resume.pdf', icon: FileText },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'arses.prasai.28@dartmouth.edu'
  const displayEmail = 'arses [dot] prasai [dot] 28 [at] dartmouth [dot] edu'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="py-2 px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="bento-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left side - CTA */}
            <div>
              <h2 className="text-lg font-serif font-semibold text-text-primary">
                Let's work together
              </h2>
              <p className="text-xs text-text-secondary mt-1">
                Interested in research collaborations or ML/AI projects.
              </p>
            </div>

            {/* Right side - Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Email */}
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-text-secondary" />
                <span className="text-text-primary">{displayEmail}</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-1.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-warm-white border border-neutral-200
                               flex items-center justify-center text-text-secondary
                               hover:text-accent hover:border-accent/30 transition-all"
                      aria-label={link.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] text-text-muted">
            <span>© {new Date().getFullYear()} Arses Prasai</span>
            <span>Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
