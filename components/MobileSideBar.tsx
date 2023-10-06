"use client"
import { useContext } from "react"
import { NavContext } from "./context/MobileNavContext"
import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo_light.png'

export const MobileSideBar = () => {

    const { mobileNav }: any= useContext(NavContext)
  return (
      <div className="">
          {
              mobileNav &&
          (
            <div className='w-2/3 block lg:hidden fixed dark:border-stone-500 border-r border-line-color  dark:bg-[rgb(68,64,60)] h-screen z-50 bg-banner drop-shadow-lg'>
              <div className=" p-3 flex flex-col space-y-4">
              <div className=" w-full flex flex-col">
                <Link href={''} className=" border-b  pb-3">
                  <Image src={logo} alt="Nillar" />
                </Link>
                  <ul className=" flex flex-col my-4 space-y-3 w-full">
                    <li className=" w-full flex">
                      <Link href={''} className=" font-header uppercase  py-2 px-3 w-full border-b border-primary-light dark:border-stone-500">
                        How To 
                      </Link>
                    </li>
                    <li className=" w-full flex">
                      <Link href={''} className="font-header uppercase py-2 px-3 w-full border-b border-primary-light dark:border-stone-500">
                        Productivity
                      </Link>
                    </li>
                    <li className=" w-full flex">
                      <Link href={''} className="font-header uppercase py-2 px-3 w-full border-b border-primary-light dark:border-stone-500">
                        News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) 
          }
          
   </div>
  )
}
