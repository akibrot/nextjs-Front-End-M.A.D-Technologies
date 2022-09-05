
function Publications() {
  return (
    <div className=" mt-[11rem] flex flex-col items-center justify-center mb-16 ">
      <h1 className=" text-[40px] font-bold text-[#810102] font-[Roboto] ">Publications</h1>
      <div className="flex  mt-5 w-screen flex-row px-16">
        <div className="  flex-[5] h-[560px] mr-5 flex flex-col items-center justify-center relative z-0">
          <img src="/imagehome.png" alt="" className=" h-[100%]  w-full" />

          <div className=" absolute left-0 top-0 h-[100%] w-[100%] z-10 bg-gradient-to-l from-[#000000d5]  to-[#01010141]">
            <div className='flex flex-col text-white w-[40%] h-full float-right pr-10  text-start pt-14'>
              <h1 className='text-2xl font-bold font-sans'>2021 Production <br />Reports</h1>
              
              <div className='pt-16'>
              <p >
                Description Lorem ipsum dolor sit amet, consectetur.
              </p>
              </div>
              <div className='pt-[120%] w-fit'>
                <p>4.1 MB PDF</p>
                <div className='border-white border-[1px] mt-2 '>
                  <p className='px-3'>Download</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=" flex-[5] flex flex-col items-center justify-center h-[560px] gap-5">
          <div className="box bg-black flex-[5] w-full relative ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHUAoLPEzUC40Qzfs8c-rh3Nb7h7mJfginw&usqp=CAU" alt="" className='absolute w-full h-full' />

            <div className=" absolute left-0 top-0 h-[100%] w-[100%] z-10 bg-gradient-to-l from-[#000000d5]  to-[#01010141]">
            <div className='flex flex-col text-white w-[40%] h-full float-right pr-10  text-start pt-14 justify-between'>
              <h1 className='text-2xl font-bold font-sans'>2021 Production <br />Reports</h1>
              
              <div className='pt-6'>
              <p >
                Description Lorem ipsum dolor sit amet, consectetur.
              </p>
              </div>
              <div className='w-fit'>
                
                <div className='border-white border-[1px] mb-4'>
                  <p className='px-3 uppercase'>read more</p>
                </div>
              </div>

            </div>
            </div>
  

          </div>

          <div className="box  flex-[5] w-full relative h-1/2 box-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQkHjWQNJlREEsl67mbNPeDKMre-sPglQLQ&usqp=CAU" alt="" className='absolute w-full h-full' />

            <div className=" absolute left-0 top-0 h-[100%] w-[100%] z-10 bg-gradient-to-l from-[#000000d5]  to-[#01010141]">
            <div className='flex flex-col text-white w-[40%] h-full float-right pr-10  text-start pt-4 justify-around'>
              <h1 className='text-2xl font-bold font-sans'>2021 Production <br />Reports</h1>
              
              <div className=''>
              <p >
                Description Lorem ipsum dolor sit amet, consectetur.
              </p>
              </div>
              <div className='w-fit'>
                <p>32 mins </p>
                <div className='border-white border-[1px]  '>
                  <p className='px-3'>View</p>
                </div>
              </div>

            </div>
            </div>

            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Publications