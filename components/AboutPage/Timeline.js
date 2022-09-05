import {useEffect} from "react";

import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import { data } from "autoprefixer";
function Timeline({ direction ,data}) {
// love building my own timeline component ):3
    useEffect(() => {
        AOS.init({
            duration: 1500
        });

    }, [])

    return (
        <div className=' w-screen  flex items-center justify-center' >
           
            <div className='h-[52vh] flex items-center justify-center'>
                <div className='w-[2px] h-full bg-[#F3F1E7] flex items-center justify-center relative'>
                    <div className=' bg-white border-2 border-solid border-red-400 w-6 h-6 rounded-[50%] absolute flex items-center justify-center' >
                        <div className='w-1/2 h-1/2 bg-red-500 rounded-[50%]'> </div>
                    </div>
                    <div className={direction == "left" ? ' bg-[#F3F1E7] w-[110px] left-4 h-[2px] absolute flex items-center justify-center' : ' bg-[#F3F1E7] w-[110px] right-4 h-[2px] absolute flex items-center justify-center'} >
                    </div>
                    <div className={direction == "left" ? 'p-4 px-6 bg-[#F3F1E7] w-[4rem] right-12 h-7 rounded-full absolute flex items-center justify-center' : 'p-4 px-6 bg-[#F3F1E7] w-[4rem] left-12 h-7 rounded-full absolute flex items-center justify-center'} >
                        <p className='py-10 font-roboto'>{data.date}</p>
                    </div>
                    <div data-aos={direction=="right"? "fade-right":"fade-left"} className={direction == "left" ? '  w-[400px] left-[160px] h-[300px]  absolute flex-col flex items-center justify-center' : '  w-[400px] right-[160px] h-[300px] flex-col absolute flex items-center justify-center'} >
                        <div className="flex-[8] bg-red-200 w-full">
                            <img src={data.image} alt="" srcset="" width={"100%"} />
                        </div>
                        <div className="flex-[2] w-full font-bold flex items-end">
                            <p >{data.description}</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Timeline;
