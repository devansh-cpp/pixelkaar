'use client';

import { motion } from 'framer-motion';

export default function BookingCTA() {
  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-20 bg-[#0d0d0d] text-white overflow-hidden">
      {/* Background Blur Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-20 rounded-full blur-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tell us about your project and let’s make something beautiful together.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left bg-[#1a1a1a]/80 p-8 rounded-2xl backdrop-blur-md border border-gray-800"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-span-1">
            <label className="block text-sm text-gray-400 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Aarav Mehta"
              className="w-full p-3 bg-[#111] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#111] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm text-gray-400 mb-1">Project Type</label>
            <select
              className="w-full p-3 bg-[#111] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option>Wedding Photography</option>
              <option>Portfolio Shoot</option>
              <option>Event Coverage</option>
              <option>Product Photography</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm text-gray-400 mb-1">Preferred Date</label>
            <input
              type="date"
              className="w-full p-3 bg-[#111] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-md hover:bg-white transition"
            >
              Book a Slot
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
