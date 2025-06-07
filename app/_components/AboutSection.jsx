'use client'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20 flex items-center justify-center">
      {/* Floating Blurs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gray-800 opacity-30 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl z-0"></div>

      {/* Animated Stars / Noise */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 z-0 pointer-events-none" />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-xl max-w-5xl w-full p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
            Who’s Behind the Lens?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">Prakhar Sharma</span>, a Gen-Z creative with a deep love
            for visual storytelling. Whether it's raw urban stories or cinematic
            portraits, I turn real-life emotions into captivating art. 
            <br />
            <br />
            Based in [City], but always chasing light wherever it leads. Let's
            co-create something unforgettable.
          </p>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full md:w-80 h-80 rounded-2xl overflow-hidden shadow-lg relative group"
        >
          <img
            src="/founder.jpg"
            alt="Your Portrait"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2 backdrop-blur-sm">
            📍 Capturing Stories Worldwide
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Text or Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-5 right-5 text-sm text-white/30 tracking-widest z-10 uppercase"
      >
        #AboutMe
      </motion.div>
    </div>
  )
}
