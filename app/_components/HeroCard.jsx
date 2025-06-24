import React from 'react'

function HeroCard() {
  return (
    <div className='sm:absolute  flex w-fit mx-2 px-3 py-2  flex-col justify-center sm:hidden sm:w-[212px] h-[120px] bg-[rgba(255,255,255,0.2)] rounded-2xl left-[10px] bottom-[70px]'>
          <div className='flex flex-col  text-white text-[15px]'>
            <h1>Over 1000+ Clients</h1>
            <p className='text-neutral-200 text-[12px]'>We shoot everywhere</p>
          </div>
          <div className='flex flex-col   text-white text-[15px]'>
            <h1>Affordable pricing</h1>
            <p className='text-neutral-200 text-[12px]'>We understand your needs</p>
          </div>
        </div>
  )
}

export default HeroCard