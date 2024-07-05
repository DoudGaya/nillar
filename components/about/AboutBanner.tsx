import React from 'react'
import Link from 'next/link'

export const AboutBanner = () => {
  
  return (
    <div className={`bg-white border-b-2 space-y-2 border-black flex-col dark:bg-dark-shade-bright flex items-center justify-center h-[150px]`}>
          <p className=' text-3xl uppercase font-header tracking-wide'>About Us </p>
          <Link href="/">Home </Link>
    </div>
  )
}
