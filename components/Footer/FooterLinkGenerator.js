import Link from 'next/link'
import React from 'react'

function FooterLinkGenerator({data}) {
  return (
    <div className="flex flex-col ">

    <h1 className="text-white text-xl font-bold font-Montserrat">{data.category}</h1>
    <div className="flex flex-col pl-2 text-sm gap-1 mt-2">
        {
            data.Links.map((links)=>{
                return <Link key={links.title} href={links.to} >{links.title}</Link>
            })
        }
       
    </div>
</div>
  )
}

export default FooterLinkGenerator