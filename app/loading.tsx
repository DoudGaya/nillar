import React from 'react'
import logoLight from '@/public/single/nillar_light.png'
import logoDark from '@/public/single/nillar_dark.png'
import Image from 'next/image'

const loading = () => {
  return (
    <div className=' h-screen fixed w-full bg-white flex items-center justify-center dark:bg-black z-50 '>
      <div className=""></div>
      {/* <Image src={logoLight} className=' h-[100px] block dark:hidden w-[100px] ' alt='Nillar Logo' />
      <Image src={logoDark} className='h-[100px] hidden dark:block w-[100px]' alt='Nillar Logo' /> */}
    </div>
  )
}

export default loading
