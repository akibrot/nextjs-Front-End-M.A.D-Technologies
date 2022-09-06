import Head from 'next/head'
import React from 'react'

import AboutIntro from '../components/AboutPage/AboutIntro'
import IconPriceTitleGenerator from '../components/AboutPage/IconPriceTitleGenerator'
import MissonVision from '../components/AboutPage/MissonVision'
import Timeline from '../components/AboutPage/Timeline'
import TimelineIntro from '../components/AboutPage/TimelineIntro'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {Timelines,IconPriceTitle} from '../components/AboutPage/AboutPageDatas'
function AboutPage() {
 
  

  return (
    <div className=" h-screen w-screen  bg-no-repeat bg-cover  flex flex-col ">
      <Head>
        <title>about us</title>
      </Head>
      <div className='w-full backgroundimage2 h-2/3 bg-cover bg-no-repeat  bg-black'>
        <NavBar />
        <div className='p-16 mb-10 text-5xl text-white font-sans font-bold'><h1>About us / Overview</h1></div>
      </div>
      <AboutIntro />
      {/* Icon Price Title  */}
      <div className='w-screen flex flex-row items-center justify-around pb-20 p-16 '>
        {
          IconPriceTitle.map((data) => {
            return <IconPriceTitleGenerator key={data.id} data={data} Icon={data.icon} />
          })
        }
      </div>
      {/* misson vison */}
      <MissonVision />
      <TimelineIntro />
      <div className='pb-[6rem]'>
        {/* <Timeline/>
       */}
        {
          Timelines.map((timeline) => {
            return <Timeline key={timeline.id} direction={timeline.direction} data={timeline} />
          })
        }
      </div>
      <Footer />


    </div>
  )
}

export default AboutPage