import React from 'react'
import { motion } from "motion/react"
import LocomotiveScroll from 'locomotive-scroll';


const ScrollAnim = () => {
  const locomotiveScroll = new LocomotiveScroll();

    return (
        <div data-scroll data-scroll-section  data-scroll-speed="0.04"  className='w-full pt-[7vw] pb-[2vw] bg-[#004D43]    ' >
            <div className=' flex  border-t-[1px] border-b-[1px] whitespace-nowrap overflow-hidden  border-white ' >
                <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{ease:"linear", repeat:"Infinity", duration:5 }}  className='font-["Founderxbold"] text-[25vw] -mb-[14vw] -mt-[4vw]  uppercase text-[#F1F1F1] ' >we are ochi</motion.h1>
                <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{ease:"linear", repeat:"Infinity", duration:5 }}  className='font-["Founderxbold"] text-[25vw] -mb-[14vw] -mt-[4vw]  uppercase text-[#F1F1F1] ' >we are ochi</motion.h1>
                {/* <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease:"linear", repeat:"infinity", duration:5 }}  className='font-["Founderxbold"] text-[25vw]  uppercase text-[#F1F1F1] ' >we are ochi</motion.h1> */}
            </div>
        </div>
    )
}

export default ScrollAnim
