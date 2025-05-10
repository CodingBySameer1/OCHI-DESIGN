import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ClientsReview = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 font-["Founderlight"]   '>
      <h1 className='tracking-tight px-[4vw] py-[5vh] text-6xl'>Clients’ reviews</h1>
      <hr />
      <div className='px-[4vw]'>
        <div className='flex items-center  py-[3vh] justify-between'>
          <h4 className='text-[1.1em]'>Karman Ventures</h4>
          <h4 className='text-[1.1em]'>Services:</h4>
          <h4 className='text-[1.1em]'>William Barnes</h4>
          <h4 className='text-[1.1em uppercase underline]'>Read</h4>
        </div>
        <div className='flex justify-center gap-[15vw] items-start  mt-[5vh]'>
          <div className='w-[20%] pl-[8vw]'>
            <div className=' parent-div flex items-center gap-[3px]'>
              <h3 className='  cursor-pointer parent-h3 uppercase border-1 whitespace-nowrap border-black rounded-full px-2.5 pt-1 '>investor deck</h3>
              <span className=' arrow hidden  border-1 border-black rounded-full  -rotate-45 p-1.5 ' >
                <FaArrowRight />
              </span>
            </div>
            <div className=' parent-div flex mt-[1vh] items-center gap-[3px]' >
              <h3 className=' cursor-pointer  parent-h3 uppercase  border-1 border-black rounded-full px-2.5 pt-1 '>sales deck</h3>
              <span className=' arrow hidden  border-1 border-black rounded-full  -rotate-45 p-1.5 ' >
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className='w-[30%] mt-[2vh]'>
            <div className='w-[6.5em] h-[6.5em] bg-amber-200 overflow-hidden  rounded-xl'>
              <img className='object-cover  w-full h-full ' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
            </div>
            <h3 className='text-[1.1em] mt-[2vh] '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</h3>
          </div>
        </div>
      </div>
      <div className='py-[5vh]'>
        <div className='flex items-center justify-between px-[4vw] border-black border-t-1 py-[2.5vh]'>
          <h3 className='text-[1.1em]' >Planetly</h3>
          <h3 className='text-[1.1em]' >Nina Walloch</h3>
          <h3 className='text-[1.1em] uppercase underline' >Read</h3>
        </div>
      </div>
    </div>
  )
}

export default ClientsReview
