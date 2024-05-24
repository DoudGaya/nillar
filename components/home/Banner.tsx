import { Article } from "@/typings"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"


export const HomeBanner = async ( 
  { bannerArticle, bannerSideArticles }: 
  {
    bannerArticle: Article
    bannerSideArticles: Article[]

  }) => {



    return (
        <div className=" max-w-[1200px] mx-auto px-10 w-full flex flex-col ">
        <h2 className=' text-2xl lg:text-3xl py-6'>LATEST</h2>
        <div  className=" bg-cover grid gap-y-12 grid-cols-1 w-full gap-x-10 lg:grid-cols-6">

          <div style={{ backgroundImage: `url('${urlForImage(bannerArticle?.coverImage).url()}')`}} className=" lg:col-span-4 w-full bg-center bg-contain flex border-b lg:border-none items-end ">
            <div className=" ">
              <div className=" h-1/2 flex w-full flex-col py-20 bg-gradient-to-b from-transparent via-black/70 text-white px-10 z-0 to-black" >
                <Link href={`${bannerArticle?.articleType?.slug?.current}/${bannerArticle?.slug?.current}`} className=" text-xl font-keisei hover:underline"> {bannerArticle.title} </Link>
                <p className=" line-clamp-2  font-poppin"> { bannerArticle?.overview} </p>
              </div>
            </div>
           
          </div>
          <div className=" lg:col-span-2 ">
          
    <div className=" grid grid-cols-1 w-full space-y-4">
        { bannerSideArticles.length > 0 ?
          bannerSideArticles.map((item: Article) => {
            return (
              <div key={item._id} className=" w-full dark:bg-dark-shade-bright py-4 space-y-2 px-4 border-b  flex flex-col ">
                <Link href={`/${bannerArticle?.articleType?.slug?.current}/${item.slug.current }`} className="font-keisei w-full line-clamp-2 dark:text-stone-200 text-stone-900 font-semibold hover:underline  ">{item.title}</Link>
                <Link href={`/author/${ item.author.name }`} className="font-newsreader text-md w-full dark:text-gray-500 text-gray-700 hover:underline"><span className=" font-sans">{item.author.name}</span> </Link>
            </div>
            )
          })
            :
            <p>No Article Available</p>
          }
          <div className=" w-full flex py-2 items-center justify-center">
            <Link href={'/article'} className=" text-xl font-header uppercase  px-6 text-black py-2">Learn More</Link>
          </div>
        </div>
       </div>
          
       </div>
      </div>
    )
}