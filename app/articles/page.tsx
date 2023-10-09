import { ArticleBanner } from '@/components/articles/ArticleBanner'
import { CategoryContents } from '@/components/category/CategoryContents'
import React from 'react'

const articles = () => {
  return (
    <div>    
          <ArticleBanner category={'articles'} /> 
          <CategoryContents />
    </div>
  )
}


export default articles