'use client'
import React from 'react'
import logo from '@/public/logo_light.png'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { NavContext } from './context/MobileNavContext'

export const MobileNav = () => {


  const { changeNav }: any = useContext(NavContext)



  return (
  <div className=" w-full top-0 flex-col z-10 ">
       <div className=' flex w-full justify-between p-4 bg-banner dark:bg-stone-700 border-b border-line-color dark:border-stone-500 dark-bg-primary'>
          <Link href={'/'} className='  '>
              <Image src={logo} className=' h-10 w-auto' alt='Nillar Logo' />
          </Link>
          <div className="">
            <button className=' p-3 shadow-lg  rounded-lg' onClick={() => changeNav()}>
            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
          </div>
      </div>
      
      {/* <div className=" w-full flex justify-end px-4 py-4">
        <DarkButton />
      </div> */}
   </div>
  )
}
