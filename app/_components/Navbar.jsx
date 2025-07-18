'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', duration: 0.4 } },
    exit: { x: '100%', transition: { type: 'tween', duration: 0.4 } },
  }

  return (
    <>
      <div className=' fixed top-0 left-0 w-full z-50 px-5 py-4'>
        <div className='max-w-[1280px] mx-auto flex items-center justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-full px-6 py-3'>
          {/* Logo */}
          <div className='w-[140px] sm:w-[180px]'>
             <h2 className='text-2xl font-bold'>Pixelora</h2>
          </div>

          {/* Desktop Menu */}
          <div className='hidden  lg:flex gap-5 text-white font-medium'>
            <button className='cursor-pointer border-2 border-transparent rounded-full px-6 mx-2 py-2 hover:border-white transition duration-150'>HOME</button>
            <button className='cursor-pointer border-2 border-transparent rounded-full px-6 mx-2 py-2 hover:border-white transition duration-150'>ABOUT US</button>
            <button className='cursor-pointer border-2 border-transparent rounded-full px-6 mx-2 py-2 hover:border-white transition duration-150'>SERVICES</button>
            <button className='cursor-pointer border-2 border-transparent rounded-full px-6 mx-2 py-2 hover:border-white transition duration-150'>OUR WORKS</button>
            <button className='cursor-pointer border-2 border-transparent rounded-full px-6 mx-2 py-2 hover:border-white transition duration-150'>TESTIMONIALS</button>
          </div>

          {/* Contact Button (Desktop) */}
          <div className='hidden lg:block'>
            <button className='bg-white text-black px-4 py-2 rounded-full font-medium'>CONTACT US</button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className='lg:hidden text-white'>
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[40%] bg-black text-white z-50 px-6 py-6 shadow-2xl"
        >
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-xl font-bold'>Menu</h1>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className='flex flex-col gap-6 text-lg font-medium'>
            <button onClick={() => setIsOpen(false)}>HOME</button>
            <button onClick={() => setIsOpen(false)}>ABOUT US</button>
            <button onClick={() => setIsOpen(false)}>SERVICES</button>
            <button onClick={() => setIsOpen(false)}>OUR WORKS</button>
            <button onClick={() => setIsOpen(false)}>TESTIMONIALS</button>
          </div>

          <div className='mt-10'>
            <button className='bg-white text-black w-full py-3 rounded-full font-medium'>CONTACT US</button>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
