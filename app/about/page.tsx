import { AboutBanner } from '@/components/about/AboutBanner'
import { Company } from '@/components/about/Company'
import { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata = {
  title: 'About'
}

const About = () => {
  return (
    <div>
          <AboutBanner />
          <Company />
    </div>
  )
}

export default About