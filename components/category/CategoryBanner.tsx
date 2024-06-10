import React from 'react'
import Link from 'next/link'

export const CategoryBanner = ( {category}: {category: string}) => {
  
  return (
    <div className={`bg-white border-b-2 mt-10 dark:bg-black dark:text-white space-y-2 dark:border-slate-400 border-black flex-col dark:bg-dark-shade-bright flex items-center justify-center h-[150px]`}>
          <p className=' text-3xl uppercase font-header tracking-wide'>{category} </p>
      <Link href="/" className=' flex space-x-2  items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span>Home</span>
      </Link>
    </div>
  )
}
