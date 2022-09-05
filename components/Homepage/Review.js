import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaUser } from 'react-icons/fa'
function Review() {
    return <div className="flex flex-col items-center justify-center bg-[#F3F1E7] mt-16 mb-10">
        <FaQuoteLeft size={40} color="#810102" className="mt-16 " />
        <p className="pt-6 text-[#5a5454d8] tracking-wider">Thousands of satisfied users around the globe</p>
        <div className=" mx-16 w-[55%] text-center">
            <p className="leading-10 font-Roboto text-2xl py-5 font-bold">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Intege test this is akibrot damuel next js developerr at purus pharetra magna tempor egestas non id massa. ”
            </p>
        </div>

        <div className="flex flex-row gap-4  items-center justify-center h-[10rem] mt-2">
        <div className="flex items-center justify-center cursor-pointer uppercase gap-2"><FaArrowLeft/>  prev</div>

            <div className=" rounded-[50%] bg-red-800  flex items-center justify-center object-cover ">
                {/* <img  src="/user.jpg" alt="" srcset="" className="  "   /> */}
          <img src="/user.jpg" alt="" className=" h-24  rounded-[50%] w-24 border-[3px] border-red-900" />

            </div>
        <div className="flex items-center cursor-pointer uppercase gap-2">next<FaArrowRight/> </div>

        </div>
        <h1 className="font-bold font-sans mb-2 leading-7">Abebech derara</h1>
        <h1 className="leading-6 mb-[7rem]" >Customer</h1>
    </div>;
}

export default Review;
