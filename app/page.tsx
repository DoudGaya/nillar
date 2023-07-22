import Image from 'next/image'
import logoLight from '@/public/logo.png'
import logoDark from '@/public/logo_dark.png'
import CountdownTimer from '@/components/Coundown'
import { WaitList } from '@/components/WaitList'

export default function Home() {
  return (
    <main className=" h-screen flex items-center justify-center bg-[#fefff4] w-full">
      <div className=" flex flex-col items-center space-y-10">
        <div className=" h-[200px] w-[200px] border-[10px] ">
          <Image src={logoLight} alt='Nillar logo' sizes='10' className=' h-full w-full object-center object-cover' />
        </div>
        <CountdownTimer />
        <div className=" w-full">
          <WaitList />
        </div>
      </div>
    </main>
  )
}
