export const howTo = {
    name: 'howTo',
    type: 'document',
    title: 'how To',
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
            title: 'Title'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
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
            name: 'category',
            title: 'category',
            type: 'reference',
            to: {
                type: 'category'
            }
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