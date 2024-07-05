import { groq } from 'next-sanity'
import { client } from './lib/sanity'
import { Article } from '@/typings'


// Fetching Articles
const fetchArticles = async () => {
    const query = groq`*[_type == 'article']{
        slug {
            current
        },
        _updatedAt
    }`
    const data = await client.fetch(query)
    return data
}


// Fetching News
const fetchNews = async () => {
    const query = groq`*[_type == 'news']{
        slug {
            current
        },
        _updatedAt
    }`
    const data = await client.fetch(query)
    return data
}


// Fetching How to
const fetchHowto = async () => {
    const query = groq`*[_type == 'how-to']{
        slug {
            current
        },
        _updatedAt
    }`
    const data = await client.fetch(query)
    return data
}


// fetching Categories
const fetchCategories = async () => {
    const query = groq`*[_type == 'category']{
        slug {
            current
        },
        _updatedAt
    }`
    const data = await client.fetch(query)
    return data
}
 
export default async function sitemap() {
    const baseUrl = 'https://nillar.com'


    const articlesUrls = await fetchArticles() as Article[]
    const aUrls = articlesUrls.map((article) => {
       return {
           url: `${baseUrl}/article/${article.slug.current}`,
           lastModified: new Date(article._updatedAt)
        }
    }) ?? []

    const newsUrls = await fetchNews() as Article[]
    const nUrls = newsUrls.map((n) => {
       return {
           url: `${baseUrl}/news/${n.slug.current}`,
           lastModified: new Date(n._updatedAt)
        }
    }) ?? []

    const howToUrls = await fetchHowto() as Article[]
    const hUrls = howToUrls.map((how) => {
       return {
           url: `${baseUrl}/how-to/${how.slug.current}`,
           lastModified: new Date(how._updatedAt)
        }
    }) ?? []

    const categoriesUrls = await fetchCategories() as Article[]
    const catUrls = categoriesUrls.map((cat) => {
       return {
           url: `${baseUrl}/${cat.slug.current}`,
           lastModified: new Date(cat._updatedAt)
        }
    }) ?? []
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://nillar.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/stock',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/join',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/advertisement',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/partnering',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nillar.com/promotion',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...aUrls,
        ...nUrls,
        ...hUrls,
        ...catUrls,
  ]
}