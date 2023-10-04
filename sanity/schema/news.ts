export const news = {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
                fields: [
                    {
                        type: 'string',
                        name: 'alt',
                        title: 'Alternative 2478323360 Text'
                    }
                ]
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
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tags'}}],
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