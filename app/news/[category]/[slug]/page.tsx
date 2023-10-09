import React from 'react'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import { Slug } from '@/typings'
import { ArticleBanner } from '@/components/articles/ArticleBanner'
import { Contents } from '@/components/articles/Contents'


const fetchArticle = async ({ slug, category }: {slug: Slug, category: string}) => {
  const query = await groq`
  *[_type == "article" && refe ] | order(publishedAt desc) [0...1]  `
}


const Category = () => {
  return (
    <div className='py-20'>
        <ArticleBanner category={'business'} />
      <div className=" max-w-6xl mx-auto">
        <Contents />
      </div>
    </div>
  )
}

export default Category
