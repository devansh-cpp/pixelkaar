'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Wedding Client',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message:
      'Pixelkaar captured every moment beautifully. The storytelling through photos was beyond our expectations.',
  },
  {
    name: 'Priya Sharma',
    role: 'Fashion Blogger',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message:
      'From lighting to composition, everything was on point. Their professionalism and creativity really stood out.',
  },
  {
    name: 'Rohan Singh',
    role: 'Event Organizer',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    message:
      'Highly recommended! They know how to capture the vibe of the event while being completely unobtrusive.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Testimonials() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hear from some of our happy clients at{' '}
          <span className="text-gray-300 font-medium">Pixelkaar</span>.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-gray-800"
              variants={cardVariants}
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.message}"</p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-600 object-cover"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
