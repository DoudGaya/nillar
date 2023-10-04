import Link from "next/link"
import lightLogo from '@/public/logo_light.png'
import darkLogo from '@/public/nillar_dark.png'
import Image from "next/image"
import { DarkButton } from "./DarkButton"

export const Navbar = () => {
    return (
        <div className=" w-full flex fixed top-0 justify-center space-x-2 dark:bg-dark-shade bg-banner dark:text-gray-100 py-2 border-b dark:border-dark-shade-bright">
            <div className=" max-w-5xl  items-center mx-auto flex  justify-between">
                <div className=" space-x-4 flex-none">
                    <Link href={'/productivity'} className="uppercase font-header hover:underline" >PRODUCTIVITY</Link>
                    <Link href={'how-to'} className="uppercase font-header hover:underline" >HOW TO</Link>
                </div>
                <div className="">
                    <Link href={'/'} className=" h-20 overflow-hidden py-2 ">
                        <Image alt="Nillar Logo" className="h-16 object-contain" src={lightLogo} />
                        {/* <Image alt="Nillar Logo" className="h-16 hidden dark:block object-contain" src={darkLogo} /> */}
                    </Link>
                </div>
                <div className=" space-x-4 flex-none">
                    <Link href={'business'} className="uppercase font-header hover:underline" >BUSINESS</Link>
                    <Link href={'finance'} className="uppercase font-header hover:underline" >FINANCE</Link>
                </div>
            </div>
              <div className=" absolute z-10 right-0 top-6 px-10">
                    <DarkButton />
                </div>

        </div>
    )
}