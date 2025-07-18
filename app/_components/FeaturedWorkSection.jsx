'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const categories = ['All', 'Weddings', 'Street', 'Fashion', 'Nature']

const works = [
  { id: 1, category: 'Weddings', img: '/wedding1.jpg' },
  { id: 1, category: 'Weddings', img: '/wedding2.jpg' },
  { id: 1, category: 'Weddings', img: '/wedding3.jpg' },
  { id: 1, category: 'Weddings', img: '/wedding4.jpg' },
  { id: 1, category: 'Weddings', img: '/wedding5.jpg' },
  { id: 1, category: 'Weddings', img: '/wedding6.jpg' }, 
  { id: 1, category: 'Street', img: '/street1.jpg' }, 
  { id: 1, category: 'Street', img: '/street2.jpg' }, 
  { id: 1, category: 'Street', img: '/street3.jpg' }, 
  { id: 1, category: 'Street', img: '/street4.jpg' }, 
  { id: 1, category: 'Street', img: '/street5.jpg' }, 
  { id: 1, category: 'Street', img: '/street6.jpg' }, 
  { id: 1, category: 'Fashion', img: '/fashion1.jpg' },   
  { id: 1, category: 'Fashion', img: '/fashion2.jpg' },   
  { id: 1, category: 'Fashion', img: '/fashion3.jpg' },   
  { id: 1, category: 'Fashion', img: '/fashion4.jpg' },   
  { id: 1, category: 'Fashion', img: '/fashion5.jpg' },      
  { id: 1, category: 'Nature', img: '/nature1.jpg' },   
  { id: 1, category: 'Nature', img: '/nature2.jpg' },   
  { id: 1, category: 'Nature', img: '/nature3.jpg' },   
  { id: 1, category: 'Nature', img: '/nature4.jpg' },   
  { id: 1, category: 'Nature', img: '/nature5.jpg' },   
  { id: 1, category: 'Nature', img: '/nature6.jpg' },   
]
export default function FeaturedWorkSection() {
  const [activeCategory, setActiveCategory] = useState('Weddings')

  const filteredWorks =
    activeCategory === 'All'
      ? works
      : works.filter((work) => work.category === activeCategory)

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white px-6 py-24 overflow-hidden isolate">
      {/* Floating Background Glows for 3D Depth */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] z-0 animate-ping" />
      <div className="absolute bottom-10 left-[10%] w-[300px] h-[300px] bg-[#ff00f2]/20 blur-3xl rounded-full z-0 animate-spin-slow" />

      {/* Frosted Glass Effect Panel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md z-0 pointer-events-none" />

      {/* Decorative Layered Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] z-0" />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="sm:text-5xl text-3xl font-extrabold mb-10 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          Featured Work
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border border-white/10 text-sm uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: 'spring'
                }}
                className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                {/* Image */}
                <img
                  src={work.img}
                  alt={work.category}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-xl font-semibold tracking-wide">
                    {work.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
