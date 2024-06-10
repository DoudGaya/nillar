import React from 'react'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import { Article, News } from '@/typings'
import { ArticleBanner } from '@/components/articles/ArticleBanner'
import { Contents } from '@/components/articles/Contents'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { fetchAllArticles } from '@/actions/articles'
import { fetchSingleArticle } from '@/actions/articles'

interface PropsData {
  params: {
    slug: string
    category: string
  }
}


// export const generateMetadata = async ({ params }: PropsData): Promise<Metadata> => {
// const article = (await fetchArticle(params.slug, params.category)) as Article;

//   if (!article) {
//     return {
//       title: '404 - Not Found',
//       description: 'The page you are looking for does not exist'
//     }
//   }

//   return {
//     title: article.title,
//     description: article.overview,
//     alternates: {
//       canonical: `/${article.slug.current}`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.overview,
//       siteId: "NILLARMAG",
//       creator: "@nillarmagazine",
//       creatorId: "NILLARMAG",
//     },
//   };
  
// }


// export async function generateMetadata({ params }: {
//   params: {
//     slug: string
//     category: string
//   }
// }) {
//   try {
//     const articleData = await fetchArticle(params.slug, params.category) as Article
//     if (!articleData) return {
//       title: 'Title not found',
//       description: 'The page you are looking for does not exist'
//     }
    

//     return {
//       title: articleData.title,
//       description: articleData.overview,
//       alternates: {
//         canonical: `/${articleData._type}/${articleData.slug.current}`,
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: articleData.title,
//         description: articleData.overview,
//         siteId: "NILLARMAG",
//         creator: "@nillarmagazine",
//         creatorId: "NILLARMAG",
//       },
    
//     };
//   } catch (error) {
//     return {
//       title: 'Title not found',
//       description: 'The page you are looking for does not exist'
//     }
//   }
// }

// const fetchArticle = async (slug: string, category: string) => {
//   const query = await groq`*[_type == "article" && slug.current == "${slug}" ] {
//     ...,
//     author->,
//     category->,
//     imageSource,
//     content,
//     articleType->,
//     _id,
//   } [0]
//   `
//   const data = await client.fetch(query, { revalidate: 60 })
//   return data
// }


const page = async ({ params }:
  {
    params: {
      slug: string,
      category: string
    }
  }) => {
  const article = await fetchSingleArticle(params.slug) as Article;
  const all = await fetchAllArticles() as Article[];

  console.log(article)


  if (!all || !article) {
    return notFound()
  }

  return (
    <div className=' mt-[80px] md:mt-0'>
        <ArticleBanner category={article.articleType.slug.current} />
      <div className="max-w-6xl mx-auto">
        <Contents article={article} all={all} />
      </div>
    </div>
  )
}

export default page