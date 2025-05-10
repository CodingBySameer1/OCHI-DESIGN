import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';


const Eyes = () => {

    const [rotate, setrotate] = useState(0)
    useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
        // mouse movement poitions 
        let mousex = e.clientX;
        let mousey = e.clientY;

        // minusing movement positions to the half width of window
                
        let deltaX = mousex - window.innerWidth/2;  //  delta also mean difference between mouse the center of window 
        let deltaY = mousey - window.innerHeight/2;  //

        // converting radius to degree to perform animation use atan2() method  

        let angle = Math.atan2(deltaX, deltaY) * (180/Math.PI);
        setrotate(angle)
    })  
},)
const locomotiveScroll = new LocomotiveScroll();

      
    return (
        <div  className='w-full h-screen bg-zinc-100 overflow-hidden '>
            <div  data-scroll  data-scroll-speed="-0.3"  className=" w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full circle  flex items-center justify-center'>
                        <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center'>
                            <div   className={`line w-full h-[2vw] rotate-[${rotate}] `}>
                                <div className=' w-[2vw] h-[2vw] bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full circle  flex items-center justify-center '>
                        <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-end'>
                            <div style={{transform:` rotate(${rotate})`} }  className='  line w-full h-[2vw]'>
                                <div className=' w-[2vw] h-[2vw] bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
