import { motion } from "motion/react"
import React from 'react'
import { useState } from "react";


const Features = () => {

  const [isHovering, setHovering] = useState(false);


  return (
    <div className='w-full min-h-screen ' >
      <h1 className='font-["Founderregular"] text-[4vw] mb-[1vw] pt-[6vw] px-[4vw]' >Featured projects</h1>
      <hr />
      <div className='w-full px-[4vw] py-[3vw]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2vw]'>
          <div className='card-container  w-full h-[70vh] relative ' >
            <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute z-[99] text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] left-full -translate-x-[50%] -translate-y-[50%] uppercase'>{" Salience labes".split().map((items, index) => {
              return (
                <span className='inline-block' key={index}>{items}</span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{" Cardboard Spaceship".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >AH2 & Matt Horn </h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"ah2 & matt horn".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"fyde".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"vise".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"all things go".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"trawa".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"black book".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute overflow-hidden text-[#CDEA68] whitespace-nowrap top-1/2 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"premium blend".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute text-[#CDEA68] whitespace-nowrap top-1/4 text-[8vw]  font-["Founderxbold"] right-full translate-x-[50%] -translate-y-[50%]  uppercase'>{"soft start".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg" alt="" />
            </div>
          </div>
          <div className='card-container  w-full h-[70vh] relative ' >
          <div className="flex items-center gap-2">
              <div className="w-[0.6em] h-[0.6em] mb-[5px] bg-black rounded-full"></div>
              <h4 className=" font-['Founderlight'] uppercase" >Salience Labs</h4>
            </div>
            <h1 className='absolute  text-[#CDEA68] whitespace-nowrap  text-[8vw]  font-["Founderxbold"] top-1/3 right-1/2 translate-x-[50%] -translate-y-[90%]  uppercase'>{"office vibe".split().map((items, index) => {
              return (
                <motion.span
                  className='inline-block'

                  key={index}>{items}</motion.span>
              )
            })}</h1>
            <div className='card w-full  rounded-2xl overflow-hidden h-full bg-amber-700 ' >
              <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg " alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-[12vh] ">
      <button className="uppercase fonr-['Founderlight'] flex items-center gap-[2vw] tracking-tighter bg-black text-white rounded-full px-[1.8vw]  py-[1vw]"  >view all case studies  <div className="w-2 h-2 bg-white rounded-full"></div></button>
      </div>
    </div>
  )
}

export default Features
