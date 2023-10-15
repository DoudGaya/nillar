import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"

export const Navbar = () => {
    return (
        <div className="w-full flex flex-col fixed items-center top-0 justify-center space-x-2 dark:bg-dark-shade bg-banner dark:text-gray-100 py-2 border-b dark:border-dark-shade-bright"
        >
                <Link href={'/'} className=" h-20 overflow-hidden  justify-center w-full py-2 flex ">
                        <Image alt="Nillar Logo" className="h-16  object-contain hidden dark:block " src={nillar} />
                        <Image alt="Nillar Logo" className="h-16 block dark:hidden object-contain " src={nillarDark} />
                </Link>
            <div className=" items-center mx-auto border-t-2 pt-2 dark:border-dark-shade-bright border-primary-light  flex  w-full justify-center"
            >
                <div className=" space-x-12 flex justify-center w-full relative  bg-green-30 items-center">
                    <Link href={'/how-to'} className="uppercase font-header hover:underline" >HOW TO</Link>
                    <Link href={'/news'} className="uppercase font-header hover:underline" >NEWS</Link>
                    <Link href={'/articles'} className="uppercase font-header hover:underline" >ARTICLES</Link>
                    <div className="  flex absolute right-8 items-start pl-10">
                        <DarkButton />
                    </div>
                </div>
            </div>
              

        </div>
    )
}