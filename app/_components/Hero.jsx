'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp } from 'lucide-react'
import MiniCarousel from './MiniCarousel'
import HeroCard from './HeroCard'
import AvataartCard from './AvataartCard'

const images = [
  { id: 1, src: '/bg1.png', alt: 'Wedding Shoot' },
  { id: 2, src: '/bg2.png', alt: 'Maternity Shoot' },
  { id: 3, src: '/bg3.png', alt: 'Baby Shoot' },
  { id: 4, src: '/bg4.png', alt: 'Baby Shoot' }
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-screen w-full overflow-hidden flex sm:flex-row flex-col sm:items-center sm:justify-between'>

      {/* Background Layer */}
      <div className='absolute inset-0 -z-10'>
        <AnimatePresence>
          <motion.div
            key={images[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover w-full h-full grayscale z-10 opacity-50"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className='md:mt-0 mt-64 md:w-2/3 px-10 text-white z-20 drop-shadow-xl flex flex-col md:justify-center  sm:items-start items-center  gap-3'>
        <p className='md:text-7xl text-2xl text-center sm:text-left uppercase font-bold'>Your Life. Our Lens. <br /> Eternal Stories.</p>
        <p className='sm:text-2xl text-center sm:text-left'>We don&apos;t just take photos — we capture emotions.</p>
        <button className='bg-white hidden sm:block sm:mt-8 text-sm sm:text-lg px-4 py-3 text-black rounded-full w-fit'>
          Explore our works
        </button>
      </div>

      
      <div>
            <div className='sm:flex hidden tracking-tighter absolute bottom-[120px] left-[40px] gap-5'>
          <div className='px-5 py-3 flex  justify-center items-center h-20 bg-[rgba(255,255,255,0.3)] rounded-2xl w-fit'>
            <div className='pr-3'>
            <Star/>
            </div>
            <div>
              <h1 className='text-lg font-bold'>5 STARS SERVICES</h1>
              <h1>rated by clients</h1>
            </div>
          </div>
          <div className='px-5 py-3 flex  justify-center items-center h-20 bg-[rgba(255,255,255,0.3)] rounded-2xl w-fit'>
            <div className='pr-3'>
            <ThumbsUp/>
            </div>
            <div>
              <h1 className='text-lg font-bold'>THE BEST PHOTOGRAPHY AGENCY</h1>
              <h1>at the focused on time   delivery</h1>
            </div>
          </div>
      </div>

      
      
      <div className='  sm:flex hidden'>

        <MiniCarousel/>
        <HeroCard/>
        <AvataartCard/>
      </div>


      <div className='  sm:hidden flex flex-col justify-center items-center relative'>

        <MiniCarousel/>
        <div className='flex flex-row '>
        <HeroCard/>
        <AvataartCard/>
        </div>
      </div>

      </div>

      
    

    </div>
  )
}

export default Hero
