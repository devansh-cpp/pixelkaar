'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp } from 'lucide-react'
import MiniCarousel from './MiniCarousel'

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
    <div className='relative h-screen w-full overflow-hidden flex sm:items-center sm:justify-between'>

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
        <p className='md:text-7xl text-4xl text-center sm:text-left uppercase font-bold'>Your Life. Our Lens. <br /> Eternal Stories.</p>
        <p className='sm:text-2xl text-center sm:text-left'>We don&apos;t just take photos — we capture emotions.</p>
        <button className='bg-white sm:mt-8 text-sm sm:text-lg px-4 py-3 text-black rounded-full w-fit'>
          Explore our works
        </button>
      </div>

      
      

      
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

      <div className='flex sm:flex-row flex-col gap-3 sm:w-fit w-44 sm:h-fit h-[120px] px-3 py-2 bg-[rgba(255,255,255,0.2)] absolute sm:right-[40px]  right-[50px] bottom-[70px] sm:top-[200px] rounded-2xl'>
        <div className="flex items-center space-x-[-12px]">
  {[
    "/avataar1.jpg",
    "/avataar2.jpg",
    "/avataar3.jpg",
     
  ].map((src, idx) => (
    <div
      key={idx}
      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
    >
      <img
        src={src}
        alt={`avatar-${idx}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
<div className='tracking-tighter'>
  <h1 className='font-semibold'>100% CUSTOMERS</h1>
  <p>are satisfied</p>
</div>
      </div>
      
        <MiniCarousel/>

        <div className='absolute px-3 py-2 flex flex-col justify-center sm:hidden w-[212px] h-[120px] bg-[rgba(255,255,255,0.2)] rounded-2xl left-[53px] bottom-[70px]'>
          <div className='flex flex-col  text-white text-[15px]'>
            <h1>Over 1000+ Clients</h1>
            <p className='text-neutral-200 text-[12px]'>We shoot everywhere</p>
          </div>
          <div className='flex flex-col   text-white text-[15px]'>
            <h1>Affordable pricing</h1>
            <p className='text-neutral-200 text-[12px]'>We understand your needs</p>
          </div>
        </div>


    </div>
  )
}

export default Hero
