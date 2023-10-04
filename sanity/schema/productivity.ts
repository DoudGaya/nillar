export const productivity = {
    name: 'productivity',
    type: 'document',
    title: 'productivity',
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
                source: 'title'
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