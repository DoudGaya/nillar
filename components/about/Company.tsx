import Image from 'next/image'
import React from 'react'

export const Company = () => {
  return (
      <div className=' max-w-5xl py-10 mx-auto'>
          <div className=" grid grid-cols-2">
          <div className= " space-y-6">
          <h2 className=' font-header text-3xl border-b border-dark-shade-bright py-2'>Our Company</h2>
          <p className=' font-newsreader text-lg text-justify'>
            Nillar is financial and business magazines created to share news and articles on
            the latest trends in the world of finance, banking, investment, insurance, real estate,
            technology, healthcare, retail, hospitality, tourism, sports, media, telecommunications,
            energy, transportation, construction, manufacturing, agriculture, and more.
          </p>
        </div>
        <div className="">
          <Image src={''} alt='' />
        </div>
          </div>
    </div>
  )
}
