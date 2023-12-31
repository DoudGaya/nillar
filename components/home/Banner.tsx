import { Article, News } from "@/typings"
import { client } from "@/app/lib/sanity"
import Image from "next/image"
import { groq } from "next-sanity"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

const fetchNews = async () => {
  const query = groq`
  *[_type == 'news'] | order(_createdAt desc)
  `
  const data = await client.fetch(query, { next: { revalidate: 10 } });
  return data[0]
}

const fetchArticles = async () => {
  const query = groq`
 *[_type == 'article'] {
  ...,
  author->,
  categories[]->
}[0...4]
`

  const data = await client.fetch(query, {next: { revalidate: 10 } })
  return data
}


export const HomeBanner = async () => {
  const data = await fetchArticles() as Article[]

  const news = await fetchNews() as News;
    return (
        <div className=" max-w-[1200px] mx-auto px-10 w-full flex flex-col ">
        <h2 className=' text-2xl lg:text-3xl font-read py-6'>LATEST</h2>
        <div className=" grid gap-y-12 grid-cols-1 w-full gap-x-10 lg:grid-cols-6">

          <div className=" lg:col-span-4 w-full flex border-b border-gray-500 lg:border-none flex-col space-y-4">
            <div className=" h-[400px] overflow-hidden ">
              <Link href={`news/${news.slug.current}`}>
                <Image className=" object-cover object-center h-full w-full" src={urlForImage(news.coverImage).url()} width={1000} height={1000} alt="" />
              </Link>
            </div>
            <Link href={`news/${news.slug.current}`} className=" text-xl font-keisei hover:underline"> {news.title} </Link>
            <p className=" line-clamp-2 font-newsreader"> { news.overview} </p>
          </div>
          <div className=" lg:col-span-2 ">
          
    <div className=" grid grid-cols-1 w-full space-y-4">
        { data.length > 0 ?
          data.map((item: Article) => {
            return (
              <div key={item._id} className="bg-white w-full dark:bg-dark-shade-bright py-4 space-y-2 px-4 border-b border-dark-shade flex flex-col ">
                <Link href={`/article/${item.slug.current }`} className="font-keisei w-full line-clamp-2 dark:text-stone-200 text-stone-900 font-semibold hover:underline  ">{item.title}</Link>
                <Link href={`/author/${ item.author.name }`} className="font-newsreader text-md w-full dark:text-gray-500 text-gray-700 hover:underline"><span className=" font-sans">{item.author.name}</span> </Link>
            </div>
            )
          })
            :
            <p>No Article Available</p>
          }
          <div className=" w-full flex py-2 justify-center">
            <Link href={'/article'} className=" text-xl w-full font-header uppercase bg-black px-6 text-white py-2">Learn More</Link>
          </div>
        </div>
       </div>
          
       </div>
      </div>
    )
}