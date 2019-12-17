export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df93c0a10e32cc7c43eab4e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tac15ux2',
                  apiId: '7ec4d956-c99d-4b10-b276-72f9413e557f'
                },
                {
                  buildHookId: '5df93c0a18c9b9cc223a296f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xw5et95m',
                  apiId: '39451171-ffbf-48d6-9017-209f507c1bae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zdehkordi-gem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xw5et95m.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
