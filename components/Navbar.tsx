import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"

export const Navbar = () => {
    return (
        <div className="
            w-full flex
            flex-col fixed
            top-0
            justify-center
            space-x-2
            dark:bg-dark-shade
            bg-banner
            dark:text-gray-100
            py-2
            border-b
            dark:border-dark-shade-bright"
        >
            <div className="
            max-w-6xl
            items-center
            mx-auto flex
            justify-between"
            >

                <div className=" flex items-start">
                    <Link href={'/'} className=" h-20 overflow-hidden py-2 flex stroke-black fill-black items-start ">
                        <Image alt="Nillar Logo" className="h-16 block dark:hidden object-contain object-left " src={nillar} />
                        <Image alt="Nillar Logo" className="h-16 hidden dark:block object-contain object-left " src={nillar} />
                    </Link>
                </div>
                <div className=" space-x-4 flex bg-green-30 items-center flex-none">
                    <Link href={'/how-to'} className="uppercase font-header hover:underline" >HOW TO</Link>
                    <Link href={'/news'} className="uppercase font-header hover:underline" >NEWS</Link>
                    <Link href={'/articles'} className="uppercase font-header hover:underline" >ARTICLES</Link>
                    <div className="  flex items-start pl-10">
                        <DarkButton />
                    </div>
                </div>
            </div>
              

        </div>
    )
}