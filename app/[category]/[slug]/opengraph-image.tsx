import { ImageResponse } from 'next/server'
import { Article } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import Image from 'next/image'


const fetchArticle = async (slug: string, category: string) => {
  const query = await groq`
  *[_type == "${category}" && slug.current == "${slug}" ] {
    ...,
    author->,
    slug->,
    category->,
    imageSource,
    content,
  } [0]`
  const data = await client.fetch(query, { next: { revalidate: 10 } })
  return data
}

 
export const runtime = 'edge'
 
export const alt = 'Nillar Magazines'
export const size = {
  width: 900,
  height: 750,
}
export const contentType = 'image/png'
 
export default async function og({ params }: {
    params: {
        slug: string,
        category: string
    }
}) {
    const category = params.category
    const slug = params.slug
    const article = await fetchArticle(slug, category) as Article
  return new ImageResponse(
    (
      <div tw="flex rounded-lg flex-col h-full pb-6 items-center justify-center ">
        <div tw=" relative">
          <img
            src={urlForImage(article.coverImage).url()}
            height={1000}
            width={1000}
            tw=" w-full h-[80%]"
            alt={article.title}
          />
          <small className=' absolute left-6 bottom-6'> { article?.author?.name }</small>
        </div>
        <div tw=" flex flex-col bg-black text-white px-6 py-6  bg-primary-light ">
          <p tw="font-header text-3xl">{article?.title}</p>
          <p tw="font-newsreader line-clamp-2"> {article?.overview}</p>
        </div>
      </div>
    ),
    size
  );
}