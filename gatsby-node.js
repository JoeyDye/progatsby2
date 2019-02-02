// Path is part of Node
const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          // Specify page path
          path: `/posts/${node.frontmatter.path}`,
          // Specify template
          component: path.resolve('./src/components/postLayout.js'),
          // Pass data into template
          context: {
            slug: node.frontmatter.path,
          },
        })
      })
      resolve()
    })
  })
}
