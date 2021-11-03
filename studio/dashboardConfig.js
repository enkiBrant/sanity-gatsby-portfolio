export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '618238e51839c78f13698de4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-znduu649',
                  apiId: '4c278f79-8de5-4b74-b204-eaf64d76416f'
                },
                {
                  buildHookId: '618238e51839c7875669ec22',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ojszphfe',
                  apiId: '3ba7243f-e643-4541-b527-24ce2bd05ff7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enkiBrant/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ojszphfe.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
