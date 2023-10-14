import React from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { Article } from '@/typings'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'





const fetchingBusinessArticles = async () => {    
    const query = groq`*[_type == 'news' && references('96886e79-a26f-4a28-add1-03781f081479')][0...7]`
    const data = await client.fetch(query, { next: { revalidate: 10 } })
    return data
}

export const Acitivities = async () => {

    const articles = await fetchingBusinessArticles() as Article[];
    return (
    <div className=" max-w-6xl mx-auto ">
        <h3 className=' text-3xl font-header my-10 px-8 py-2 border-line-color dark:border-stone-600 border-b '>BUSINESS NEWS</h3>
            <div className='flex h-full lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row'>
                 <div className=" lg:w-3/6  h-full border-t lg:border-t-0  border-line-color dark:border-stone-500">
                    <div className=" border-b px-6 border-line-color dark:border-stone-500">
                        <h3 className=' font-header text-2xl'>LATESTS</h3>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
                        {
                        articles.slice(0, 3).map((item) => {
                            return (
                        <div key={item._id} className=" flex-col border-b border-line-color px-6 space-y-2 py-3 ">
                            <div className=" flex  space-x-4">
                                 <Image src={urlForImage(item.coverImage).url()} alt={'Image'} width={1000} height={1000} className=" h-[100px] w-[100px]" />
                                    <div className=" flex flex-col justify-center">
                                        <p className=' text-xs'>2 Days </p>
                                <Link href={`/news/${item.slug.current}`} className=" font-semibold hover:underline font-keisei">{item.title}</Link>
                             </div>
                            </div>
                         </div>
                        )
                    })        
                }
                    </div>
                    
                </div>
            <div className=" lg:w-3/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    {
                        articles.slice(4, 8).map((s: Article) => {
                            return (
                                 <div key={s._id} className=" flex flex-col">
                                     <Image src={urlForImage(s.coverImage).url()} alt={'Image'} width={1000} height={1000} className=" h-[150px] w-full bg-yellow-200" />
                                        <div className=" py-2 bg-stone-200 dark:bg-stone-800 space-y-6 px-2">
                                            <Link href={`/news/${s.slug.current}`} className=" font-semibold line-clamp-2 hover:underline font-keisei  ">
                                                {s.title}
                                            </Link> 
                                        </div>
                                </div>
                            )
                        } )
                    }
            </div>
            </div>
     </div>
  )
}
