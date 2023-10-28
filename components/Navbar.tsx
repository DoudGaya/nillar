import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"


export const Navbar = () => {
    return (
        <>
            <div className=" flex items-center space-x-2 dark:bg-dark-shade px-10 w-full bg-white dark:text-gray-100 py-2 border-b dark:border-dark-shade-bright">
                <div className=" justify-between max-w-7xl flex w-full items-center mx-auto">
                    <Link href="/about" className=" hover:underline flex-none">About Us</Link>
                <Link href={'/'} className=" h-14 overflow-hidden justify-center w-full py-2 flex ">
                        <Image alt="Nillar Logo" className="h-10 object-contain hidden dark:block " src={nillar} />
                        <Image alt="Nillar Logo" className="h-10 block dark:hidden object-contain " src={nillarDark} />
                </Link>
                 <div className="  items-start">
                    <DarkButton />
                </div>
              </div>
        </div>
        </>
    )
}