import { HomeBanner } from "@/components/home/Banner"
import { FeaturedSection } from "@/components/home/Featured"
import { HomeHowTo } from "@/components/home/HomeHowTo"
import { HomeTechnology } from "@/components/home/HomeTechnology"
import { Newsletter } from "@/components/home/Newsletter"
import { Socials } from "@/components/home/Socials"
import { Topics } from "@/components/home/Topics"
import { Article } from "@/typings"
import { Acitivities } from "@/components/home/Acitivities"
import { groq } from "next-sanity"
import { fetchAllArticles } from "@/actions/articles"

export default async function Home() {
  const data = await fetchAllArticles() as Article[]
  const bannerArticle = data[0]
  const bannerSideArticles = data.slice(1, 5)

  return (
    <main className="">
      <div className="">
        <HomeBanner 
        bannerArticle={bannerArticle} 
        bannerSideArticles={bannerSideArticles} />
     </div>
        <Topics />
      <div className="w-full bg-banner dark:bg-stone-900 border-y border-line-color dark:border-stone-500 py-6">
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
