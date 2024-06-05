import { client } from '@/app/lib/sanity'
import { Category } from '@/typings'
import { groq } from 'next-sanity'
import { fetchCategory } from '../CategoriesNav'
import { Article, News } from '@/typings'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { ArticleSocialLinks } from '../SocialLinks'
import { notFound } from 'next/navigation'




const fetchSingleCategory = async (category: string) => {
  const query = groq`
  *[_type == 'category' && slug.current == "${category}"] | {
  title,
  _id,
  "articles": *[_type == 'article' && references(^._id)] | {
    ...,
    articleType->,
    author->,
  }
}[0]
`
  const data = await client.fetch(query, { revalidate: 10 });
  return data
} 



export const CategoryContents = async ({ category }: {
  category: string
}) => {

  const datas = await fetchSingleCategory(category) as Category
  const restOfCategories = datas?.articles?.slice(1)



  if (!category || !datas || !restOfCategories) {
    return notFound()
  }
  
   const PortableTextBox = {
    types: {
      image: ({value}: {value: any}) => {
        return <Image src={urlForImage(value).url()} height={900} width={900} alt='' />
      }
    }
  }

  const allCategories = await fetchCategory()
  return (
      <div className='grid w-full grid-cols-1 px-8 lg:grid-cols-4 py-10 gap-8'>
      <div className=" w-full h-full ">
         <div className=" xl:flex-col space-y-6 hidden xl:flex">
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
          { allCategories.length >= 0 ?
          allCategories.map((single: News) => {
              return (
                <Link key={single._id}  href={`/${single?.slug?.current}`} >
                  <div  className=' border-b flex items-end dark:bg-dark-shade-bright bg-[rgb(235,235,235)] px-3 py-4 dark:border-b-primary-light/50 border-gray-300 dark:border-dark-shade-bright'>
                    <p className=' line-clamp-2 hover:underline font-newsreader'> {single?.title}</p>
                  </div>
                </Link>
              )
          })
              : ( 
                <p>There are no available article here</p>
               )
          }
        </div>
          </div>
         </div>
      <div className=" lg:col-span-2">
        <div className=" flex flex-col">
          <div className=" justify-end py-3 flex dark:bg-dark-shade-bright bg-primary px-4">
            <h1 className=' font-header uppercase'>{datas?.title}</h1>
          </div>
          {datas.articles.length < 1 ?
            (
              <div className=' flex w-full py-10 justify-center'>
                <p className=' text-lg font-newsreader'>There is no available articles on {datas?.title} </p>
              </div>
            ) :
            (
            <div className=" py-4 border-b border-dark-shade flex flex-col space-y-3">
              <Image src={urlForImage(datas?.articles[0]?.coverImage).url()} className=' h-[250px] object-cover object-center ' width={1000} height={1000} alt="" />
              
              <Link href={ `${datas?.articles[0]?.articleType?.slug?.current}/${datas?.articles[0].slug.current}` } className=' hover:cursor-pointer font-header text-2xl lg:text-2xl' >{datas.articles[0].title}</Link>
              <span className='italic text-sm'><span className='font-bold'>Source:</span> {datas.articles[0].imageSource} </span>
            </div>
            )
         }
          <p className='font-newsreader line-clamp-2 italic'>{datas.articles[0]?.overview}</p>
        </div>
        <div className=" py-6 my-6 border-dark-shade-bright dark:border-primary flex flex-col space-y-6 border-y">
            {
            restOfCategories.map((restOfArticle: Article) => {
              return (
                   <Link key={restOfArticle._id} href={`article/${restOfArticle.slug.current}`} className=" w-full  flex flex-col lg:flex-row lg:space-x-3 ">
                      <div className=" lg:w-2/6 w-full">
                          <Image src={urlForImage(restOfArticle?.coverImage).url()} className=' h-full object-cover object-center w-full ' width={1000} height={1000} alt="" />
                      </div>
                      <div className=" flex flex-col space-y-2 w-4/6 py-3 lg:px-2">
                        <h2 className='font-header text-xl'>{restOfArticle.title}</h2>
                        <p className='font-newsreader line-clamp-2 italic'>{restOfArticle?.overview}</p>  
                      </div>
                  </Link>
                )
              })
            }
        </div>
      </div>
      <div className=" ">
      <ArticleSocialLinks />
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
          allCategories.map((single: News) => {
              return (
                <Link key={single._id} href={`/${single?.slug?.current}`} >
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
