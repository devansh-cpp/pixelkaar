import React from 'react'

function AvataartCard() {
  return (
    <div className='flex sm:flex-row flex-col mx-2  gap-3 sm:w-fit  sm:scale-90 scale-100 sm:h-fit h-[120px] px-3 py-2 bg-[rgba(255,255,255,0.2)] sm:absolute sm:right-[40px] right-[10px]   bottom-[70px] sm:top-[200px] rounded-2xl'>
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
  )
}

export default AvataartCard