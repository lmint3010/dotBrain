/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        // Directly add "slug" field to current node
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

const allMarkdownStringQuery = `
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(allMarkdownStringQuery)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/Blog.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug
            }
        })
    })
}
