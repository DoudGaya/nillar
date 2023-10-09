import React from 'react'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import { Article, Slug } from '@/typings'
import { ArticleBanner } from '@/components/articles/ArticleBanner'
import { Contents } from '@/components/articles/Contents'
import category from '@/sanity/schema/category'



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
  const data = await client.fetch(query)
  return data
}

const fetchAll = async ( type: string ) => {
  const query = await groq`
  *[_type == '${type}']{
    title,
    slug,
    _type,
    coverImage,
  }[0...10]`
  const data = await client.fetch(query);
  return data
}

const Category = async ({params}: {params: {slug: string, category: string}}) => {
  const article = await fetchArticle(params.slug, params.category) as Article;
  const all = await fetchAll(params.category) as Article[];


  return (
    <div className='py-20'>
        <ArticleBanner category={params.category} />
      <div className="max-w-6xl mx-auto">
        <Contents article={article} all={all} />
      </div>
    </div>
  )
}

export default Category
