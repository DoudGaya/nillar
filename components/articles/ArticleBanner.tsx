import React from 'react'

export const ArticleBanner = ({category}: {category: string}) => {
  
  return (
    <div className={`bg-white border-b-2 ${ category == 'news' ? 'border-red-600' : 'border-blue-400'} dark:bg-dark-shade-bright flex items-center justify-center h-[150px]`}>
        <p className=' text-3xl uppercase font-header tracking-wide'>{category} </p>
    </div>
  )
}
