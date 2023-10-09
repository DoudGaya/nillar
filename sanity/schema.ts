import { type SchemaTypeDefinition } from 'sanity'
import { article } from './schema/article'
import author from './schema/author'
import category from './schema/category'
import { news } from './schema/news'
import editor from './schema/editor'
import { howTo } from './schema/howto'
import { tags } from './schema/tags'
import { newsLetters } from './schema/newsLetters'
export const schema: { types: SchemaTypeDefinition[] } = {
  
  types: [article, author, category, news, tags, howTo, newsLetters, editor]
}
