
export const tags = {
    name: 'tags',
    title: 'Tags',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }
    ],

}