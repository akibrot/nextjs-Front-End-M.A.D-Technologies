import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import HomeAbout from '../components/Homepage/HomeAbout'
import Landing from '../components/Homepage/Landing'
import NewsAndBlogs from '../components/Homepage/NewsAndBlogs'
import Parteners from '../components/Homepage/Parteners'
import ProjectCards from '../components/Homepage/ProjectCards'
import Publications from '../components/Homepage/Publications'
import Review from '../components/Homepage/Review'
import NavBar from '../components/NavBar'


export default function Home() {
  const DemoProjectcardData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNmZOjN2FqU3KTGcukDjlGpCAo8O5Vl6oDA&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
      title: "Project 1"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVeiUl8GgnqhmmL4cBw59UlwpkRC_NVjZcA&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
      title: "Project 2"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0H5KzKAv71ahgHCdDFv-ycU0oPlbE0zhsw&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
      title: "Project 3"
    },
  ]
  return (

    <div className=" h-[110vh] w-screen backgroundimage bg-no-repeat bg-cover  flex flex-col">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" /> */}
        <title>homepage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <Landing/>
      <div className="mt-[16rem] flex items-center justify-center gap-8 pb-20 ">
        {
          DemoProjectcardData.map((data) => {
            return <ProjectCards key={data.id} data={data} />
          })
        }
      </div>

      <HomeAbout />
      <Publications />
      <Review />
      <NewsAndBlogs />
      <Parteners />
      <Footer />


    </div>
  )
}
