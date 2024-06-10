import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { Article } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { fetchAllArticles } from '@/actions/articles'


const PortableTextBox = {
    types: {
      image: ({value}: {value: any}) => {
        return <Image src={urlForImage(value).url()} height={900} width={900} alt='' />
      }
    }
  }


export const FeaturedSection = async () => {
    const all = await fetchAllArticles() as Article[];
    const featured =  all[1] as Article
    
    return (
    <div className="max-w-4xl mx-auto w-full px-10">
             <h3 className=' text-3xl font-header my-10 py-2 border-line-color dark:border-stone-600 border-b '>FEATURED</h3>
      <div className='h-full flex-col w-full bg-red-300 grid grid-cols-4'>
            <div className="">
                <div className="flex w-full h-full">
                    <Image src={urlForImage(featured.coverImage).url()} className=' flex h-full object-cover object-center  w-full' alt='' width={1000} height={1000} />
                </div>                
          </div>
          <div className=" py-10 h-full flex flex-col space-y-6 col-span-3 bg-[#F7F7F7] dark:bg-stone-800 px-6 ">
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
