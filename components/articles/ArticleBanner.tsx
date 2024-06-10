import React from 'react'

export const ArticleBanner = ({ category }: { category: string }) => {
  return (
    <div className={`bg-white border-b-2 ${
       category == 'news' ? 'border-red-600' 
       : category == 'how-to' ? ' border-orange-500' :
        'border-blue-400'
        } dark:bg-black flex md:mt-[130px] items-center justify-center h-[100px]`}>
        <p className=' text-3xl uppercase font-header tracking-wide'>{category} </p>
    </div>
  )
}
