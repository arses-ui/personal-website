'use client'

import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    role: 'Undergraduate Researcher',
    company: 'JIN Lab',
    org: 'Dartmouth College',
    period: 'Jun 2025 — Present',
    description: 'Cross-attention visualization in diffusion models for image generation analysis.',
  },
  {
    role: 'Undergraduate Researcher',
    company: 'SENSE Lab',
    org: 'Dartmouth College',
    period: 'Jan — Sept 2025',
    description: 'Bayesian optimization for 3D on-chip inductors. AI agent automation saving 100+ hours/experiment.',
  },
]

const education = {
  degree: 'B.A. Computer Science & Mathematics',
  institution: 'Dartmouth College',
  period: '2024 — 2028',
  gpa: '4.0',
}

const coursework = [
  'Machine Learning (Grad)',
  'Computer Vision',
  'Data Structures',
  'Linear Algebra',
  'OOP',
  'DFQs',
]

export default function Experience() {
  return (
    <section id="experience" className="py-2 px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-4">Experience</h2>

        <div className="grid md:grid-cols-3 gap-3">
          {/* Experience Cards - 2 columns */}
          <div className="md:col-span-2 grid gap-3">
            {experiences.map((exp, index) => (
              <div key={index} className="bento-card">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-accent" />
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-text-secondary">{exp.company} · {exp.org}</p>
                      </div>
                      <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Card - 1 column */}
          <div className="bento-card space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">Education</h3>
            </div>

            <div>
              <p className="text-sm font-medium text-text-primary">{education.degree}</p>
              <p className="text-xs text-text-secondary">{education.institution}</p>
              <div className="flex items-center justify-between mt-1.5 text-xs">
                <span className="text-text-muted">{education.period}</span>
                <span className="flex items-center gap-1 text-accent font-medium">
                  <Award className="w-3 h-3" />
                  {education.gpa} GPA
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                Coursework
              </p>
              <div className="flex flex-wrap gap-1">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 bg-warm-white text-[10px] text-text-secondary rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
