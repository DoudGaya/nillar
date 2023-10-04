import React from 'react'
import Link from 'next/link'
import { topicItems } from '@/data/schemas'

export const Acitivities = () => {
    return (
    <div className=" max-w-6xl mx-auto px-10">
        <h3 className=' text-3xl font-header my-10 py-2 border-line-color dark:border-stone-600 border-b '>BUSINESS NEWS</h3>
            <div className='flex h-full lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row'>
                 <div className=" lg:w-3/6  h-full border-t lg:border-t-0  border-line-color dark:border-stone-500">
                    <div className=" border-b px-6 border-line-color dark:border-stone-500">
                        <h3 className=' font-header text-2xl'>LATESTS</h3>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
                         {
                        topicItems.map((item) => {
                            return (
                        <div key={item.id} className=" flex-col border-b border-line-color px-6 space-y-2 py-3 ">
                            <div className=" flex space-x-4">
                            <div className="h-20 flex-none w-20 bg-purple-700"></div>
                                 {/* <Image src={''} alt={'Image'} className=" h-[100px] w-[100px] bg-yellow-200" /> */}
                                    <div className=" flex flex-col justify-center">
                                        <p className=' text-xs'>2 Days </p>
                                <Link href={''} className=" font-semibold hover:underline font-keisei">{item.title}</Link>
                                
                             </div>
                            </div>
                         </div>
                        )
                    })        
                }
                    </div>
                    
                </div>
            <div className=" lg:w-3/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    {
                        [1, 2, 3, 4].map((s) => {
                            return (
                                 <div key={s} className=" flex flex-col">
                                    <div className=" h-[150px] bg-purple-600">

                                    </div>
                                        <div className=" py-2 bg-stone-200 dark:bg-stone-800 space-y-6 px-2">
                                            <Link href={''} className=" font-semibold line-clamp-2 hover:underline font-keisei  ">
                                                Google AI: Google Announce Bard to compete with the ChatGPT 
                                            </Link> 
                                        </div>
                                </div>
                            )
                        } )
                    }
            </div>

               
            </div>
     </div>
  )
}
