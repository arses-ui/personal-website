'use client'

import { motion } from 'framer-motion'
// Icon components
const ExternalLink = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [
  {
    title: 'TaraTeer',
    description: 'TaraTeer: an end-to-end, real-time stock prediction platform for the Nepal Stock Exchange using an LSTM trained on  75k+ datapoints, RAG for contextual grounding, and a web-scraping API for live data ingestion.',
    tech: ['Python', 'React', 'Pytorch', 'RAG', 'Web Scraping'],
    github: 'https://github.com/example',
  },
  {
    title: 'Sodacan',
    description: 'An AI-powered, terminal-first workbench that makes data ingestion and transformation 10x faster for consultants and forward-deployed engineers.',
    tech: ['Gemini API', 'Python', 'Snowflake', 'Typer'],
    demo: 'https://www.youtube.com/watch?v=D7Xe7LfG400',
    github: 'https://github.com/arses-ui/Sodacan',
  },
  {
    title: 'Sentiment Analyzer',
    description: ' Trained 6 models for binary and multi-class classification on 26K+ Amazon reviews' ,
    tech: ['Python', 'Scikit-learn', 'pandas'],
    github: 'https://github.com/arses-ui/Barnacles',
  },
  {
    title: 'Barnacle Detector',
    description: 'Challenge project focuses on detecting and counting barnacles in images using different SOTA models and traditional CV algorithms',
    tech: ['Python', 'fiftyone', 'open-cv', 'streamlit', 'YOLO'],
    github: 'https://github.com/arses-ui/Barnacles',
  },
  {
    title: 'VioLens',
    description: 'Multistep AI pipeline trained on 1000+ videos to detect violence and bullying in public spaces ',
    tech: ['TensorFlow', 'OpenCV', 'NumPy', 'FastAPI', 'Uvicorn', 'OpenAI API'],
    github: 'https://github.com/arses-ui/Violens',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 px-6 sm:px-8 lg:px-12 scroll-mt-24"
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
            <span className="">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-surface/50 rounded-lg p-6 border-2 border-black 
                       hover:border-black transition-all duration-300 hover-glow group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-black 
                           transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-base text-black mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-black 
                             rounded-full border-2 border-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-black hover:text-black 
                           transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Demo</span>
                </motion.a>
                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-black hover:text-black 
                           transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

