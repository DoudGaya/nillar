"use client"
import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"
import { useState } from "react"
import { DesktopSideNavContents } from "./mobileNavbarComponents/DesktopSideNavContents"


export const Navbar = () => {

    const [navSwitch, setNavSwitch] = useState(false)
    return (
      <>
        <div className=" relative  ">
          <div className=" absolute ">
            <DesktopSideNavContents navSwitch={navSwitch} setNavSwitch={setNavSwitch} />
          </div>
          <div className=" flex items-center space-x-2 dark:bg-dark-shade py-2 lg:px-10 px-8 w-full md:bg-white bg-white/80 dark:text-gray-100  border-b dark:border-dark-shade-bright">
            <div className=" justify-between max-w-7xl flex w-full items-center mx-auto">
              <Link 
                href="/about"
                className=" hover:underline hidden md:flex flex-none">
                About Us
              </Link>
              <Link
                href={"/"}
                className=" h-14 overflow-hidden justify-start lg:justify-center w-full py-2 flex ">
                <Image
                  alt="Nillar Logo"
                  className="h-10 object-contain object-left lg:object-center hidden dark:block "
                  src={nillar}
                />
                <Image
                  alt="Nillar Logo"
                  className="h-10 block dark:hidden object-contain object-left lg:object-center "
                  src={nillarDark}
                />
              </Link>
              <div className=" flex space-x-3 justify-center  items-center">
                <div className=" flex-none hidden lg:flex">
                  <DarkButton />
                </div>
                {!navSwitch ? (
                  <button
                    onClick={() => {
                      setNavSwitch(true);
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 transition-all h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setNavSwitch(false);
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 transition-all h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}