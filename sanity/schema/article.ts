export const article = {
    name: 'article',
    type: 'document',
    title: 'Articles',
    fields: [
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
                fields: [
                    {
                        type: 'string',
                        name: 'alt',
                        title: 'Alternative Text'
                    }
                ]
        },
        {
            name: 'imageSource',
            type: 'string',
            title: 'Image Source',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },

        {
            name: 'overview',
            type: 'string',
            title: 'Overview'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'category',
            title: 'category',
            type: 'reference',
            to: {
                type: 'category'
            }
            // of: [{type: 'reference', to: {type: 'category'}}],
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tags'}}],
        },

        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        },
         {
            name: 'editor',
            title: 'Editor',
            type: 'reference',
            to: {type: 'editor'},
        },
        {
            name: 'content',
            type: 'array',
            title: 'Contents',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'string',
                            name: 'alt',
                            title: 'Alternative Text'
                        }
                    ]
                }
            ]
        }
    ]
}