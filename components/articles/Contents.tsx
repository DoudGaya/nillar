'use client'
import { Article, News } from '@/typings'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { RiTwitterXFill } from 'react-icons/ri'
import Image from 'next/image'
import {FaLinkedinIn} from 'react-icons/fa'
import { urlForImage } from '@/sanity/lib/image'
import {BiLogoFacebook} from 'react-icons/bi'
import { PortableText } from '@portabletext/react'
import { BiLogoInstagram } from 'react-icons/bi'
import { socials } from '@/data/schemas'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


interface SocialLinks {
  id: number;
  name: string;
  url: string;
  icons: ReactNode
}

// const socials = [
//   {
//     title: 'instagram',
//     url: '',
//     button: '' ,
//   },
//   {
//     title: 'twitter',
//     url: '',
//     button: '',
//   },
//   {
//     title: 'linkedin',
//     url: '',
//     button: '',
//   },
//   {
//     title: 'facebook',
//     url: '',
//     button: '',
//   }
// ]

export const Contents = ({ article, all }: { article: Article, all: News[] }) => {


  const PortableTextBox = {
    types: {
      image: ({value}: {value: any}) => {
        return <Image src={urlForImage(value).url()} height={900} width={900} alt='' />
      }
    }
  }

  return (
    <div className='grid w-full grid-cols-1 px-8 lg:grid-cols-4 py-10 gap-8'>
      <div className=" w-full h-full ">
         <div className=" xl:flex-col py-6 space-y-6 hidden xl:flex">
              <div className=" border-b border-dark-shade-bright">
                  <div className=" flex flex-row pb-4 dark:bg-dark-shade border-b border-gray-300  rounded-sm ">
                      <input type="search" placeholder='Search Articles' className=' font-newsreader w-full dark:bg-dark-shade-bright bg-gray-200 outline-none py-3 px-3 rounded-sm ' />
                      <button className=' bg-dark-shade dark:bg-stone-500 px-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-slate-200 dark:fill-slate-800">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                      </button>
                </div>
              </div> 
        <div className= " flex flex-col space-y-4">
          {
          all.map((single: News) => {
              return (
                <Link key={single._id}  href={`/${single._type}/${single?.slug?.current}`} >
                  <div  className=' border-b flex items-end dark:bg-dark-shade-bright bg-[rgb(235,235,235)] px-3 py-4 dark:border-b-primary-light/50 border-gray-300 dark:border-dark-shade-bright'>
                    <p className=' line-clamp-2 font-newsreader'> {single?.title}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
          </div>
         </div>
      <div className=" lg:col-span-2">
        <div className=" flex flex-col space-y-6">
          <h1 className=' font-header text-2xl lg:text-3xl ' >{article?.title}</h1>
          <div className=" flex bg-primary flex-col dark:bg-dark-shade-bright rounded-lg items-start space-y-2 lg:items-center lg:flex-row px-6 py-4 justify-between">
            <div className="flex w-full  space-x-2 flex-row items-center">
              {/* <Link href={`/author/${article?.author.slug.current}`} className='font-sans font-semibold pr-2 text-md'>{article.author?.name}</Link> |  */}
              <Link href={``} className='font-sans font-semibold pr-2 text-md'>{article?.author?.name}</Link> | 
              <Link href={`https://twitter.com/${article.author?.twitter}`} target='_blank' className=' hover:bg-stone-400 rounded-md p-1'>
                <RiTwitterXFill />
              </Link>
               <Link href={`${article.author?.linkedin}`} target='_blank' className=' hover:bg-stone-400 rounded-md p-1'>
                <FaLinkedinIn />
              </Link>
            </div>

            <div className="">
              <Link href={`/${article.category.title}`} className=' uppercase underline border-b lg:border-b-0 hover:underline font-poppin font-semibold'>{article.category.title}</Link>
            </div>
            
          </div>
          <div className=" py-4 border-b border-dark-shade flex flex-col space-y-3">
            <Image src={urlForImage(article.coverImage).url()} className=' rounded-lg ' width={1000} height={1000} alt="" />
            <span className=' italic text-sm'><span className=' font-bold'>Source:</span> {article.imageSource} </span>
          </div>
          <p className=' font-newsreader italic'>
            {article.overview}
          </p>
          <div className=" flex text-justify flex-col cms-contents space-y-3">
                <PortableText value={article.content} components={PortableTextBox}  />
          </div>
        </div>
      </div>


     
      <div className=" ">
        <div className=" flex flex-col w-full bg-primary-light dark:bg-dark-shade-bright py-6 px-4 rounded-xl space-y-8  ">
            <p className=' font-header text-2xl border-b pb-3 '>Follow US </p>
              <div className=" grid grid-cols-4">
                  {
              socials.map((s: SocialLinks) => {
                return (
                  <Link key={s.id} href={s.url}>
                    {s.icons}
                  </Link>
                      )
                    })
                  }
              </div>        
             </div>
      </div>
       <div className=" w-full h-full ">
         <div className=" xl:flex-col py-6 space-y-6 lg:hidden flex flex-col">
              <div className=" border-b border-dark-shade-bright">
                  <div className=" flex flex-row pb-4 dark:bg-dark-shade border-b border-gray-300  rounded-sm ">
                      <input type="search" placeholder='Search Articles' className=' font-newsreader w-full dark:bg-dark-shade-bright bg-gray-200 outline-none py-3 px-3 rounded-sm ' />
                      <button className=' bg-dark-shade dark:bg-stone-500 px-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-slate-200 dark:fill-slate-800">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                      </button>
                </div>
              </div> 
        <div className= " flex flex-col space-y-4">
          {
          all.map((single: News) => {
              return (
                <Link key={single._id} href={`/${single._type}/${single?.slug?.current}`} >
                  <div  className=' border-b flex items-end dark:bg-dark-shade-bright bg-[rgb(235,235,235)] px-3 py-4 dark:border-b-primary-light/50 border-gray-300 dark:border-dark-shade-bright'>
                    <p className=' line-clamp-2 font-newsreader'> {single?.title}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
          </div>
      </div>
      
    </div>
  )
}