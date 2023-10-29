import { CategoryBanner } from '@/components/category/CategoryBanner'
import { CategoryContents } from '@/components/category/CategoryContents'
import React from 'react'

const page = ( {params}: {params: {category: string}}) => {
  return (
    <div className=''>
          <CategoryBanner category={params.category} />
          <div className="max-w-6xl mx-auto">
            <CategoryContents category={params.category} />
          </div>
    </div>
  )
}

export default page