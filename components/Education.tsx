'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Bachelor of Arts in Computer Science and Mathematics',
    institution: 'Dartmouth College',
    period: '2024 - 2028',
    GPA: '4.0/4.0',
    details: 'Relevant coursework: Machine Learning and Statistics (Graduate level) , Data Structures, OOP, Computer Vision, Linear Algebra, Calculus, DFQs',
  },
]

const hobbies = [
  'Soccer',
  'Hiking',
  'Cooking',
  'Snowboarding',
  'Traveling',
  'Squash',
  'Reading Blogs'
]

export default function Education() {
  return (
    <section
      id="education"
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
            <span className="">Education & Hobbies</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-dark-surface/50 p-6 rounded-lg border-2 border-black 
                           hover:border-black transition-all duration-300 hover-glow"
                >
                  <h4 className="text-lg font-bold text-black mb-2">{edu.degree}</h4>
                  <p className="text-base text-black mb-2">{edu.institution}</p>
                  <p className="text-sm text-black mb-2">{edu.period}</p>
                  <p className="text-sm text-black">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Hobbies</h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 bg-dark-surface/50 rounded-lg border-2 border-black 
                           hover:border-black text-black hover:text-black 
                           transition-all duration-300 hover-glow cursor-default"
                >
                  {hobby}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

