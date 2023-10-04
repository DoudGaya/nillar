import React from 'react'
import { DarkButton } from './DarkButton'

export const MobileFooter = () => {
  return (
    <div className=" w-full bottom-0 flex-col z-10 ">
       <div className=' flex w-full justify-between p-4 bg-banner dark:bg-stone-700 border-b-0 border-t border-line-color dark:border-stone-500 dark-bg-primary'>
              <div className=" w-full flex justify-end">
                 
            <DarkButton />
        </div>
      </div>
   </div>
  )
}
