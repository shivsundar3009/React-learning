import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-[#457b9d] text-white flex gap-20 p-10'>

        <div className='flex flex-col ml-24 gap-7'>
            <h2 className='text-3xl'>Thanks for visiting!</h2>
            <p>Got questions, comments, or feedback? <br />
Feel free to reach out and contact me.</p>

         <div>Contact</div>
        </div>
        <div className='flex flex-col gap-7'>
            <h2 className='text-xl'> Navigation</h2>
            <div>
            <ul className='flex flex-col gap-1'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Footer