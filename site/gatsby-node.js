const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const defaultTemplate = "SimpleTemplate.js";

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const template = node.frontmatter.template || defaultTemplate;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `template`,
      value: template,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug, template
            }
          }
        }
      }
    }
  `)

  if (result.data && result.data.allMarkdownRemark) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${node.fields.template}`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  }
}
