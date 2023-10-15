import Link from "next/link"
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import { DarkButton } from "./DarkButton"
import { groq } from "next-sanity"
import { client } from "@/app/lib/sanity"
import { Category } from "@/typings"


const fetchCategory = async () => {
    const query = groq`*[_type == 'category']`
    const data = await client.fetch(query)
    return data
}

export const Navbar = async () => {

    const categories = await fetchCategory() as Category[];
    return (
        <>
            <div className=" flex fixed items-center top-0 space-x-2 dark:bg-dark-shade w-full bg-white dark:text-gray-100 py-2 border-b dark:border-dark-shade-bright">
                <div className=" justify-between flex w-full items-center max-w-7xl mx-auto">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                </button>
                <Link href={'/'} className=" h-14 overflow-hidden justify-center w-full py-2 flex ">
                        <Image alt="Nillar Logo" className="h-10 object-contain hidden dark:block " src={nillar} />
                        <Image alt="Nillar Logo" className="h-10 block dark:hidden object-contain " src={nillarDark} />
                </Link>
                 <div className="  items-start">
                    <DarkButton />
                </div>
              </div>
        </div>
        {/* <div className=" items-center mx-auto border-t-2 pt-2 dark:border-dark-shade-bright border-primary-light  flex  w-full justify-center">
                <div className=" space-x-3 flex justify-center w-full relative  bg-green-30 items-center">
                        <Link href={'/how-to'} className="uppercase dark:bg-stone-900 dark:text-stone-200 py-1 bg-slate-100 px-6 font-header hover:underline" >HOW TO</Link>
                        <Link href={'/news'} className="uppercase dark:bg-stone-900 dark:text-stone-200 py-1 bg-slate-100 px-6 font-header hover:underline" >NEWS</Link>
                        <Link href={'/articles'} className="uppercase dark:bg-stone-900 dark:text-stone-200 py-1 bg-slate-100 px-6 font-header hover:underline" >ARTICLES</Link>
                        {
                        categories.map((category: Category) => {
                            return (
                                <Link href={`/${category.slug?.current}`} className="uppercase dark:bg-stone-900 dark:text-stone-200 py-1 bg-slate-100 px-6 font-header hover:underline" >
                                    { category.title }
                                </Link>

                                )
                            })
                        }
                    <div className="  flex absolute right-8 items-start pl-10">
                        <DarkButton />
                    </div>
                </div>
        </div> */}
        </>
    )
}