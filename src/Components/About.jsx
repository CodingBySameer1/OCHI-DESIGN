import { motion } from 'motion/react'
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';


const About = () => {
  const locomotiveScroll = new LocomotiveScroll();

    return (
        <div   data-scroll  data-scroll-speed="-.2"  className='w-full min-h-[120vh] bg-[#CDEA68]   rounded-tl-[2vw] rounded-tr-[2vw] border-zinc-900 ' >
            <h1 className='font-["Founderregular"]  text-[4vw] leading-[4vw] py-[5vw] px-[4vw]  ' >Ochi is a strategic presentation agency for forward-<br />thinking businesses that need to raise funds, sell<br />prod­ucts, ex­plain com­plex ideas, and hire great peo-<br /> ­ple.</h1>
            <div className=' border-b-1 border-zinc-900' ></div>
            <div className='two-cover  text-[1.20vw] font-[Founderlight] flex py-[2vh]  justify-between px-[4vw]' >
                <div className='w-1/2' >
                    <h4  >What you can expect:</h4>
                </div>
                <div className='   w-1/2'>
                    <h4 className='w-[41%]' >
                        We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</h4>
                    <div className='  mt-[2vw] flex items-center gap-[11vw]' >
                        <h4 className='w-[37%]' >We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h4>
                        <h4>
                            {["Instagram", "Behance", "facebook", "Linkdin"].map((items, index) => {
                                return (
                                    <div><a key={index} className='border-b-1  border-black' href="">{items}</a></div>
                                )
                            })}
                        </h4>
                    </div>
                </div>
            </div>
            <div className='border-b-1 border-zinc-900  mt-[6.5vw]'></div>
            <div className='both-cover py-[1vw] flex justify-between px-[4vw]'>
                <div className='w-1/2'>
                    <h1 className=' text-[4vw] font-["Founderregular"]' >Our approach:</h1>
                    <button className='font-["Founderregular"] items-center justify-center gap-[1vw] rounded-[3.5vw] px-[2vw] pt-[1vw] pb-[0.8vw] flex text-amber-50 bg-black' >READ MORE
                         <div className='h-[0.6vw] w-[0.6vw] bg-amber-50 rounded-full mb-[4px]'></div>
                    </button>               
                </div>
                <div className='w-1/2'>
                    <div className='box mb-[3vw] w-[45vw] h-[30vw] bg-amber-400 overflow-hidden rounded-2xl'>
                        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
