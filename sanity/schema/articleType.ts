import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articleType',
  title: 'Article Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
     defineField({
      name: 'slug',
      title: 'Slug',
       type: 'slug',
       options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
