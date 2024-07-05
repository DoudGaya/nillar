import React from 'react'
import news from '../../public/news.jpg'

export const HomeBannerPicture = () => {
  return (
      <div className=' h-[400px] w-full bg-norepeat bg-cover bg-center ' style={{ backgroundImage: `url(${news.src})` }}>
          
    </div>
  )
}
