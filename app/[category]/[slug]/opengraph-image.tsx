import { ImageResponse } from 'next/server'
import { Article } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'


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
  width: 1200,
  height: 800,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: {
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
        <div tw='flex flex-col'> 
        <img src={urlForImage(article.coverImage).url()} tw=' flex w-full flex-1 object-cover object-center' alt={'Nillar Magazines'} />      
        <div tw=" flex flex-col space-y-3 bg-primary-light dark:bg-dark-shade">
            <p tw=' font-header text-lg'>{article?.title}</p>
            <p tw=' font-newsreader line-clamp-2'> {article?.overview}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}