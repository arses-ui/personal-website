'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
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
            <span className="">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base text-black leading-relaxed">
            I'm a Computer Science and Mathematics student with a strong interest in understanding the fundamental
  principles behind modern AI and machine learning systems. My focus lies in exploring the mathematical
  and architectural foundations that drive contemporary ML and deep learning models.
            </p>
            <p className="text-base text-black leading-relaxed">
              My interests include studying model architectures, optimization methods, and learning
              dynamics, and in leveraging this theoretical understanding to improve existing systems through
              research-driven and practical applications. 
            </p>

            <p className="text-base text-black leading-relaxed">
              I am currently working on a project at the intersection of photonics and Machine learning. Stay tuned for more updates :)

            </p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-8 py-3 bg-transparent border-2 border-black text-black 
                         rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 
                         hover-glow"
            >
              View Resume (PDF)
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black 
                          hover:border-black transition-all duration-300 hover-glow">
              <Image
                src="/me.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}