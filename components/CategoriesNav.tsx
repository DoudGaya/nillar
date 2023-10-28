
import { client } from '@/app/lib/sanity'
import { Category } from '@/typings'
import { groq } from 'next-sanity'
import Link from 'next/link'
import React from 'react'


const fetchCategory = async () => {

    const query = await groq`*[_type == 'category']`
    const data = await client.fetch(query,  { next: { revalidate: 10 }})
    return data
}

export const CategoriesNav = async () => {
    const categories = await fetchCategory() as Category[];
  return (
        <div className='w-full mx-auto px-10 border-b bg-white dark:bg-dark-shade border-primary dark:border-dark-shade-bright '>
            <div className=" px-4 flex justify-between items-center">
                {
                    categories.map((single: Category) => {
                        return <Link href={`/${single.slug?.current}`} className=' px-2 py-2 flex hover:border-b-2 hover:border-black  dark:hover:bg-dark-shade-bright justify-center w-full'>
                            <span>{single.title}</span>
                        </Link>
                    })
            }
            </div>
        </div>
  )
}
