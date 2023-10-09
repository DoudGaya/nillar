import React from 'react'
import Link from 'next/link'
import { topicItems } from '@/data/schemas'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { Article, News } from '@/typings'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'


const fetchingTech = async () => {
    const query = groq`*[_type == 'news' && references('7baf5faa-eb22-44f8-8345-3feef0e9e3e6')]
  [0...2] 
    `
    const data = await client.fetch(query)
    return data

}

const fetchMoreTech = async () => {
    const query = groq`*[_type == 'news']
  [2...6
  ] 
    `
    const data = await client.fetch(query)
    return data

}

export const HomeTechnology = async () => {

    const techArticles = await fetchingTech() as Article[];
    const moreTech = await fetchMoreTech() as News[]

    return (
    <div className=" max-w-6xl mx-auto px-10">
        <h3 className=' text-3xl font-header my-10 py-2 border-line-color dark:border-stone-600 border-b '>TECHNOLOGY</h3>
        <div className='flex h-full lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row'>
                <div className=" lg:w-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-auto ">
                    {
                        techArticles.map((s: Article) => {
                            return (
                                 <div key={s._id} className=" flex flex-col">
                                    <div className=" h-[300px]">
                                        <Image src={urlForImage(s.coverImage).url()} width={1000} height={1000} alt='' className=' object-cover object-center h-full w-full' />
                                    </div>
                                        <div className=" py-4 bg-stone-200 dark:bg-stone-800 space-y-6 px-2">
                                            <Link href={`/news/${s.slug.current}`} className="font-semibold line-clamp-2 hover:underline font-keisei text-lg ">
                                               {s.title}
                                            </Link> 
                                        <div className=" line-clamp-2 font-newsreader">
                                                {s.overview}
                                        </div>
                                        </div>
                                </div>
                            )
                        } )
                    }
            </div>

                <div className=" lg:w-2/6  h-full py-10 border-t lg:border-t-0 lg:border-l border-line-color dark:border-stone-500">
                    
                    <div className=" border-b border-line-color dark:border-stone-500">
                        <h3 className=' font-header text-2xl'>LATESTS</h3>
                    </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
                         {
                        moreTech.map((more: News) => {
                            return (
                        <div key={more._id} className=" flex-col border-b border-primary space-y-2 py-3 ">
                            <div className=" flex space-x-4">
                                 <Image src={urlForImage(more.coverImage).url()} width={1000} height={1000} alt={'Latest Tech news'} className=" h-[100px] w-[100px] bg-yellow-200" />
                                    <div className=" flex flex-col">
                                    <p className=' text-xs'></p>
                                <Link href={`/news/${more.slug.current}`} className=" font-semibold hover:underline font-keisei">{more.title}</Link>
                             </div>
                            </div>
                         </div>
                        )
                    })        
                }
               </div>
                </div>
            </div>
     </div>
  )
}
