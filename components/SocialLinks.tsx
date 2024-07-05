import React from 'react'
import { socials } from '@/data/schemas'
import { SocialLinks } from '@/typings'
import Link from 'next/link'

export const ArticleSocialLinks = () => {
  return (
     <div className=" flex flex-col w-full bg-primary-light dark:bg-dark-shade-bright py-6 px-4 border-b space-y-8  ">
            <p className=' font-header text-2xl border-b pb-3 '>Follow US </p>
            <div className=" grid grid-cols-4">
            {
              socials.map((s: SocialLinks) => {
                return (
                  <Link key={s.id} href={s.url}>
                    {s.icons}
                  </Link>
                      )
                    })
            }
              </div>        
        </div>
  )
}
