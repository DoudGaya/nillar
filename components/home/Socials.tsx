import { socials } from '@/data/schemas'
import Link from 'next/link'
export const Socials = () => {
    return (
        <div className=" px-8">
             <div className=" px-4 items-center flex lg:justify-between justify-center max-w-4xl   mx-auto w-full py-3 my-10">
                <div className="flex space-x-4 items-center">
                    {
                        socials.map((item) => {
                            return (
                                <Link key={item.id} href={item.url} className=' p-1 hover:bg-primary-light/60 rounded-lg'>
                                    {item.icons}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}