import React from 'react'

export const Newsletter = () => {
  return (
      <div className=' bg-banner py-10 my-10 px-10 w-full dark:bg-stone-800 border-y border-line-color dark:border-stone-500'>
          <div className=" max-w-3xl flex mx-auto text-center justify-center space-y-8 flex-col">
              <h3 className=' font-header uppercase text-2xl'>Subscribe to our newsletters</h3>
              <form className=" w-full space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center">
                  <input type="text" className=' border border-primary-light dark:border-stone-600 w-full py-2 outline-none focus:outline-none px-3' />
                  <button className='bg-stone-900  text-white px-6 py-2 text-xl font-header'> Subscribe </button>
            </form>
          </div>
          
    </div>
  )
}
