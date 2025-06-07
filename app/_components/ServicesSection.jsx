'use client'
import { motion } from 'framer-motion'
import {
  Camera,
  User,
  ShoppingBag,
  CalendarCheck,
  Settings,
  Clapperboard
} from 'lucide-react'

const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Wedding Photography',
    desc: 'Candid and cinematic wedding memories tailored for you.',
    bg: 'bg-[#1f1f1f]/80'
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'Portrait Sessions',
    desc: 'Professional portraits that speak personality and emotion.',
    bg: 'bg-[#292929]/80'
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'Brand/Product Shoots',
    desc: 'High-impact visuals for e-commerce, branding and marketing.',
    bg: 'bg-[#202020]/80'
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: 'Event Coverage',
    desc: 'Corporate, casual or creative events covered stylishly.',
    bg: 'bg-[#181818]/80'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Projects',
    desc: 'Let’s bring your unique vision to life together.',
    bg: 'bg-[#262626]/80'
  },
  {
    icon: <Clapperboard className="w-6 h-6" />,
    title: 'Cinematic Webseries',
    desc: 'Visually-rich narrative webseries shot in a cinematic style.',
    bg: 'bg-[#1e1e1e]/80'
  }
]

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white py-28 px-6 isolate overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Services Offered
        </h2>
        <p className="text-gray-400 text-lg">
          Versatile services crafted to fit every story and style.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              type: 'spring'
            }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 ${service.bg} hover:scale-105 transition-all duration-300`}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/10 text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
