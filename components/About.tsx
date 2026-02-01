'use client'

import { Code2, Brain, Database, Cpu } from 'lucide-react'

const toolkit = [
  { name: 'Python', icon: Code2 },
  { name: 'PyTorch', icon: Brain },
  { name: 'TensorFlow', icon: Brain },
  { name: 'OpenCV', icon: Cpu },
  { name: 'LangGraph', icon: Database },
  { name: 'Scikit-learn', icon: Brain },
  { name: 'NumPy', icon: Code2 },
  { name: 'FastAPI', icon: Database },
]

const interests = [
  'Diffusion Models',
  'Model Interpretability',
  'Computer Vision',
  'Optimization Theory',
  'Neural Architecture',
  'Bayesian Methods',
]

export default function About() {
  return (
    <section id="about" className="-mt-16 pb-2 px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-4">About</h2>

        {/* Bento Grid - Compact */}
        <div className="grid md:grid-cols-3 gap-3">
          {/* Bio Card - Spans 2 cols */}
          <div className="md:col-span-2 bento-card">
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                I'm deeply interested in understanding the fundamental principles behind modern AI
                and machine learning systems. My focus lies in exploring the mathematical and
                architectural foundations that drive contemporary ML and deep learning models.
              </p>
              <p>
                From optimization dynamics to model interpretability, I enjoy diving into the
                "why" behind algorithms. Currently working on projects at the intersection of
                photonics and machine learning, investigating how physical systems can enhance computation.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="bento-card">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Research Interests</h3>
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 bg-accent/5 text-accent text-xs rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Toolkit Card - Full width */}
          <div className="md:col-span-3 bento-card">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Toolkit</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {toolkit.map((tool) => {
                const Icon = tool.icon
                return (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl
                             bg-warm-white hover:bg-accent/5 transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                    <span className="text-[10px] text-text-secondary group-hover:text-accent transition-colors">
                      {tool.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
