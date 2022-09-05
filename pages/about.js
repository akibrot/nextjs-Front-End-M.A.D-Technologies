import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { FaTractor, FaToolbox } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import { MdOutlineVideogameAsset } from 'react-icons/md'
import AboutIntro from '../components/AboutPage/AboutIntro'
import IconPriceTitleGenerator from '../components/AboutPage/IconPriceTitleGenerator'
import MissonVision from '../components/AboutPage/MissonVision'
import Timeline from '../components/AboutPage/Timeline'
import TimelineIntro from '../components/AboutPage/TimelineIntro'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function AboutPage() {
  const IconPriceTitle = [
    {
      id: 1,
      icon: FaTractor,
      price: "12,000",
      title: "Hectares of farm"
    }, {
      id: 2,
      icon: GrOrganization,
      price: "75",
      title: "Units of technique"
    }, {
      id: 3,
      icon: FaToolbox,
      price: "2000",
      title: "Tons of harvest"
    }, {
      id: 4,
      icon: MdOutlineVideogameAsset,
      price: "$ 500K+",
      title: "Worth exported"
    }
  ]
  const Timelines = [
    {
      id: 1,
      direction: "left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FqjLZXVNDf2nLUahGH6g62eEyYd_mzYbYA&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus pharetra magna",
      date: "2001",
    },
    {
      id: 2,
      direction: "right",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURVafZlm9KhBdUvqQ-AJySOtoZDNH06E1eg&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus pharetra magna",
      date: "2005",
    },
    {
      id: 3,
      direction: "left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytSJBjxyUj89XH2QHmKxHnKiVQY-Scckucw&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus pharetra magna",
      date: "2012",
    },

    {
      id: 4,
      direction: "right",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQni3x3q7NF2zbhfd6yIZuGL4V6cwTFsaRkPA&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus pharetra magna",
      date: "2014",
    },
  ]

  return (
    <div className=" h-screen w-screen  bg-no-repeat bg-cover  flex flex-col ">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
        <title>about us</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
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