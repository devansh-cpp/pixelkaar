'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute -top-20 left-0 w-[400px] h-[400px] bg-[#444] rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#666] rounded-full blur-3xl opacity-10"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 relative z-10">

        {/* Brand Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
        <div className='w-[350px] sm:w-[300px]'>
                    <img
                      src="/logo.webp"
                      width={100}
                      height={100}
                      alt="Pixelkaar Logo"
                      className='w-full h-auto'
                    />
                  </div>
          <p className="text-gray-400 sm:mt-6 mt-12 text-lg font-light">
            Cinematic storytelling for the bold. Freeze time with flair.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-3">Connect</h2>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <Mail size={20} />
            <a href="mailto:hello@pixelkaar.in" className="text-lg">pixelkaar.in</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <Phone size={20} />
            <a href="tel:+918888888888" className="text-lg">+91 91255 63079</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin size={20} />
            <p className="text-lg">Ayodhya,Uttar Pradesh,India</p>
          </div>
          <div className="flex gap-4 pt-4">
            <motion.a
              href="https://instagram.com/pixelkaar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram size={24} />
            </motion.a>
            Pixelkaar
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8285569779073!2d82.15419151198019!3d26.781734376628453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a078919654723%3A0x3091c9c3aaa18bc3!2sPIXELKAAR%20Production%20%26%20Studio!5e0!3m2!1sen!2sin!4v1749300730960!5m2!1sen!2sin"
              width="80%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Bottom Strip */}
      <motion.div
        className="text-center text-sm text-gray-500 border-t border-gray-800 py-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        © {new Date().getFullYear()} Pixelkaar — Made with Light & Shadow.
        <a href="https://www.sudoweb.in">Sudoweb.in Created with 💘</a>
      </motion.div>
    </footer>
  );
}
