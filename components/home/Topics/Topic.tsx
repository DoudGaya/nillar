import Image from "next/image"
import Link from "next/link"
import { groq } from "next-sanity"
import { client } from "@/app/lib/sanity"
import { Article } from "@/typings"
import ReactTimeAgo from "react-time-ago"
import { fetchArticles, fetchSingleCategory } from "@/actions/articles"


const dynamic = 'force-dynamic'

import { urlForImage } from "@/sanity/lib/image"
import { fetchAllCategory } from '../../../actions/articles';


export const Topic = async ({ single }: any) => {
    const articles = await fetchArticles() as Article[];

    const businessArticle = await fetchSingleCategory('business') as Article[]

    return (
        <div className=" flex flex-col py-8 space-y-4">
        <div className=" w-full flex">
                <h3 className={` ${single == 'Business' ? 'bg-blue-600 text-white' : '' } font-header px-6 py-1 text-2xl `}>
                    {single}
                </h3>
        </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* {
                    businessArticle.map((item) => {
                        return (
                            <Link href={`/article/${item.slug?.current}`} key={item._id} className=" flex flex-col space-y-2 rounded-md hover:bg-neutral-100/50 dark:hover:bg-neutral-800 p-3 ">
                            <div className=" flex flex-col">
                                <Image src={urlForImage(item.coverImage).url()} alt={''} height={800} width={800} className="h-[200px] flex-none object-cover w-full" />
                                <div className=" flex flex-col py-2 space-y-3">
                                        <h1 className=" font-keisei">{item.title}</h1>
                                        <p className=" line-clamp-2 text-sm">{item.overview}</p>
                                    </div>
                                    </div>
                                <div className="w-full flex items-center justify-between">
                            </div>
                        </Link>
                        )
                    })
                } */}
             { 
                    articles.map((item: Article) => {
                    return (
                        <div key={item._id}>
                            {
                            item.category?.title == single &&
                            <Link href={`/article/${item.slug?.current}`} key={item._id} className=" flex flex-col space-y-2 rounded-md hover:bg-neutral-100/50 dark:hover:bg-neutral-800 p-3 ">
                                        <div className=" flex flex-col">
                                            <Image src={urlForImage(item.coverImage).url()} alt={''} height={800} width={800} className="h-[200px] flex-none object-cover w-full" />
                                            <div className=" flex flex-col py-2 space-y-3">
                                                    <h1 className=" font-keisei">{item.title}</h1>
                                                    <p className=" line-clamp-2 text-sm">{item.overview}</p>
                                            </div>
                                        </div>
                                <div className="w-full flex items-center justify-between">
                                </div>
                            </Link>
                            }
                        </div>
                     )
                 })
             }

         </div>
     </div>
    )
}