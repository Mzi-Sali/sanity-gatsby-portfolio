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
                  buildHookId: '613f44d21a6462ab0a17d96c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ohhmann6',
                  apiId: 'c3cb1c8f-415d-48d1-804a-59196232944d'
                },
                {
                  buildHookId: '613f44d2b57308266f3dff34',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w3fhvq7q',
                  apiId: 'dd86c648-ac3b-405c-bc28-119148b918fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mzi-Sali/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w3fhvq7q.netlify.app',
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
