import React from 'react'
import { DarkButton } from '../DarkButton'

export const MobileFooter = () => {
  return (
    <div className=" w-full bottom-0 flex-col z-10 py-4 px-6 ">
       <div className=' flex w-full bg justify-end p-4  border-dark-shade-bright dark:border-stone-500 dark-bg-primary'>
            <div className=" w-full flex justify-end">
            <DarkButton />
        </div>
      </div>
   </div>
  )
}
