import React from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { Article, News } from '@/typings'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { fetchSingleCategory } from '@/actions/articles'




// const fetchingTech = async () => {
//     const query = groq`*[_type == 'news' && references('7baf5faa-eb22-44f8-8345-3feef0e9e3e6')]
//   [0...2] 
//     `
//     const data = await client.fetch(query, { revalidate: 10 })
//     return data

// }

// const fetchMoreTech = async () => {
//     const query = groq`*[_type == 'news']
//   [2...6
//   ] 
//     `
//     const data = await client.fetch(query, { revalidate: 10 })
//     return data

// }

export const HomeTechnology = async () => {

    const leadershipArticles = await fetchSingleCategory('leadership') as Article[];

    return (
    <div className=" max-w-6xl mx-auto px-10">
        <h3 className=' text-3xl font-header my-10 py-2 border-line-color dark:border-stone-600 border-b'>TECHNOLOGY</h3>
        <div className='flex h-full lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row'>
            <div className=" lg:w-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-auto ">
                  
            </div>

                <div className=" lg:w-2/6  h-full py-10 border-t lg:border-t-0 lg:border-l border-line-color dark:border-stone-500">
                    
                    <div className=" border-b border-line-color dark:border-stone-500">
                        <h3 className=' font-heaabbder text-2xl'>LATESTS</h3>
                    </div>

                </div>
            </div>
     </div>
  )
}
