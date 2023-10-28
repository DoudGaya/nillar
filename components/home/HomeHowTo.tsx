import React from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { client } from '@/app/lib/sanity'
import { HowTo } from '@/typings'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'



const fetchHowTos = async () => {
    const query = groq`
        *[_type == 'howTo'] {
            _id, 
            title,
            category->,
            author->,
            slug {
                current
            },
            _createdAt,
            _updatedAt,
            coverImage,
        }
    `
    const howTos = await client.fetch(query, { next: { revalidate: 10 } })
    return howTos
}

export const HomeHowTo = async () => {
    const howtoArticles = await fetchHowTos();
  return (
      <div className=' max-w-5xl mx-auto flex px-10 '>
          <div className=" flex flex-col space-y-6 items-center place-items-center w-full">
              <div className=" flex place-items-center ">
                  <h3 className=' font-keisei text-2xl font-semibold'>HOW TO GUIDES</h3>
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                {
                    howtoArticles.map( (single: HowTo) => {
                        return (
                            <div className=" border dark:border-stone-500 border-line-color " key={single._id}>
                                <Link href={`/how-to/${single.slug.current}`}>
                                    <Image src={urlForImage(single.coverImage).url()} className=' object-cover object-center h-[200px] w-full' height={1000} width={1000} alt={''} />
                                </Link>
                            <div className=" font-keisei bg-[#F7F7F7] dark:bg-stone-950 space-y-6 p-4 flex flex-col">
                                <Link href={`/how-to/${single.slug.current}`} className='font-semibold text-sm  hover:underline'>{single.title}</Link>
                                <div className="justify-between items-center text-sm flex ">
                                    <span>{ new Date(single._createdAt).toISOString().split('T')[0] }</span>
                                    <Link className=' dark:bg-stone-600 bg-primary-light px-4 py-1' href={`/how-to/${single.slug.current}`}>Learn More</Link>
                                </div>
                            </div>
                            </div>
                    )
                  })
                  }
              </div>
               <div className=" flex justify-center">
                  <Link href={`/how-to`} className=' py-2 px-6 font-keisei font-semibold bg-stone-950 text-white '> MORE GUIDES.</Link>   
                </div>
          </div>
    </div>
  )
}
