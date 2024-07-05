
import { client } from '@/app/lib/sanity'
import { Category } from '@/typings'
import { groq } from 'next-sanity'
import Link from 'next/link'
import React from 'react'
import { fetchAllCategory } from '@/actions/articles'


export const CategoriesNav = async () => {
    const categories = await fetchAllCategory() as Category[];
    return (
        <div className='w-full mx-auto px-10 border-b dark:bg-black bg-white '>
            <div className=" px-4 flex justify-between items-center">
                {
                    categories.map((single: Category) => {
                        return <Link href={`/${single.slug?.current}`} key={single._id} className=' px-2 py-2 flex border-b-2 border-transparent hover:border-neutral-400 dark:hover:border-slate-400 dark:hover:bg-dark-shade-bright justify-center w-full'>
                            <span>{ single.title }</span>
                        </Link>
                    })
                }
            </div>
        </div>
  )
}
