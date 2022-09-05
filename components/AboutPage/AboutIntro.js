import React from 'react'

function AboutIntro() {
  return (
    <div className=' w-screen flex flex-row flex-wrap py-9 '>
    <div className='flex-[5] bg-white '>
      <div className='p-20  font-[roboto condenced] '>
        <div className='pl-12'><h1 className='text-[#810102] text-5xl font-sans font-bold pb-5 '>We are ECFF</h1>

          <p>The Environment and Coffee Forest Forum (ECFF), is a local Civil Society Organization registered and licenced in Ethiopia (registration No. 0378), and focuses on developing strategies for sustainable use and conservation of the environment in general, and the coffee forests in particular, through thematic research on conservation planning, education and pilot implmentation of research findings.</p><br />

          <p>ECFF provides services including conservation planning, practical implmentation of scientifically proven concepts, environmental education and capacity building and climate change mitigation.</p></div>
      </div>
    </div>
    <div className='flex-[5] flex items-start justify-start flex-col relative  '>
      <div className='pt-20 pl-16  '>
        <img className='border-l-[10] border-black border-solid shadow-[-10px_-10px_rgba(0,0,0,0.3)]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6FVMxqJZyVe1Ze17ykisgyPmFaTJLV7EIA&usqp=CAU" alt="" srcset="" width={450} />

      </div>
      <div className='absolute bottom-0 right-20 ml-15 mb-5 bg-black w-2/4 shadow-[10px_10px_rgba(0,0,0,0.3)] '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wXyVxIE3jekQMgblF1uEfibZXUZYpeuR4w&usqp=CAU" alt="" srcset="" width={"100%"} />

      </div>
    </div>
  </div>
  )
}

export default AboutIntro