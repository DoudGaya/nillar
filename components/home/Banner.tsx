import { Article } from "@/typings"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export const HomeBanner = async ( 
  { bannerArticle, bannerSideArticles }: 
  {
    bannerArticle: Article
    bannerSideArticles: Article[]
  }) => {
    return (
        <div className=" w-full mx-auto flex flex-col ">
        <div  className=" bg-cover grid gap-y-12 grid-cols-1 lg:grid-cols-4 w-full">
          <div style={{ backgroundImage: `url('${urlForImage(bannerArticle?.coverImage).url()}')`}} className=" bg-no-repeat h-screen md:h-[90vh] bg-cover lg:col-span-3 w-full bg-center flex border-b lg:border-none items-end ">
           
            <div className=" from-transparent w-full via-black/80 text-white to-black">
              <div className=" flex w-full flex-col pt-20 pb-10 bg-gradient-to-b space-y-3 px-6 z-0 lg:px-10 " >
                <Link href={`${bannerArticle?.articleType?.slug?.current}/${bannerArticle?.slug?.current}`} className=" text-2xl lg:text-4xl pt-10 font-keisei hover:underline"> {bannerArticle.title} </Link>
                <p className=" line-clamp-2 text-lg font-poppin"> { bannerArticle?.overview} </p>
              </div>
            </div>
           
          </div>
          <div className="">
            <div className=" flex flex-col px-6 w-full py-12 space-y-4">
              <div className=" w-full flex ">
                <h2 className=" bg-red-500 font-keisei text-white px-2 py-1 text-xl">Latest News</h2>
              </div>
              { bannerSideArticles.length > 0 ?
              bannerSideArticles.map((item: Article) => {
                return (
                  <div key={item._id} className=" w-full  py-4 space-y-2 justify-between flex flex-col ">
                    <Link href={`/${bannerArticle?.articleType?.slug?.current}/${item.slug.current }`} className=" w-full line-clamp-2 dark:text-stone-200 text-stone-900 hover:underline  ">{item.title}</Link>
                    <Link href={`/author/${ item.author.name }`} className="font-newsreader text-md w-full dark:text-gray-500 text-gray-700 hover:underline"><span className=" font-sans">{item.author.name}</span> </Link>
                </div>
                )
              })
                :
                <p>No Article Available</p>
              }
            </div>
       </div>
       </div>
      </div>
    )
}