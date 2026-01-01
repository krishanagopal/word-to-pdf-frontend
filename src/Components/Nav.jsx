import React from 'react'

function Nav() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 md:px-40 shadow-lg h-16  '>
        <div className='flex justify-between justify-items-center items-center h-full '>
          <h1 className='text-2xl font-bold'>Word <span className='text-green-500'>To</span>PDF</h1> 
          <h1 className='text-2xl font-bold hover:scale-115 duration-350'>Home</h1> 
        </div>
    </div>
    </>
  )
}

export default Nav