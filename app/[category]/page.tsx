import { CategoryBanner } from '@/components/category/CategoryBanner'
import { CategoryContents } from '@/components/category/CategoryContents'
import { Metadata } from 'next'
import React from 'react'


export const generateMetadata = async ({ params }:
  {
    params: { category: string }
  }): Promise<Metadata> => { 
  
  return {
    title: params.category,
    alternates: {
      canonical: `/${params.category}`
    },
    description: `Nillar Magazine, Stay informed with latest news on ${params.category} and other related topics`
  }
  
}

const page = ({ params }: { params: { category: string } }) => {

  return (
    <div className=' md:mt-[120px]'>
          <CategoryBanner category={params.category} />
          <div className="max-w-7xl mx-auto">
            <CategoryContents category={params.category} />
          </div>
    </div>
  )
}

export default page