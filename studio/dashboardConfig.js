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
                  buildHookId: '5eb6d2ca588cea702dbfb69b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wur5rxsw',
                  apiId: '62ed2e1e-0bc1-472c-b2d6-42dbdfe5c718'
                },
                {
                  buildHookId: '5eb6d2ca6b524cc67d591f48',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x8vr3ura',
                  apiId: 'f603f308-0697-44c6-84ed-acef7dbbef3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Goyaisgod/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x8vr3ura.netlify.app', category: 'apps'}
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
