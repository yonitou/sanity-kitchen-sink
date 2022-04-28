export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '626b0aaed07ed4319333023f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yg496cho',
                  apiId: '67469117-e8bd-463c-a51e-b932d2297bcc'
                },
                {
                  buildHookId: '626b0aae4237d22167dd7775',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2fbpvd1v',
                  apiId: 'bafb64d4-c380-45ae-8898-d0c9ab453c22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yonitou/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2fbpvd1v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
