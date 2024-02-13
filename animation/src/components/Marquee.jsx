import React from 'react'
import motion from 'framer-motion'
const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl border-zinc-800 bg-[#004D43] '>
        <div className='text border-t-2 border-b-2 border border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 inital={{x:0}} animation={{"-100%"}} transition={{ease}} className=' text-[15vw] leading-none uppercase  -mt-10 pt-10 pb-10 font-bold'>We are ochi</h1>
            <motion.h1 inital={{x:0}} animation={{"-100%"}} transition={{ease}} className=' text-[15vw] leading-none uppercase  -mt-10 pt-10 pb-10 font-bold'>We are ochi</h1>

        </div>
    </div>
  )
}

export default Marquee