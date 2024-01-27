import React, { useState } from 'react'

function App() {
 
   const [color, setColor] = useState('olive')


  return (
    <div className='h-screen w-full text-white '
         style={{backgroundColor: color}}
    >
     
      <div className='bg-[#2a9d8f] flex justify-center gap-5 p-5 w-full max-h-20'>
          <div className='bg-red-700 p-2 rounded-xl cursor-pointer min-w-20 text-center hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2 ' 
          onClick={() => setColor('red')}
          >
             red
          </div>
          <div className='bg-yellow-300 p-2 rounded-xl cursor-pointer min-w-20 text-center hover:bg-white hover:text-yellow-300 hover:border-yellow-300 hover:border-2 '
          onClick={() => setColor('yellow')}
          >
             yellow
          </div>
          <div className='bg-blue-700 p-2 rounded-xl cursor-pointer min-w-20 text-center hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-2 '
          onClick={() => setColor('blue')}
          >
             blue
          </div>
          <div className='bg-black p-2 rounded-xl cursor-pointer min-w-20 text-center hover:bg-white hover:text-black hover:border-black hover:border-2 '
          onClick={() => setColor('black')}
          >
             black
          </div>
          <div className='bg-green-700 p-2 rounded-xl cursor-pointer min-w-20 text-center hover:bg-white hover:text-green-700 hover:border-green-700 hover:border-2 '
          onClick={() => setColor('green')}
          >
             green
          </div>
        
          
         
     </div>
    
    </div>
  )
}

export default App