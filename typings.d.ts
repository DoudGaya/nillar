import { Image, Reference, Slug } from "sanity";

type Base = {
    _type: string;
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;

}

interface Article extends Base {
    author: Author;
    content: Block[];
    tags: Tags[]
    category: Category;
    coverImage: Image;
    slug: Slug;
    imageSource: string
    twitter: string;
    linkedin: string
    title: string;
    overview: string;
}

interface News extends Base {
    author: Author;
    body: Block[];
    tags: Tags[]
    category: Category;
    imageSource: string
    coverImage: Image;
    slug: Slug;
    title: string;
    overview: string;
}

interface Author extends Base {
    bio: Block[]
    image: Image;
    name: string;
    linkedin: string;
    twitter: string;
    slug: Slug;
}

interface Editor extends Base {
    bio: Block[]
    image: Image;
    linkedin: string
    twitter: string
    name: string;
    slug: Slug;
}

interface Image {
    _type: 'image';
    asset: Reference;
}

interface Slug {
    _type: 'slug';
    current: string
}

interface Reference {
    _type: 'reference'
    _ref: string
}

interface Block {
    _key: string;
    _type: 'block';
    children: Span[];
    markDefs: any[];
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
}

interface Category extends Base {
    dedscription: string;
    title: string;
}

interface coverImage {
    _type: 'image';
    asset: Reference;
}

interface Title {
    _type: 'string';
    current: string
}


interface HowTo extends Base {
    title: string;
    overview: string;
    coverImage: Image;
    content: Block[];
    slug: Slug
}
