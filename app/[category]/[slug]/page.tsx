import React from 'react'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import { Article, News } from '@/typings'
import { ArticleBanner } from '@/components/articles/ArticleBanner'
import { Contents } from '@/components/articles/Contents'




async function generateMetadata({ params }: {
  params: {
    slug: string
    category: string
  }
}) {
  try {
    const articleData = await fetchArticle(params.slug, params.category) as Article
    if (!articleData) return {
      title: 'Title not found',
      description: 'The page you are looking for does not exist'
    }
    

    return {
      title: articleData.title,
      description: articleData.overview,
      alternates: {
        canonical: `/${articleData._type}/${articleData.slug.current}`
      },
      twitter: {
        card: 'summary_large_image',
        title: articleData.title,
        description: articleData.overview,
        siteId: 'NILLARMAG',
        creator: '@nillarmagazine',
        creatorId: 'NILLARMAG',
        
      }
    }
  } catch (error) {
    return {
      title: 'Title not found',
      description: 'The page you are looking for does not exist'
    }
  }
}



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

const fetchAll = async ( type: string ) => {
  const query = await groq`
  *[_type == '${type}']{
    _id,
    title,
    slug,
    _type,
    coverImage,
  }[0...10]`
  const data = await client.fetch(query, { next: { revalidate: 10 } });
  return data
}

const Category = async ({ params }:
  {
    params: {
      slug: string,
      category: string
    }
  }) => {
  const article = await fetchArticle(params.slug, params.category) as Article;
  const all = await fetchAll(params.category) as News[];


  return (
    <div className=''>
        <ArticleBanner category={params.category} />
      <div className="max-w-6xl mx-auto">
        <Contents article={article} all={all} />
      </div>
    </div>
  )
}

export default Category