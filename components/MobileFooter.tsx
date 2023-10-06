import React from 'react'
import { DarkButton } from './DarkButton'

export const MobileFooter = () => {
  return (
    <div className=" w-full bottom-0 flex-col z-10 ">
       <div className=' flex w-full justify-between p-4 bg-white dark:bg-dark-shade border border-b-0 border-t border-dark-shade-bright dark:border-stone-500 dark-bg-primary'>
              <div className=" w-full flex justify-end">
            <DarkButton />
        </div>
      </div>
   </div>
  )
}
