import React from 'react'
import nillar from '@/public/nillar_logo.svg'
import nillarDark from '@/public/nillar_logo_dark.svg'
import Image from "next/image"
import Link from 'next/link'

export const MobileNavLogo = () => { 
 
  return (
    <div className=" flex px-6  justify-between ">
      <Link
        href={""}
        className=" ">
        <Image
          src={nillar}
          alt="Nillar"
          className=" h-10 object-contain hidden dark:block object-left"
        />
        <Image
          src={nillarDark}
          alt="Nillar"
          className=" h-10 block dark:hidden object-contain object-left"
        />
      </Link>
    </div>
  );
}
