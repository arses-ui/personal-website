'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'JIN Lab',
    role: 'Undergraduate Researcher',
    period: 'Jun 2025 - Present',
    achievements: [
      'Examining cross-attention layers in diffusion models to visualize and quantify information encoding during image generation and conversion processes.',
    ],
  },
  {
    company: 'SENSE Lab',
    role: 'Undergraduate Researcher',
    period: 'Jan 2025 - Sept 2025',
    achievements: [
      'Optimize Aerosol Jet Printing for 3D on-chip inductors using Bayesian tuning of key parameters.',
      'Automate lab experiments using AI agents, AX, Power Automate, saving 100+ hours per experiment across the lab.'
    ],
  },
]

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative py-16 px-6 sm:px-8 lg:px-12 bg-dark-surface/30 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            <span className="">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l-4 border-black hover:border-black 
                         transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full glow-effect"></div>
              
              <div className="bg-dark-surface/50 p-6 md:p-8 rounded-lg border-2 border-black hover:bg-dark-surface/70 
                            transition-all duration-300 hover-glow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-black">{exp.company}</p>
                  </div>
                  <p className="text-sm md:text-base text-black mt-2 md:mt-0">{exp.period}</p>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm text-black">
                      <span className="text-black mr-3 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

