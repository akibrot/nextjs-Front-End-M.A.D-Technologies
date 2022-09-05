import Link from 'next/link'

function Landing() {
  return (
    <div className=" mt-[10rem] pr-[4.8rem]  flex flex-col  items-end justify-center">
        <div className=" float-right text-center leading-10  text-white text-3xl  font-[Montserrat Alternates] font-bold text-end">
          <p className="font-sans text-[1.6rem] tracking-wide ">Sustainability is Our Core Principle</p>
          <div className="w-[40%] text-right float-right">
            <p className=" text-sm  text-right tracking-wider font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vitae nisl ultricies at sagittis ultrices. Ultricies fringilla diam adipiscing a.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div className=" text-white underline uppercase mt-5 font-bold font-sans text-end text-sm ">
          <Link href={""}>Learn more</Link>
        </div>
      </div>
  )
}

export default Landing