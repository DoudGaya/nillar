import { HomeBanner } from "@/components/home/Banner"
import { FeaturedSection } from "@/components/home/Featured"
import { HomeHowTo } from "@/components/home/HomeHowTo"
import { HomeTechnology } from "@/components/home/HomeTechnology"
import { Newsletter } from "@/components/home/Newsletter"
import { Socials } from "@/components/home/Socials"
import { Topics } from "@/components/home/Topics"
import { client } from "./lib/sanity"
import { Article } from "@/typings"
import { Acitivities } from "@/components/home/Acitivities"
import { HomeBannerPicture } from "@/components/home/HomeBannerPicture"
import { groq } from "next-sanity"


const fetchData = async () => {
  const query = groq`*[_type == 'article']`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const data = await fetchData() as Article[]

  return (
    <main className="">
      <div className="py-10">
        <HomeBanner />
     </div>
      <div className="w-full border dark:border-stone-500 border-line-color"></div>
        <Socials />
        <Topics />
      <div className="w-full my-10 bg-banner dark:bg-stone-900 border-y border-line-color dark:border-stone-500 py-6">
        <HomeHowTo />
      </div>
      <div className="my-10">
         <FeaturedSection />
      </div>
      <div className="my-10">
        <HomeTechnology />
      </div>
        <Newsletter />
      <div className="my-10">
        <Acitivities />
      </div>

    </main>
  )
}
