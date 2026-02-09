'use client'

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    type: 'AI / Full-Stack',
    title: 'LepisAI',
    description: 'Full-stack agentic application conducting virtual clinical trials using AI agents to validate medical research hypotheses. Reduced 12-month process to 30-mins.',
    link: 'https://github.com/arses-ui/LepisAI',
  },
  {
    type: 'AI / CLI',
    title: 'Sodacan - Data Transformation CLI',
    description: 'Terminal-first workbench using Gemini API for 10x faster data ingestion.',
    link: 'https://github.com/arses-ui/Sodacan',
  },
  {
    type: 'Computer Vision',
    title: 'Biological Segmentation',
    description: 'Barnacle detection using YOLO, OpenCV, and traditional CV algorithms.',
    link: 'https://github.com/arses-ui/Barnacles',
  },
  {
    type: 'Deep Learning',
    title: 'VioLens - Violence Detection',
    description: 'Multi-step AI pipeline trained on 1000+ videos for public safety.',
    link: 'https://github.com/arses-ui/Violens',
  },
  {
    type: 'ML / Finance',
    title: 'TaraTeer - Stock Prediction',
    description: 'Real-time LSTM prediction platform with RAG and live data ingestion.',
    link: '#',
  },
  {
    type: 'NLP',
    title: 'Sentiment Analysis Suite',
    description: '6 models for classification on 26K+ Amazon reviews.',
    link: 'https://github.com/arses-ui/ML_Project',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-2 px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-4">Selected Work</h2>

        {/* 3-Column Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => {
            const isDisabled = project.link === '#'
            return isDisabled ? (
              <div
                key={index}
                className="bento-card group cursor-default hover:-translate-y-1 transition-transform"
              >
              {/* Type Label */}
              <div className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">
                {project.type}
              </div>

              {/* Title with Arrow */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="text-sm font-serif font-semibold text-text-primary leading-snug
                             group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted flex-shrink-0
                                        group-hover:text-accent group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            ) : (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card group cursor-pointer hover:-translate-y-1 transition-transform"
              >
                {/* Type Label */}
                <div className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">
                  {project.type}
                </div>

                {/* Title with Arrow */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-serif font-semibold text-text-primary leading-snug
                               group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted flex-shrink-0
                                          group-hover:text-accent group-hover:translate-x-0.5
                                          group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
