import React from 'react'

const produc = [1,2,3,4,5,6,7,7,8,9,10,,2,3,12,32,243,314,4,403,43,545,45,46,6,6,46,5,53,53]

const productivity = () => {
  return (
    <div className=' py-[100px] w-full'>
      <div className=" grid grid-cols-8 max-w-[1200px] mx-auto">
        <div className=" col-span-6 grid grid-cols-4 gap-4">
          {
            produc.map(() => {
              return (
                <div className=" flex flex-col py-4 border-y px-2">
                  <p className=' bg-banner px-3 py-1'>Personal</p>
                  <div className=" line-clamp-2 font-keisei font-">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, incidunt.</div>
                </div>
              )
            })
          }
        </div>
        <div className=" col-span-2"></div>

      </div>
    </div>
  )
}

export default productivity