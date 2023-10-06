import React from 'react'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import { Slug } from '@/typings'


const fetchArticle = async ({ slug, category }: {slug: Slug, category: string}) => {
  const query = await groq`
  *[_type == "article"] | order(publishedAt desc) [0...1]  `
}


const Category = () => {
  return (
    <div className='py-20 '>
        
    </div>
  )
}

export default Category
