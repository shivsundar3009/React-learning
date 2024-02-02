import React from 'react'

function header() {
  return (
    <>
    <div className='flex items-center justify-around font-bold bg-[#457b9d] text-white h-20'>
        <div className=''>
            SHIVSUNDAR WAKLE
        </div>
        <div>
            <ul className='flex gap-10 '>
                <li className='hover:border-[#023047] hover:bg-white hover:text-[#457b9d] border hover:border p-2 hover:rounded-xl border-transparent cursor-pointer' >Home</li>
                <li className='hover:border-[#023047] hover:bg-white hover:text-[#457b9d] hover:border p-2 hover:rounded-xl border-transparent border cursor-pointer' >About</li>
                <li className='hover:border-[#023047] hover:bg-white hover:text-[#457b9d] hover:border p-2 hover:rounded-xl border-transparent border cursor-pointer' >Projects</li>
               
            </ul>
        </div>
        <div className='hover:border-[#023047] hover:bg-white hover:text-[#457b9d] hover:border p-2 hover:rounded-xl border-transparent border cursor-pointer'>Contact</div>
    </div>
    </>
  )
}

export default header