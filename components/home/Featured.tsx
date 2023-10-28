import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { Article } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'



const fetchFeatured = async () => {
    const query = groq`
    *[_type == 'article'][0]
    `
    const data = await client.fetch(query, { next: { revalidate: 10 } });
    return data;
}


export const FeaturedSection = async () => {
    const featured = await fetchFeatured() as Article;
    return (
    <div className="max-w-4xl mx-auto px-10">
             <h3 className=' text-3xl font-header my-10 py-2 border-line-color dark:border-stone-600 border-b '>FEATURED</h3>
      <div className=' flex h-full flex-col lg:flex-row'>
            <div className=" lg:w-2/5 flex">
                <div className=" flex w-full h-full">
                    <Image src={urlForImage(featured.coverImage).url()} className=' flex h-full object-cover object-center  w-full' alt='' width={1000} height={1000} />
                </div>                
          </div>
          <div className=" lg:w-3/5 py-10 h-full flex flex-col space-y-6 bg-[#F7F7F7] dark:bg-stone-800 px-6 ">
                    <Link href={`/article/${featured.slug.current}`} className=' font-header hover:underline font-semibold text-2xl'>{ featured.title }</Link>
              <div className=" text-justify font-newsreader line-clamp-4 ">
                {featured.overview}
              </div>
              <div className="">
                  <Link href={`/article/${featured.slug.current}`} className=' hover:border bg-primary-light dark:bg-stone-600 px-6 py-2 font-keisei'> Read More. </Link>
              </div>
          </div>
    </div>
     </div>
  )
}
