import { Article, News } from "@/typings"
import { client } from "@/app/lib/sanity"
import Image from "next/image"
import { bannerItems } from "@/data/schemas"
import { groq } from "next-sanity"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"





const fetchNews = async () => {
  const query = groq`
  *[_type == 'news']| order(_createdAt)  
  `
  const data = await client.fetch(query);
  return data[0]
}

const fetchArticles = async () => {
  const query = groq`
 *[_type == 'article'] {
  ...,
  author->,
  categories[]->
}
`

  const data = await client.fetch(query)
  return data
}


export const HomeBanner = async () => {
  const data = await fetchArticles() as Article[]

  const news = await fetchNews() as News;
    return (
        <div className=" max-w-[1200px] mx-auto px-10 py-16">
        <h2 className=' text-2xl lg:text-3xl font-read py-6'>LATEST</h2>
        <div className=" grid grid-cols-1 gap-x-10 lg:grid-cols-6">

          <div className=" col-span-4 flex flex-col space-y-4">
            <div className=" h-[400px] overflow-hidden ">
              <Image className=" h-full w-full rounded-xl" src={urlForImage(news.coverImage).url()} width={1000} height={1000} alt="" />
            </div>
            <Link href={`/${news.slug.current}`} className=" text-xl font-keisei hover:underline"> {news.title} </Link>
            <p className=" line-clamp-2 font-newsreader"> { news.overview} </p>
          </div>

      <div className=" w-full col-span-2 ">
             <div className=" grid grid-cols-1 flex-none space-y-4  ">
        { data.length > 0 ?
          data.map((item: Article) => {
            return (
              <div key={item._id} className=" bg-banner dark:bg-[#181701] py-4 space-y-2 px-4 border-t-2 border-primary flex flex-col ">
              <Link href={`/articles/${item.slug.current}`} className=" font-keisei truncate dark:text-stone-200 text-stone-900 font-semibold hover:underline text-lg  ">{item.title}</Link>
                <Link href={`/author/${item.author.name}`} className=" font-sans text-md dark:text-gray-500 text-gray-700 hover:underline"> <span className=" textgray-600 font-primary">By </span>{item.author.name} </Link>
            </div>
            )
          })
            :
            <p>No Article Available</p>
          }
          <div className=" w-full flex py-2 justify-center">
            <Link href={''} className=" text-xl w-full font-header uppercase bg-black px-6 text-white py-2">Learn More</Link>
          </div>
        </div>
       </div>
          
       </div>
      </div>
    )
}