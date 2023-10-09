'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'


interface NewsLetter {
  email: string;
}

export const Newsletter = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewsLetter>()


  const onSubmit: SubmitHandler<NewsLetter> = async (data) => {

    await fetch('api/submitNewsletter', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      console.log(data)
    }).catch(err => console.log(err))
  }


  return (
      <div className=' bg-banner py-10 my-10 px-10 w-full dark:bg-stone-800 border-y border-line-color dark:border-stone-500'>
          <div className=" max-w-3xl flex mx-auto text-center justify-center space-y-8 flex-col">
              <h3 className=' font-header uppercase text-2xl'>Subscribe to our newsletters</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 flex flex-col justify-center">
                  <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row">
                    <input type="email" {...register('email', {required: true})} className=' border border-primary-light dark:border-stone-600 w-full py-2 outline-none focus:outline-none px-3' />
                    <button className='bg-stone-900  text-white px-6 py-2 text-xl font-header'> Subscribe </button>
                  </div>
                  {errors.email && <small className=' text-base font-keisei text-red-500/70'> {'Please insert your email to subscribe'} </small>}
            </form>
          </div>
          
    </div>
  )
}
