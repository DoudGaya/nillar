import Image from "next/image"
import Link from "next/link"
import { groq } from "next-sanity"
import { client } from "@/app/lib/sanity"
import { Article } from "@/typings"
import { urlForImage } from "@/sanity/lib/image"


const fetchArticles = async () => {
  const query = groq`
  *[_type == 'article'] | order(_createdAt) 
  {
    title,
    coverImage,
    slug,
    category-> {
        title
    },
    _createdAt,
    _updatedAt
  }[0...5]
 `
    const data = await client.fetch(query);
    return (data);
}




export const Topic = async ({ single }: any) => {
    const articles = await fetchArticles() as Article[];
    return (
        <div className=" flex flex-col border border-line-color dark:border-dark-shade-bright px-8 py-8 space-y-4">
        <div className=" border-b border-dark-shade-bright">
             <h3 className=" font-header text-2xl uppercase">{single}</h3>
        </div>
            <div className=" flex space-y-6 flex-col">
             { 
                    articles.map((item: Article) => {
                    return (
                        <>
                            {
                                item.category?.title == single &&
                        <div key={item._id} className=" flex flex-col p-6 border-b border-primary space-y-2 py-3 ">
                            <div className=" flex space-x-4">
                                 <Image src={urlForImage(item.coverImage).url()} alt={''} height={1000} width={1000} className=" h-20 flex-none object-cover w-20 bg-yellow-200" />
                             <div className="">
                                <Link href={''} className=" font-semibold hover:underline font-keisei">{ item.title}</Link>
                             </div>
                            </div>

                            <div className=" w-full flex items-center justify-between">
                                 <p>2 Days</p>
                                 <Link href={item.slug.current} className=" bg-primary-light/30 font-keisei px-4 py-1">Learn more</Link>
                            </div>
                         </div>
                        }
                        </>
                     )
                 })
             }
             <div className=" flex justify-center">
                <Link href={single} className=" bg-black text-white font-keisei px-8 py-2 ">More</Link>
             </div>
         </div>
     </div>
    )
}