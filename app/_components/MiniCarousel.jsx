'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const imageList = [
  '/carousel1.png',
  '/carousel2.png',
  '/carousel3.png',
  '/carousel4.png',
]

export default function MiniCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [prevImage, setPrevImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage)
      setCurrentImage((prev) => (prev + 1) % imageList.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <div className='flex p-4 gap-5 w-[400px] sm:h-[250px] px-3 py-2 bg-[rgba(255,255,255,0.2)] absolute sm:right-[40px] sm:bottom-[250px] right-[45px]  bottom-[200px] rounded-2xl overflow-hidden'>

      <div className='w-1/2 px-10 relative'>
        {/* Previous Image Fading Out */}
        <motion.div
          key={`prev-${prevImage}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={imageList[prevImage]}
            alt="Previous Work"
            width={500}
            height={500}
            className='object-cover w-full h-full rounded-xl'
          />
        </motion.div>

        {/* Current Image Fading In */}
        <motion.div
          key={`current-${currentImage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={imageList[currentImage]}
            alt="Current Work"
            width={500}
            height={500}
            className='object-cover w-full h-full rounded-xl'
          />
        </motion.div>
      </div>

      <div className='tracking-tighter w-1/2 ml-4'>
        <p className='text-sm'>WORKS</p>
        <h1 className='uppercase font-semibold'>Always we go for <br />perfection</h1>
        <p className='mt-10 text-sm opacity-70'>Check out our incredible work and book us now</p>
        <button className='bg-white font-extralight text-[11px] my-4 p-2 rounded-full text-black'>SEE MORE</button>
      </div>
    </div>
  )
}
