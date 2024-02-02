import React from 'react'
import demo from '../demo.png'

export default function Home() {
  return (
    <>
    <div className='bg-[#bde0fe] h-screen flex ' >
        <div className='w-1/2 flex flex-col justify-center mb-40 ml-9 gap-10'> 
        <h1 className='text-6xl font-bold text-[#3a395e]' >👋 Hi, I'm <span className='text-[#4770ff]'> SHIVSUNDAR</span></h1>
        <p className='text-[#6e6d8f]'>Passionate about technology and its ever-evolving landscape, I've equipped myself with a strong foundation in HTML, CSS, and JavaScript, alongside mastering modern frameworks like React.</p>

        <div className='bg-[#4770ff] text-white w-max p-5 rounded-xl border border-transparent hover:border-[#4770ff] hover:text-[#4770ff] hover:bg-white cursor-pointer'> 
            Download CV
        </div>
        </div>
        <div className='w-1/2 flex items-center justify-center mb-40'> <img className="h-96" src={demo}  alt="" /> </div>
    </div>
    </>
  )
}
