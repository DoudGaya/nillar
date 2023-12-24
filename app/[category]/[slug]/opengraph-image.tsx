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
  width: 900,
  height: 750,
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
      <div
        tw=' relative flex '
        style={{
          fontSize: 10,
          backgroundImage: `url(${urlForImage(article.coverImage).url()})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundOrigin: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          borderRadius: '40px',
          color: 'white',
          backgroundColor: 'black',
          fontSize: 8,
          padding: '4px'
        }}
        >
          Nillar Magazine...
        </div>
      </div>
    ),
    size,
  );
}