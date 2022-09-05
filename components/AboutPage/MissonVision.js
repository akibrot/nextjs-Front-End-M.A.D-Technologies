import React from 'react'

function MissonVision() {
  return (
    <div className='w-screen bg-red-100 flex flex-row items-center justify-center missonvisonbackground bg-cover bg-no-repeat'>
    <div className='flex-[5] h-[80vh]  bg-transparent flex items-center justify-end pb-12 pr-4'>
      <div className='w-2/3 h-2/3  border-white border-[5px] border-solid relative flex flex-col items-center justify-center' >
        <h1 className='text-white text-4xl font-bold font-sans z-10'>Misson</h1>
        <div className='absolute w-full h-full top-0 left-0 bg-[#00000075] blur-outer z-0'> </div>

        <p className='px-16 z-10 text-white pt-4 font-[roboto condenced] font-bold text-center'>
          To reverse degradation of natural environment, and support societies and government to build a future in which humans live in harmony with nature, by conservation biodiversity, promoting sustainable and equitable use of renewable natural resources.
        </p>
      </div>
    </div>
    <div className='flex-[5] h-[80vh]  bg-transparent flex items-center justify-start pl-12 pt-12  '>
      <div className='w-2/3 h-2/3  border-white border-[5px] border-solid relative flex flex-col items-center justify-center' >
        <h1 className='text-white text-4xl font-bold font-sans z-10'>Vision</h1>
        <div className='absolute w-full h-full top-0 left-0 bg-[#0000007a]  backdrop-blur-xl z-0'> </div>

        <p className='px-16 z-10 text-white pt-4 font-[roboto condenced] font-bold text-center'>
        A healthy and prosperous society that values, conserves and sustainably uses nature.
        </p>
      </div>
    </div>
    
  </div>
  )
}

export default MissonVision