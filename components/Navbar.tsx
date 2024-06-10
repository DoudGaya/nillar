import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"
import { useState } from "react"
import { DesktopSideNavContents } from "./mobileNavbarComponents/DesktopSideNavContents"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavContents } from "./navigations/NavContents"
import { NavSwitcher } from "./NavSwitcher"





export const Navbar = () => {
    return (
      <>
        <div className=" relative">
          <div className=" flex items-center space-x-2 dark:bg-dark-shade py-4 lg:px-10 px-8 w-full md:bg-white bg-white/80 dark:bg-black  dark:text-gray-100  border-b dark:border-dark-shade-bright">
            <div className=" justify-between max-w-7xl flex w-full items-center mx-auto">
              <Link 
                href="/about"
                className=" hover:underline hidden md:flex flex-none">
                About Us
              </Link>
              <Link
                href={"/"}
                className=" h-10 overflow-hidden justify-start lg:justify-center w-full py-1 flex ">
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
                <div className=" flex-none lg:flex">
                  {/* <DarkButton /> */}
                  <Sheet>
                  <SheetTrigger>
                      <NavSwitcher />
                  </SheetTrigger>
                    <SheetContent className="w-[300px] sm:w-1/2" side={'left'}>
                      <NavContents />
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
}