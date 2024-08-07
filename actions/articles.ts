import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export const fetchArticles = async () => {
  const query = groq`
  *[_type == 'article'] | order(_createdAt) 
  {
    title,
    coverImage,
    overview,
    slug,
    category-> {
        title
    },
    _createdAt,
    _updatedAt
  }[0...5]
 `
    const data = await client.fetch(query,  { revalidate: 10});
    return (data);
}

export const fetchAllArticles = async () => {
    const query = groq`*[_type == 'article'] | order(_createdAt desc) {
      ...,
      author->,
      articleType->,
      editor->,
    }[0...5]`
    const data = await client.fetch(query, { revalidate: 10  })
    return data
  }

export const fetchAllCategory = async () => {
    const query = await groq`*[_type == 'category'] | order(_createdAt desc) {
        _id,
        slug {
            current
        },
        title
    } `
    const data = await client.fetch(query, { revalidate: 10 })
    return data
}




export const fetchSingleCategory = async (category: string) => {
  const query = groq`
  *[_type == 'category' && slug.current == "${category}"] | order(_createdAt desc) {
  title,
  _id,
  "articles": *[_type == 'article' && references(^._id)] | order(_createdAt desc) {
    ...,
    articleType->,
    author->,
  }
}[0]
`
  const data = await client.fetch(query, { revalidate: 10 });
  return data
}

export const fetchSingleArticle = async (slug: string) => {
  const query = await groq`*[_type == "article" && slug.current == "${slug}" ] {
    ...,
    author->,
    category->,
    imageSource,
    content,
    articleType->,
    _id,
  } [0]
  `
  const data = await client.fetch(query, { revalidate: 10 })
  return data
}