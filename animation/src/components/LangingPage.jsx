import React from 'react'
import { HiArrowSmallUp } from "react-icons/hi2";

const LangingPage = () => {
  return (
    <div className='w-full h-screen text-white bg-black pt-1'>
        <div className='textstucture mt-52 px-20'>
            {["We Create","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return  <div className='masker'>
                    <div className="w-fit flex item-center">
                    {index === 1 && <div className="w-[9vw] h-[5vw] bg-white mr-3"></div>}
                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold font-mono'>{item}</h1>
                </div>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p className="text-md font-light tracking-tight leading-none font-white">{item}</p>
            })}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'> Start the Project</div>
                <div className='w-10 h-10 flex  items-center justify-center border-[1px] border-zinc-500  rounded-full'>
                    <span className='rotate-[45deg]'>
                         <HiArrowSmallUp />
                    </span>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default LangingPage