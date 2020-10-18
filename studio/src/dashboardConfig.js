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
                  buildHookId: '5f8bdafaee6ba07deeef9109',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s716rqc6',
                  apiId: '4126b5a7-e29f-4d59-89ef-6e8234887d93'
                },
                {
                  buildHookId: '5f8bdafb83cc57b40a1c890b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7xd9uv1r',
                  apiId: '7ca1a8e8-9286-4a1c-b98e-845320435de2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanerickson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7xd9uv1r.netlify.app', category: 'apps' }
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
