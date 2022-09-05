import Link from 'next/link'
function HomeAbout() {
  return (
    <div className="flex items-end justify-end bg-[#F3F1E7] relative mb-12 pb-12 ">
    <div className="absolute top-[2rem] boxsh  shadow-[10px_10px_rgb(129,1,2)] left-20 w-[50%] bg-red-700 mt-10  h-[110%] mb-10  flex items-end justify-center">
        <img src="/imagehome.png" alt="" className=" h-[100%] w-[100%] " />
        
    </div>
    <div className="w-2/4 flex flex-col mt-12 p-10 pl-40">
        <h1 className="font-sans text-[#810102] text-[50px] leading-[78px] font-bold pt-12 ">About us</h1>
        <div>
            <p className="mr-20 py-2 w-2/3">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis id nunc vitae gravida. Aenean quis velit ante. Vestibulum porttitor lorem pretium porta ornare. Sed eget laoreet nibh. Donec vitae faucibus nulla, ut dictum urna.
            </p>
        </div>
        <Link href={""} className="pt-2"><p className="text-[#810102] text-xl  mb-3 uppercase w-fit border-b-2 border-solid border-black cursor-pointer font-bold font-sans " >learn more</p></Link>
    </div>
</div>
  )
}

export default HomeAbout